CREATE DATABASE tiendaApiAuth
GO
USE tiendaApiAuth
GO
CREATE TABLE [Customer] (
   [Id] bigint NOT NULL IDENTITY,
   [Email] nvarchar(max) NULL,
   [Password] nvarchar(max) NULL,
   CONSTRAINT [PK_Customer] PRIMARY KEY ([Id])
)
GO