CREATE DATABASE tiendaApiOrders
GO
USE tiendaApiOrders
GO
CREATE TABLE [Order] (
   [Id] bigint NOT NULL IDENTITY,
   [OrderDate] datetime2 NOT NULL,
   [OrderNumber] nvarchar(max) NULL,
   [CustomerId] bigint NOT NULL,
   CONSTRAINT [PK_Order] PRIMARY KEY ([Id])
)
GO
CREATE TABLE [OrderItem] (
    [Id] bigint NOT NULL IDENTITY,
    [ProductId] bigint NOT NULL,
    [Quantity] int NOT NULL,
    [UnitPrice] decimal(18,2) NOT NULL,
    [OrderId] bigint NULL,
    CONSTRAINT [PK_OrderItem] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OrderItem_Order_OrderId] FOREIGN KEY ([OrderId]) REFERENCES [Order] ([Id])
)
GO