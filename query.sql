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