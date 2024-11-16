CREATE TABLE IF NOT EXISTS "Producto" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "Producto_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"price" numeric NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auditor" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "auditor_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "auditor_email_unique" UNIQUE("email")
);
