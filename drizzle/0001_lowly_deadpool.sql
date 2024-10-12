CREATE TABLE IF NOT EXISTS "waitlist_users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "waitlist_users_email_unique" UNIQUE("email")
);
