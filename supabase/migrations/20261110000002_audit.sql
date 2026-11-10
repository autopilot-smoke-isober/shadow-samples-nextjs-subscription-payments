create table if not exists public.audit_events (
  id bigint generated always as identity primary key,
  kind text not null,
  created_at timestamptz not null default now()
);
