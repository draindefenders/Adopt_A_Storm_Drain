CREATE TABLE STORM_DRAIN
(
    ID                        BIGSERIAL                    NOT NULL,
    latitude                  varchar(255)                 NOT NULL,
    longitude                 varchar(255)                 NOT NULL,
    CREATE_DATE               TIMESTAMP WITH TIME ZONE     NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TRIGGER storm_drain_audit_trg
    BEFORE INSERT ON storm_drain
    FOR EACH ROW EXECUTE PROCEDURE audit_time_stamp();