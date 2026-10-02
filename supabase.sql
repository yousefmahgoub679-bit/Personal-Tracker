-- Personal Tracker: run this once in Supabase > SQL Editor > New query > Run.
-- One row per saved item (a month of habits, a week of tasks, your settings), owned by the signed-in user.

create table if not exists public.tracker_docs (
  user_id    uuid        not null references auth.users (id) on delete cascade,
  key        text        not null,
  data       jsonb       not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

-- Row-level security: each person can only see and change their own rows.
alter table public.tracker_docs enable row level security;

drop policy if exists "tracker: read own"   on public.tracker_docs;
drop policy if exists "tracker: insert own" on public.tracker_docs;
drop policy if exists "tracker: update own" on public.tracker_docs;
drop policy if exists "tracker: delete own" on public.tracker_docs;

create policy "tracker: read own"   on public.tracker_docs for select to authenticated using ((select auth.uid()) = user_id);
create policy "tracker: insert own" on public.tracker_docs for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "tracker: update own" on public.tracker_docs for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "tracker: delete own" on public.tracker_docs for delete to authenticated using ((select auth.uid()) = user_id);
