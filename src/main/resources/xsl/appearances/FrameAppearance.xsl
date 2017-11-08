<!--

    NAME     FrameAppearance.xsl
    VERSION  1.19.0
    DATE     2017-10-16

    Copyright 2012-2017

    This file is part of the Linked Data Theatre.

    The Linked Data Theatre is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    The Linked Data Theatre is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with the Linked Data Theatre.  If not, see <http://www.gnu.org/licenses/>.

-->
<!--
    DESCRIPTION
	FrameAppearance, add-on of rdf2html.xsl
	
	A Frame appearance makes it possible to show multiple resources, using iframes
	
-->
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
	xmlns:res="http://www.w3.org/2005/sparql-results#"
	xmlns:elmo="http://bp4mc2.org/elmo/def#"
	xmlns:html="http://www.w3.org/1999/xhtml/vocab#"
>

<xsl:output method="xml" indent="yes"/>

<xsl:template match="rdf:RDF" mode="FrameAppearance">
	<div style="row">
		<xsl:for-each select="rdf:Description[html:link!='']"><xsl:sort select="elmo:index"/>
			<xsl:variable name="frameclass">
				<xsl:choose>
					<xsl:when test="elmo:appearance/@rdf:resource='http://bp4mc2.org/elmo/def#ScrollAppearance'">frameScrollAppearance</xsl:when>
					<xsl:when test="elmo:appearance/@rdf:resource='http://bp4mc2.org/elmo/def#FixedAppearance'">frameFixedAppearance</xsl:when>
					<xsl:otherwise>frameScrollAppearance</xsl:otherwise>
				</xsl:choose>
			</xsl:variable>
			<div class="{$frameclass}">
				<iframe class="innerFrame" src="{html:link}" scrolling="no" name="frame{position()}" onload="setFrameHeight(this);"/>
			</div>
		</xsl:for-each>
	</div>
</xsl:template>

</xsl:stylesheet>