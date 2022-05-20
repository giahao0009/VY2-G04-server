CREATE DATABASE VY2G04
GO
USE VY2G04
GO
CREATE TABLE tblCompany
(
	Id varchar(10) primary key ,
	Name nvarchar(100) NOT NULL,
	Email varchar(100) NOT NULL UNIQUE,
	Phone varchar(20) NOT NULL UNIQUE,
)

CREATE TABLE tblTypeCar
(
	Id varchar(10) primary key ,
	Name nvarchar(100) NOT NULL UNIQUE,
)

CREATE TABLE tblCar
(
	Id varchar(10) primary key,
	IdCompany varchar(10) NOT NULL,
	CarNumber varchar(20) NOT NULL UNIQUE,
	IdCarType varchar(10) NOT NULL,
	CarBranch nvarchar(100) NOT NULL,

	FOREIGN KEY (IdCompany) REFERENCES tblCompany(Id) 
)

CREATE TABLE tblDriver
(
	Id varchar(10) primary key,
	IdCompany varchar(10) NOT NULL,
	Name nvarchar(100) NOT NULL,
	BirthDay date NOT NULL,
	Phone varchar(20) NOT NULL,
	Address nvarchar(200) NOT NULL
	FOREIGN KEY (IdCompany) REFERENCES tblCompany(Id) 
)


CREATE TABLE tblScheduler
(
	Id varchar(10) primary key ,
	IdCar varchar(10) NOT NULL,
	StartLocation nvarchar(50) NOT NULL,
	EndLocation nvarchar(50) NOT NULL,
	FOREIGN KEY (IdCar) REFERENCES tblCar(Id)
)

CREATE TABLE tblSchedulerDetail
(
	Id varchar(10) primary key ,
	IdScheduler varchar(10) NOT NULL,
	Station nvarchar(50) NOT NULL,
	FOREIGN KEY (IdScheduler) REFERENCES tblScheduler(Id)
)

ALTER TABLE tblScheduler 
Add CONSTRAINT tblScheduler_pk PRIMARY KEY (IdCompany, IdDriver, IdCar)
ALTER TABLE tblScheduler  
ADD CONSTRAINT FK_IdCompany FOREIGN KEY (IdCompany) REFERENCES  tblCompany(Id);
ALTER TABLE tblScheduler  
ADD CONSTRAINT FK_IdDriver FOREIGN KEY (IdDriver) REFERENCES  tblDriver(Id);
ALTER TABLE tblScheduler  
ADD CONSTRAINT FK_IdCar FOREIGN KEY (IdCar) REFERENCES  tblCar(Id);


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
		SET @condition = '
			WHERE	LOWER([CarNumber])		LIKE ''%'' + ' + @search + ' + ''%'' OR
					LOWER([CarBranch])		LIKE ''%'' + ' + @search + ' + ''%'' OR
					LOWER([companyId])		LIKE ''%'' + ' + @search + ' + ''%'' 
		';

	EXEC('
		SELECT	* 
		FROM	[dbo].[Vehicles] 
		' + @condition + '
		ORDER BY ' + @orderBy + ' ' + @orderDir + '
		OFFSET	(' + @skip + ') ROWS FETCH NEXT (' + @size + ') ROWS ONLY		
		
		SELECT 	
			(SELECT COUNT(*) FROM [dbo].[Vehicles] ' + @condition + ') AS [Filtered],
			(SELECT COUNT(*) FROM [dbo].[Vehicles]) AS [Total] 
	');
END
GO

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
		SET @condition = '
			WHERE	LOWER([CarNumber])		LIKE ''%'' + ' + @search + ' + ''%'' OR
					LOWER([CarBranch])		LIKE ''%'' + ' + @search + ' + ''%'' OR
					LOWER([companyId])		LIKE ''%'' + ' + @search + ' + ''%'' 
		';

	EXEC('
		SELECT	* 
		FROM	[dbo].[Drivers] 	
		' + @condition + '
		ORDER BY ' + @orderBy + ' ' + @orderDir + '
		OFFSET	(' + @skip + ') ROWS FETCH NEXT (' + @size + ') ROWS ONLY		
		
		SELECT 	
			(SELECT COUNT(*) FROM [dbo].[Vehicles]) AS [Total] 
	');
END
GO

CREATE PROCEDURE [dbo].[usp_schedulerPagination]
	@page			INT,
	@size			INT,
	@search			VARCHAR(MAX) = '',
	@orderBy		VARCHAR(MAX) = '',
	@orderDir		VARCHAR(MAX) = 'DESC'
AS
BEGIN
	DECLARE @condition	VARCHAR(MAX);
	DECLARE @skip		INT;

	SET @skip	= (@size * @page) - @size;
	SET @search = LOWER(@search);

	IF @search <> ''
		SET @condition = '
			WHERE	LOWER([CarNumber])		LIKE ''%'' + ' + @search + ' + ''%'' OR
					LOWER([CarBranch])		LIKE ''%'' + ' + @search + ' + ''%'' OR
					LOWER([companyId])		LIKE ''%'' + ' + @search + ' + ''%'' 
		';

	EXEC('
		SELECT	* 
		FROM	[dbo].[Schedulers] 	
		' + @condition + '
		ORDER BY ' + @orderBy + ' ' + @orderDir + '
		OFFSET	(' + @skip + ') ROWS FETCH NEXT (' + @size + ') ROWS ONLY		
		
		SELECT 	
			(SELECT COUNT(*) FROM [dbo].[Vehicles]) AS [Total] 
	');
END
GO

