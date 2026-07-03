from pyspark.sql import SparkSession, DataFrame

from .base import BaseReader


class EbcdicReader(BaseReader):
    def read(
        self,
        spark: SparkSession,
        file_path: str,
        raw_dml: str,
        **kwargs,
    ) -> DataFrame:
        """
        Read an EBCDIC binary file into a PySpark DataFrame using Cobrix.

        Args:
            spark:     Active SparkSession.
            file_path: S3/HDFS path to the EBCDIC data file or folder.
            raw_dml:   COBOL copybook content as a string.
            **kwargs:  Any Cobrix option passed directly to spark.read.
                       e.g. record_length=241, encoding="EBCDIC",
                            ebcdic_code_page="CP500", record_format="F",
                            schema_retention_policy="collapse_root"

        Cobrix option keys use underscores here and are forwarded as-is
        to .option(key, value) — e.g. record_length → "record_length".
        """
        reader = spark.read.format("cobol").option("copybook_contents", raw_dml)

        for key, value in kwargs.items():
            reader = reader.option(key, value)

        return reader.load(file_path)


def read_ebcdic(
    spark: SparkSession,
    file_path: str,
    raw_dml: str,
    **kwargs,
) -> DataFrame:
    return EbcdicReader().read(spark, file_path, raw_dml, **kwargs)
