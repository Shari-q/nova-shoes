create table if not exists public.products (
  id text primary key,
  name text not null,
  slug text not null unique,
  cat text not null,
  price numeric(12, 2) not null check (price >= 0),
  old numeric(12, 2) not null check (old >= 0),
  img text not null,
  tag text not null default 'NEW',
  rating text not null default '4.8',
  description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_idx on public.products (cat);
create index if not exists products_created_at_idx on public.products (created_at desc);

create table if not exists public.orders (
  id text primary key,
  customer text not null,
  total numeric(12, 2) not null check (total >= 0),
  status text not null default 'Processing',
  date date not null,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  email text primary key check (email = lower(email))
);

insert into public.admin_users (email)
values ('admin@nova.com')
on conflict (email) do nothing;

create or replace function public.is_nova_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_users
    where email = (select auth.jwt() ->> 'email')
  );
$$;

revoke all on function public.is_nova_admin() from public;
grant execute on function public.is_nova_admin() to authenticated;

alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.admin_users enable row level security;

drop policy if exists "Products are publicly readable" on public.products;
create policy "Products are publicly readable"
  on public.products for select
  to anon, authenticated
  using (true);

drop policy if exists "Only NOVA admins can change products" on public.products;
create policy "Only NOVA admins can change products"
  on public.products for all
  to authenticated
  using (public.is_nova_admin())
  with check (public.is_nova_admin());

drop policy if exists "NOVA admins can read orders" on public.orders;
create policy "NOVA admins can read orders"
  on public.orders for select
  to authenticated
  using (public.is_nova_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'product-images',
  'product-images',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Product images are publicly readable" on storage.objects;
create policy "Product images are publicly readable"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'product-images');

drop policy if exists "Only NOVA admins can upload product images" on storage.objects;
create policy "Only NOVA admins can upload product images"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'product-images'
    and public.is_nova_admin()
  );