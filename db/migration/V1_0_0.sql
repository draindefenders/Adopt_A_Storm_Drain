/*======================================================================*/
/* Tables:
    STORM_DRAIN
   Functions:
    audit_time_stamp
*/
/*======================================================================*/

CREATE TABLE STORM_DRAIN
(
    ID                        BIGSERIAL                    NOT NULL,
    latitude                  FLOAT                      NOT NULL,
    longitude                 FLOAT                      NOT NULL,
    created_by                VARCHAR(255)                 NULL,
    drain_name                VARCHAR(255)                 NULL,
    drain_status              VARCHAR(20)                 NOT NULL,
    CREATE_DATE               TIMESTAMP WITH TIME ZONE     NOT NULL,
    PRIMARY KEY (ID)
);

CREATE FUNCTION audit_time_stamp() RETURNS trigger AS $audit_time_stamp$
BEGIN
    --Generate timestamps for new or updated records: create_date
    IF (TG_OP = 'INSERT')
    THEN
        NEW.create_date := current_timestamp;
        RETURN NEW;
    END IF;
END;
$audit_time_stamp$
    LANGUAGE plpgsql;

CREATE TRIGGER storm_drain_audit_trg
    BEFORE INSERT ON storm_drain
    FOR EACH ROW EXECUTE PROCEDURE audit_time_stamp();