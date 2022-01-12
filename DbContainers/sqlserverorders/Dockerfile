FROM mcr.microsoft.com/mssql/server:2019-latest

ARG SA_PASSWORD
ENV SA_PASSWORD=${SA_PASSWORD}
ARG ACCEPT_EULA
ENV ACCEPT_EULA=${ACCEPT_EULA}

COPY DbContainers/sqlserverorders/initorderdb.sql /usr/src/app/

RUN ( /opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" \
    && /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P $SA_PASSWORD -i /usr/src/app/initorderdb.sql \
    && pkill sqlservr