CREATE TABLE IF NOT EXISTS "verification" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verification_identifier_token_pk" PRIMARY KEY("identifier","token")
);
