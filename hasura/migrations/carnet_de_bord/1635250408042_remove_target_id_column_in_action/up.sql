alter table "public"."ref_action" drop constraint "ref_action_target_id_fkey";
alter table "public"."ref_action" drop column "target_id" cascade;
alter table "public"."ref_action" add column "theme" varchar not null;

alter table "public"."ref_target" alter column "theme" set not null;
