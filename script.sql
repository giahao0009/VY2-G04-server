USE [DBVY2G04]
GO
/****** Object:  Table [dbo].[Bookings]    Script Date: 4/29/2022 9:57:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bookings](
	[bookingId] [char](36) NOT NULL,
	[toAddress] [nvarchar](255) NOT NULL,
	[fromAddress] [nvarchar](255) NOT NULL,
	[pickupDate] [datetimeoffset](7) NOT NULL,
	[bookingStatus] [nvarchar](255) NOT NULL,
	[numberPeoples] [int] NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[customerId] [char](36) NOT NULL,
	[vehicleId] [char](36) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[bookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Companies]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Companies](
	[companyId] [char](36) NOT NULL,
	[companyName] [nvarchar](255) NOT NULL,
	[companyEmail] [nvarchar](255) NOT NULL,
	[companyPhone] [nvarchar](255) NOT NULL,
	[companyAddress] [nvarchar](255) NOT NULL,
	[founderFirstName] [nvarchar](255) NOT NULL,
	[founderLastName] [nvarchar](255) NOT NULL,
	[founderPhone] [nvarchar](255) NOT NULL,
	[founderEmail] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[userId] [char](36) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[companyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[companyPhone] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[companyEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[companyName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[customerId] [char](36) NOT NULL,
	[customerFirstName] [nvarchar](255) NOT NULL,
	[customerLastName] [nvarchar](255) NOT NULL,
	[customerEmail] [nvarchar](255) NOT NULL,
	[customerPhone] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[customerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Drivers]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Drivers](
	[driverId] [char](36) NOT NULL,
	[driverFirstName] [nvarchar](255) NOT NULL,
	[driverLastName] [nvarchar](255) NOT NULL,
	[driverBirthDay] [date] NOT NULL,
	[driverPhone] [nvarchar](255) NOT NULL,
	[driverAddress] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[vehicleId] [char](36) NULL,
PRIMARY KEY CLUSTERED 
(
	[driverId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[vehicleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SchedulerDetails]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SchedulerDetails](
	[schedulerDetailId] [char](36) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[schedulerId] [char](36) NULL,
	[stationId] [char](36) NULL,
PRIMARY KEY CLUSTERED 
(
	[schedulerDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Schedulers]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Schedulers](
	[schedulerId] [char](36) NOT NULL,
	[schedulerStart] [nvarchar](255) NOT NULL,
	[schedulerEnd] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[vehicleId] [char](36) NULL,
PRIMARY KEY CLUSTERED 
(
	[schedulerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stations]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stations](
	[stationId] [char](36) NOT NULL,
	[stationName] [nvarchar](255) NOT NULL,
	[stationLocation] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[companyId] [char](36) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[stationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TableKeyRelations]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TableKeyRelations](
	[tableKeyRelationId] [char](36) NOT NULL,
	[keyRelation] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[stationId] [char](36) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[tableKeyRelationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[userId] [char](36) NOT NULL,
	[name] [nvarchar](255) NOT NULL,
	[email] [nvarchar](255) NOT NULL,
	[password] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vehicles]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vehicles](
	[vehicleId] [char](36) NOT NULL,
	[vehicleNumber] [nvarchar](255) NOT NULL,
	[vehicleBrand] [nvarchar](255) NOT NULL,
	[vehicleSeatNumber] [int] NOT NULL,
	[keyRelation] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
	[companyId] [char](36) NOT NULL,
	[vehicleTypeId] [char](36) NULL,
	[vehicleStatusId] [char](36) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[vehicleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[vehicleNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleStatuses]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleStatuses](
	[vehicleStatusId] [char](36) NOT NULL,
	[vehicleStatusName] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[vehicleStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[vehicleStatusName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleTypes]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleTypes](
	[vehicleTypeId] [char](36) NOT NULL,
	[vehicleTypeName] [nvarchar](255) NOT NULL,
	[createdAt] [datetimeoffset](7) NOT NULL,
	[updatedAt] [datetimeoffset](7) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[vehicleTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[vehicleTypeName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Bookings] ADD  DEFAULT ((1)) FOR [numberPeoples]
GO
ALTER TABLE [dbo].[Bookings]  WITH CHECK ADD FOREIGN KEY([customerId])
REFERENCES [dbo].[Customers] ([customerId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Bookings]  WITH CHECK ADD FOREIGN KEY([vehicleId])
REFERENCES [dbo].[Vehicles] ([vehicleId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Companies]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[Users] ([userId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Drivers]  WITH CHECK ADD FOREIGN KEY([vehicleId])
REFERENCES [dbo].[Vehicles] ([vehicleId])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[SchedulerDetails]  WITH CHECK ADD FOREIGN KEY([schedulerId])
REFERENCES [dbo].[Schedulers] ([schedulerId])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[SchedulerDetails]  WITH CHECK ADD FOREIGN KEY([stationId])
REFERENCES [dbo].[Stations] ([stationId])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[Schedulers]  WITH CHECK ADD FOREIGN KEY([vehicleId])
REFERENCES [dbo].[Vehicles] ([vehicleId])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[Stations]  WITH CHECK ADD FOREIGN KEY([companyId])
REFERENCES [dbo].[Companies] ([companyId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TableKeyRelations]  WITH CHECK ADD FOREIGN KEY([stationId])
REFERENCES [dbo].[Stations] ([stationId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD FOREIGN KEY([companyId])
REFERENCES [dbo].[Companies] ([companyId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD FOREIGN KEY([vehicleTypeId])
REFERENCES [dbo].[VehicleTypes] ([vehicleTypeId])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[Vehicles]  WITH CHECK ADD FOREIGN KEY([vehicleStatusId])
REFERENCES [dbo].[VehicleStatuses] ([vehicleStatusId])
ON DELETE CASCADE
GO
/****** Object:  StoredProcedure [dbo].[usp_bookingPagination]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Pagination booking
CREATE PROCEDURE [dbo].[usp_bookingPagination]
	@page			INT,
	@size			INT,
	@search			VARCHAR(MAX) = '',
	@orderBy		VARCHAR(MAX) = 'bookingId',
	@orderDir		VARCHAR(MAX) = 'DESC'
AS
BEGIN
	DECLARE @condition	VARCHAR(MAX);
	DECLARE @skip		INT;

	SET @skip	= (@size * @page) - @size;
	SET @search = LOWER(@search);

	IF @search <> ''
		SET @condition = 'WHERE [bookingId] LIKE ''%'' + ' + @search + ' + ''%''';

	EXEC('
		SELECT	* 
		FROM	[dbo].[Bookings] 
		' + @condition + '
		ORDER BY ' + @orderBy + ' ' + @orderDir + '
		OFFSET	(' + @skip + ') ROWS FETCH NEXT (' + @size + ') ROWS ONLY		
		
		SELECT 	
			(SELECT COUNT(*) FROM [dbo].[Bookings]) AS [Total] 
	');
END
GO
/****** Object:  StoredProcedure [dbo].[usp_driverPagination]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Pagination driver
CREATE PROCEDURE [dbo].[usp_driverPagination]
	@page			INT,
	@size			INT,
	@search			VARCHAR(MAX) = '',
	@orderBy		VARCHAR(MAX) = 'driverId',
	@orderDir		VARCHAR(MAX) = 'DESC'
AS
BEGIN
	DECLARE @condition	VARCHAR(MAX);
	DECLARE @skip		INT;

	SET @skip	= (@size * @page) - @size;
	SET @search = LOWER(@search);

	IF @search <> ''
		SET @condition = 'WHERE [companyId] LIKE ''%'' + ' + @search + ' + ''%''';
	EXEC('
		SELECT	* 
		FROM	[dbo].[Drivers] 
		' + @condition + '
		ORDER BY ' + @orderBy + ' ' + @orderDir + '
		OFFSET	(' + @skip + ') ROWS FETCH NEXT (' + @size + ') ROWS ONLY		
		
		SELECT 	
			(SELECT COUNT(*) FROM [dbo].[Drivers]) AS [Total] 
	');
END
GO
/****** Object:  StoredProcedure [dbo].[usp_genFillVehicle]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_genFillVehicle]
	@keyRelation VARCHAR(MAX)
AS
BEGIN
	select Vehicles.vehicleId, Vehicles.vehicleNumber, Vehicles.vehicleBrand, Vehicles.keyRelation, Vehicles.companyId, Vehicles.vehicleTypeId, Vehicles.vehicleStatusId, Schedulers.schedulerId, Schedulers.schedulerStart, Schedulers.schedulerEnd
	from Vehicles, Schedulers
	where Vehicles.vehicleId = Schedulers.vehicleId AND Vehicles.keyRelation = @keyRelation
END
GO
/****** Object:  StoredProcedure [dbo].[usp_stationPagination]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Pagination station
CREATE PROCEDURE [dbo].[usp_stationPagination]
	@page			INT,
	@size			INT,
	@search			VARCHAR(MAX) = '',
	@orderBy		VARCHAR(MAX) = 'stationId',
	@orderDir		VARCHAR(MAX) = 'DESC'
AS
BEGIN
	DECLARE @condition	VARCHAR(MAX);
	DECLARE @skip		INT;

	SET @skip	= (@size * @page) - @size;
	SET @search = LOWER(@search);

	IF @search <> ''
		SET @condition = 'WHERE [companyId] LIKE ''%'' + ' + @search + ' + ''%''';

	EXEC('
		SELECT	* 
		FROM	[dbo].[Stations] 
		' + @condition + '
		ORDER BY ' + @orderBy + ' ' + @orderDir + '
		OFFSET	(' + @skip + ') ROWS FETCH NEXT (' + @size + ') ROWS ONLY		
		
		SELECT 	
			(SELECT COUNT(*) FROM [dbo].[Stations]) AS [Total] 
	');
END
GO
/****** Object:  StoredProcedure [dbo].[usp_vehiclePagination]    Script Date: 4/29/2022 9:57:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Pagination vehicle
CREATE PROCEDURE [dbo].[usp_vehiclePagination]
	@page			INT,
	@size			INT,
	@search			VARCHAR(MAX) = '',
	@orderBy		VARCHAR(MAX) = 'vehicleId',
	@orderDir		VARCHAR(MAX) = 'DESC'
AS
BEGIN
	DECLARE @condition	VARCHAR(MAX);
	DECLARE @skip		INT;

	SET @skip	= (@size * @page) - @size;
	SET @search = LOWER(@search);

	IF @search <> ''
		SET @condition = 'WHERE [companyId] LIKE ''%'' + ' + @search + ' + ''%''';

	EXEC('
		SELECT	* 
		FROM	[dbo].[Vehicles] 
		' + @condition + '
		ORDER BY ' + @orderBy + ' ' + @orderDir + '
		OFFSET	(' + @skip + ') ROWS FETCH NEXT (' + @size + ') ROWS ONLY		
		
		SELECT 	
			(SELECT COUNT(*) FROM [dbo].[Vehicles]) AS [Total] 
	');
END
GO

CREATE PROCEDURE [dbo].[usp_fillterScheduler]
	@keyRelation VARCHAR(MAX)
AS
BEGIN
	select Vehicles.vehicleId, Vehicles.vehicleNumber, Vehicles.vehicleBrand, Vehicles.keyRelation, Vehicles.companyId, Vehicles.vehicleTypeId, Vehicles.vehicleStatusId, Schedulers.schedulerId, Schedulers.schedulerStart, Schedulers.schedulerEnd
	from Vehicles, Schedulers
	where Vehicles.vehicleId = Schedulers.vehicleId AND Vehicles.keyRelation = @keyRelation
END

CREATE PROCEDURE [dbo].[usp_countDriver]
	@companyId VARCHAR(MAX)
AS
BEGIN
	select distinct count(*)
  	from Drivers , Vehicles 
  	where Drivers.vehicleId = Vehicles.vehicleId
  	and Vehicles.companyId = @companyId
END

CREATE PROCEDURE [dbo].[usp_reportMonth]
	@month VARCHAR(MAX)
AS
BEGIN
	select count(*) 
	from Transactions 
	where createdAt like '%2022-'+ @month +'%'
END

 CREATE PROCEDURE [dbo].[usp_reportMonth]
	@month VARCHAR(MAX),
	@companyId VARCHAR(MAX)
AS
BEGIN
	select count(*) as total
	from Transactions 
	where createdAt like '%2022-'+ @month +'%'
	and companyId = @companyId
END

-- Pagination scheduler
create procedure [dbo].[usp_schedulerPagination]
	@page INT,
	@size INT,
	@companyId VARCHAR(MAX)
AS
BEGIN
	DECLARE @skip INT;
	SET @skip = (@size * @page) - @size;

	select *
	from Schedulers
	where companyId = @companyId
	order by createdAt desc
	OFFSET @skip rows FETCH NEXT @size ROWS only

	select count(*) as Total from Schedulers where companyId = @companyId
END

-- Pagination transaction
create procedure [dbo].[usp_transactionPagination]
	@page INT,
	@size INT,
	@companyId VARCHAR(MAX)
as
begin
	declare @skip INT;
	SET @skip = (@size * @page) - @size;

	select *
	from Transactions
	where companyId = @companyId
	order by createdAt desc
	offset @skip rows fetch next @size rows only

	select count(*) as Total from Transactions where companyId = @companyId
END

-- Pagination vehicle
create procedure [dbo].[usp_vehiclePagination]
	@page INT,
	@size INT,
	@companyId VARCHAR(MAX)
as
begin
	declare @skip INT;
	set @skip = (@size * @page) - @size;
	
	select *
	from Vehicles
	where companyId = @companyId
	order by createdAt desc
	offset @skip rows fetch next @size rows only

	select count(*) as Total from Vehicles where companyId = @companyId
end

-- Pagination driver
create procedure [dbo].[usp_driverPagination]
	@page INT,
	@size INT,
	@companyId VARCHAR(MAX)
as
begin
	declare @skip INT;
	set @skip = (@size * @page) - @size;
	
	select * 
	from Drivers, Vehicles
	where Drivers.vehicleId = Vehicles.vehicleId
	and Vehicles.companyId = @companyId
	order by Drivers.createdAt desc
	offset @skip rows fetch next @size rows only

	select count(*) as Total 
	from Drivers, Vehicles 
	where Drivers.vehicleId = Vehicles.vehicleId
	and companyId = @companyId
end