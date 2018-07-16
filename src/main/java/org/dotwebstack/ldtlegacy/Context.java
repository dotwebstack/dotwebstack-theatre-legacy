package org.dotwebstack.ldtlegacy;

import java.net.URI;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import javax.ws.rs.container.ContainerRequestContext;
import lombok.NonNull;
import org.dotwebstack.framework.frontend.http.layout.Layout;
import org.dotwebstack.framework.frontend.http.stage.Stage;
import org.dotwebstack.ldtlegacy.vocabulary.XHTML;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Context {

  private static final Logger LOG = LoggerFactory.getLogger(CreatePage.class);

  private static final String CONTEXT_TEMPLATE =
      "<context docroot='%s' staticroot='%s/assets' linkstrategy='%s'>"
          + "<title>%s</title><request-path>%s</request-path><url>%s</url>"
          + "<subject>%s</subject>%s<subdomain>%s</subdomain>"
          + "<parameters>%s</parameters><language>%s</language>"
          + "</context>";

  private final String contextXml;

  private String getAcceptLanguage(ContainerRequestContext containerRequestContext) {
    final String acceptLanguage = containerRequestContext.getHeaderString("Accept-Language");
    String language = "en";
    if (acceptLanguage != null) {
      final List<Locale.LanguageRange> ranges = Locale.LanguageRange.parse(acceptLanguage);
      if (ranges != null) {
        if (ranges.size() != 0) {
          Locale acceptLocale = Locale.forLanguageTag(ranges.get(0).getRange());
          if (acceptLocale != null) {
            language = acceptLocale.getLanguage();
          }
        }
      }
    }
    return language;
  }

  public Context(@NonNull ContainerRequestContext containerRequestContext, String linkstrategy,
                 Stage stage, Map<String, String> parameterValues) {
    URI uri = containerRequestContext.getUriInfo().getAbsolutePath();

    /*
     * Remove first 'domain' part of path that we have added in HostPreMatchingRequestFilter
     */
    final String path = uri.getPath().replaceAll("^/" + uri.getHost(), "");
    final String fullUrl = String.format("%s://%s%s", uri.getScheme(), uri.getAuthority(), path);
    final String language = getAcceptLanguage(containerRequestContext);
    String title = "LDT 2.0 alfa";
    if (stage.getTitle() != null) {
      title = stage.getTitle();
    }
    String stylesheet = "";
    String docRoot = "";
    if (stage.getSite().getBasePath() != null) {
      docRoot = stage.getSite().getBasePath();
    }
    String subdomain = "";
    if (stage.getBasePath() != null) {
      subdomain = stage.getBasePath();
    }
    Layout layout = stage.getLayout();
    if (layout == null) {
      layout = stage.getSite().getLayout();
    }
    if (layout != null) {
      stylesheet = String.format("<stylesheet href='%s'/>", layout.getOptions().size());
      if (layout.getOptions().containsKey(XHTML.STYLESHEET)) {
        stylesheet = String.format(
            "<stylesheet href='%s/assets/css/%s'/>", docRoot,
            layout.getOptions().get(XHTML.STYLESHEET).stringValue());
      }
    }
    String subject = "";
    if (parameterValues.containsKey("subject")) {
      subject = parameterValues.get("subject");
    }
    String parameters = "";
    for (Map.Entry<String, String> entry : parameterValues.entrySet()) {
      switch (entry.getKey()) {
        case "subject": break;
        case "representation": break;
        case "date": break;
        case "format": break;
        default: {
          parameters += String.format("<parameter><name>%s</name><value>%s</value></parameter>",
              entry.getKey(), entry.getValue());
        }
      }
    }
    contextXml = String.format(CONTEXT_TEMPLATE, docRoot, docRoot, linkstrategy, title, path,
        fullUrl, subject, stylesheet, subdomain, parameters, language);
  }

  public String getContextXml() {
    return contextXml;
  }

}
