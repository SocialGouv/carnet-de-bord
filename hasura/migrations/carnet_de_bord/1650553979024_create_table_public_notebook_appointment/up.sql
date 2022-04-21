CREATE TABLE "public"."notebook_appointment" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "notebook_id" uuid NOT NULL, "professional_id" UUID NOT NULL, "date" date NOT NULL, "status" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("notebook_id") REFERENCES "public"."notebook"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("professional_id") REFERENCES "public"."professional"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
