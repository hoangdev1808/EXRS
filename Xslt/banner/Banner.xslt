<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <div class="swiper-container home-banner">
            <div class="swiper-wrapper">
                <xsl:apply-templates select="/BannerList/Banner" mode="Slider"></xsl:apply-templates>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </xsl:template>
    <xsl:template match="Banner" mode="Slider">
        <div class="swiper-slide">
            <img >
                <xsl:attribute name="src">
                    <xsl:value-of select="ImageUrl"></xsl:value-of>
                </xsl:attribute>
                <xsl:attribute name="alt">
                    <xsl:value-of select="Title"></xsl:value-of>
                </xsl:attribute>
            </img>
            <div class="content">
                <xsl:value-of select="Description" disable-output-escaping="yes"></xsl:value-of>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>