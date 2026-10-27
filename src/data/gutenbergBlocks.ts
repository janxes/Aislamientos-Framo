export interface GutenbergSection {
  id: string;
  number: string;
  title: string;
  description: string;
  blockCode: string;
}

export const TT5_HEADER_BLOCKS = `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"},"margin":{"top":"0px","bottom":"0px"}},"color":{"background":"#f4f2ee"}},"layout":{"type":"constrained","contentSize":"1200px","wideSize":"1200px"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#f4f2ee;margin-top:0px;margin-bottom:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px">
  <!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"8px","bottom":"8px","left":"24px","right":"24px"}},"border":{"bottom":{"color":"#e4e2df","width":"1px"}}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
  <div class="wp-block-group alignwide" style="border-bottom-color:#e4e2df;border-bottom-width:1px;padding-top:8px;padding-right:24px;padding-bottom:8px;padding-left:24px">
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px"},"color":{"text":"#43474a"}}} -->
    <p class="has-text-color" style="color:#43474a;font-size:13px">📞 Llámanos ahora: <strong style="color:#1b1c1a">695 92 87 63</strong> · Especialistas en aislamiento térmico y acústico sin obras en Madrid</p>
    <!-- /wp:paragraph -->

    <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
    <p class="has-text-color" style="color:#1b1c1a;font-size:13px;font-weight:700"><a href="#diagnostico" style="color:#1b1c1a;text-decoration:none">Presupuesto Inmediato →</a></p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->

  <!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"12px","bottom":"12px","left":"24px","right":"24px"}},"color":{"background":"#fbf9f6"},"border":{"bottom":{"color":"#e4e2df","width":"1px"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
  <div class="wp-block-group alignwide has-background" style="border-bottom-color:#e4e2df;border-bottom-width:1px;background-color:#fbf9f6;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px">
    <!-- wp:image {"height":"52px","sizeSlug":"full","linkDestination":"custom"} -->
    <figure class="wp-block-image size-full is-resized"><a href="#"><img src="/assets/aistudio/image_4378061d.png" alt="Aislamientos Framo" style="height:52px;width:auto;object-fit:contain"/></a></figure>
    <!-- /wp:image -->

    <!-- wp:group {"style":{"spacing":{"blockGap":"28px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"}} -->
    <div class="wp-block-group">
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"500","lineHeight":"1.25"},"color":{"text":"#1b1c1a"}}} -->
      <p class="has-text-color" style="color:#1b1c1a;font-size:13px;font-weight:500;line-height:1.25"><a href="#soluciones" style="color:inherit;text-decoration:none">Aislamiento<br>en Cámaras</a></p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"500","lineHeight":"1.25"},"color":{"text":"#1b1c1a"}}} -->
      <p class="has-text-color" style="color:#1b1c1a;font-size:13px;font-weight:500;line-height:1.25"><a href="#humedades" style="color:inherit;text-decoration:none">Eliminar Humedades<br>y Condensación</a></p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"500","lineHeight":"1.25"},"color":{"text":"#1b1c1a"}}} -->
      <p class="has-text-color" style="color:#1b1c1a;font-size:13px;font-weight:500;line-height:1.25"><a href="#acustico" style="color:inherit;text-decoration:none">Aislamiento<br>Acústico</a></p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"500","lineHeight":"1.25"},"color":{"text":"#1b1c1a"}}} -->
      <p class="has-text-color" style="color:#1b1c1a;font-size:13px;font-weight:500;line-height:1.25"><a href="#casos" style="color:inherit;text-decoration:none">Casos en<br>Madrid</a></p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"500","lineHeight":"1.25"},"color":{"text":"#1b1c1a"}}} -->
      <p class="has-text-color" style="color:#1b1c1a;font-size:13px;font-weight:500;line-height:1.25"><a href="#calculadora" style="color:inherit;text-decoration:none">Calculadora<br>de Ahorro</a></p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

    <!-- wp:buttons {"style":{"spacing":{"blockGap":"10px"}},"layout":{"type":"flex","verticalAlignment":"center"}} -->
    <div class="wp-block-buttons">
      <!-- wp:button {"style":{"color":{"background":"#cc292b","text":"#ffffff"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"10px","bottom":"10px","left":"18px","right":"18px"}},"typography":{"fontSize":"13px","fontWeight":"700"}}} -->
      <div class="wp-block-button has-custom-font-size" style="font-size:13px;font-weight:700"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="tel:695928763" style="border-radius:6px;color:#ffffff;background-color:#cc292b;padding-top:10px;padding-right:18px;padding-bottom:10px;padding-left:18px">📞 695 92 87 63</a></div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->`;

export const TT5_SECTION_01_BLOCKS = `<!-- wp:cover {"url":"https://aislamientosframo.com/wp-content/uploads/2024/09/nueva_imagen_home_aislamientos_framo_1280.jpg","dimRatio":50,"customOverlayColor":"#11171a","isUserOverlayColor":true,"align":"full","style":{"spacing":{"padding":{"top":"64px","bottom":"64px","left":"24px","right":"24px"},"margin":{"top":"0px","bottom":"0px"}}},"layout":{"type":"constrained","contentSize":"1200px","wideSize":"1200px"}} -->
<div class="wp-block-cover alignfull" style="margin-top:0px;margin-bottom:0px;padding-top:64px;padding-right:24px;padding-bottom:64px;padding-left:24px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-50 has-background-dim" style="background-color:#11171a"></span><img class="wp-block-cover__image-background" alt="" src="https://aislamientosframo.com/wp-content/uploads/2024/09/nueva_imagen_home_aislamientos_framo_1280.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container">
  <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700","letterSpacing":"0.04em"},"color":{"text":"#ffffff"},"spacing":{"margin":{"bottom":"20px"}}}} -->
  <p class="has-text-color" style="color:#ffffff;margin-bottom:20px;font-size:13px;font-weight:700;letter-spacing:0.04em"><span style="color:#ff5a5c">01</span> / AISLAMIENTO TÉRMICO Y ACÚSTICO EN MADRID <span style="font-weight:400;color:#dbe4e9">/ Sin Obras</span></p>
  <!-- /wp:paragraph -->

  <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"32px","left":"48px"},"margin":{"bottom":"0px"}}}} -->
  <div class="wp-block-columns alignwide" style="margin-bottom:0px">
    <!-- wp:column {"width":"66%"} -->
    <div class="wp-block-column" style="flex-basis:66%">
      <!-- wp:heading {"level":1,"style":{"typography":{"fontSize":"54px","fontWeight":"700","lineHeight":"1.08","letterSpacing":"-0.02em"},"color":{"text":"#ffffff"},"spacing":{"margin":{"bottom":"24px"}}}} -->
      <h1 class="wp-block-heading has-text-color" style="color:#ffffff;margin-bottom:24px;font-size:54px;font-weight:700;letter-spacing:-0.02em;line-height:1.08">Elimina el frío, las humedades por condensación y el ruido sin obras en tu hogar con <em style="color:#ff5a5c;font-style:italic">Aislamientos Framo</em>.</h1>
      <!-- /wp:heading -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"17px","lineHeight":"1.6"},"color":{"text":"#ffffff"}}} -->
      <p class="has-text-color" style="color:#ffffff;font-size:17px;line-height:1.6">Insuflado de lana de roca, celulosa y EPS grafito en cámaras de aire. Confort inmediato garantizado, ahorro de hasta el 50% en calefacción y fin al moho en paredes de forma definitiva.</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column {"width":"34%","verticalAlignment":"bottom"} -->
    <div class="wp-block-column is-vertically-aligned-bottom" style="flex-basis:34%">
      <!-- wp:group {"style":{"color":{"background":"#f3f1ed"},"border":{"radius":"10px","color":"#eae8e5","width":"1px"},"spacing":{"padding":{"top":"22px","bottom":"22px","left":"22px","right":"22px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-border-color has-background" style="border-color:#eae8e5;border-width:1px;border-radius:10px;background-color:#f3f1ed;padding-top:22px;padding-right:22px;padding-bottom:22px;padding-left:22px">
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"8px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:8px;font-size:13px;font-weight:700"><span style="color:#cc292b">✔</span> Especialistas Certificados en Madrid</p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","lineHeight":"1.5"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"14px"}}}} -->
        <p class="has-text-color" style="color:#43474a;margin-bottom:14px;font-size:13px;line-height:1.5">Trabajo limpio ejecutado desde el exterior o interior en un solo día. Sin andamios molestos ni obras pesadas.</p>
        <!-- /wp:paragraph -->

        <!-- wp:buttons -->
        <div class="wp-block-buttons">
          <!-- wp:button {"style":{"color":{"background":"#f6e0dd","text":"#b6171e"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"7px","bottom":"7px","left":"14px","right":"14px"}},"typography":{"fontSize":"13px","fontWeight":"700"}}} -->
          <div class="wp-block-button has-custom-font-size" style="font-size:13px;font-weight:700"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="tel:695928763" style="border-radius:6px;color:#b6171e;background-color:#f6e0dd;padding-top:7px;padding-right:14px;padding-bottom:7px;padding-left:14px">📞 Llámanos: 695 92 87 63</a></div>
          <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div></div>
<!-- /wp:cover -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"40px","bottom":"64px","left":"24px","right":"24px"},"margin":{"top":"0px","bottom":"0px"}},"color":{"background":"#fbf9f6"}},"layout":{"type":"constrained","contentSize":"1200px","wideSize":"1200px"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#fbf9f6;margin-top:0px;margin-bottom:0px;padding-top:40px;padding-right:24px;padding-bottom:64px;padding-left:24px">
  <!-- wp:group {"align":"wide","style":{"color":{"background":"#efede9"},"border":{"radius":"12px","color":"#e4e2df","width":"1px"},"spacing":{"padding":{"top":"32px","bottom":"32px","left":"32px","right":"32px"},"margin":{"bottom":"36px"}}},"layout":{"type":"constrained"}} -->
  <div id="diagnostico" class="wp-block-group alignwide has-border-color has-background" style="border-color:#e4e2df;border-width:1px;border-radius:12px;background-color:#efede9;margin-bottom:36px;padding-top:32px;padding-right:32px;padding-bottom:32px;padding-left:32px">
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.05em","textTransform":"uppercase"},"color":{"text":"#cc292b"},"spacing":{"margin":{"bottom":"6px"}}}} -->
    <p class="has-text-color" style="color:#cc292b;margin-bottom:6px;font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase">DIAGNÓSTICO &amp; PRESUPUESTO RÁPIDO</p>
    <!-- /wp:paragraph -->

    <!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"22px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"20px"}}}} -->
    <h2 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:20px;font-size:22px;font-weight:700">Calcula el aislamiento óptimo para tu vivienda en Madrid</h2>
    <!-- /wp:heading -->

    <!-- wp:html -->
    <div class="framo-tt5-diagnostico-grid" style="display:grid;grid-template-columns:1.25fr 1fr auto;gap:16px;align-items:end;margin-bottom:20px;">
      <div>
        <label style="display:block;font-size:13px;font-weight:600;color:#1b1c1a;margin-bottom:8px;">Código Postal o Municipio (Madrid)</label>
        <div style="display:flex;align-items:center;background:#ffffff;border:1px solid #dcdad6;border-radius:6px;padding:11px 14px;gap:8px;">
          <span style="color:#43474a;font-size:14px;">📍</span>
          <input type="text" value="28001" style="border:none;outline:none;width:100%;font-size:14px;color:#1b1c1a;background:transparent;" />
        </div>
      </div>
      <div>
        <label style="display:block;font-size:13px;font-weight:600;color:#1b1c1a;margin-bottom:8px;">Problema Principal a Resolver</label>
        <div style="display:flex;align-items:center;background:#ffffff;border:1px solid #dcdad6;border-radius:6px;padding:11px 14px;gap:8px;">
          <span style="color:#43474a;font-size:14px;">🔥</span>
          <select style="border:none;outline:none;width:100%;font-size:14px;color:#1b1c1a;background:transparent;">
            <option>Frío en invierno y calor en verano</option>
          </select>
        </div>
      </div>
      <div>
        <a href="#calculadora" style="display:inline-flex;align-items:center;justify-content:center;background:#cc292b;color:#ffffff;font-size:14px;font-weight:700;padding:12px 32px;border-radius:6px;text-decoration:none;white-space:nowrap;">Simular Ahorro →</a>
      </div>
    </div>
    <!-- /wp:html -->

    <!-- wp:group {"style":{"spacing":{"blockGap":"12px"}},"layout":{"type":"flex","flexWrap":"wrap"}} -->
    <div class="wp-block-group">
      <!-- wp:paragraph {"style":{"color":{"background":"#ffffff","text":"#1b1c1a"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"7px","bottom":"7px","left":"14px","right":"14px"}},"typography":{"fontSize":"13px","fontWeight":"600"}}} -->
      <p class="has-text-color has-background" style="border-radius:6px;color:#1b1c1a;background-color:#ffffff;padding-top:7px;padding-right:14px;padding-bottom:7px;padding-left:14px;font-size:13px;font-weight:600"><span style="color:#cc292b">✔</span> Sin Obras Ni Escombros</p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"style":{"color":{"background":"#ffffff","text":"#1b1c1a"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"7px","bottom":"7px","left":"14px","right":"14px"}},"typography":{"fontSize":"13px","fontWeight":"600"}}} -->
      <p class="has-text-color has-background" style="border-radius:6px;color:#1b1c1a;background-color:#ffffff;padding-top:7px;padding-right:14px;padding-bottom:7px;padding-left:14px;font-size:13px;font-weight:600"><span style="color:#cc292b">⚡</span> Ejecución en 1 Día</p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"style":{"color":{"background":"#ffffff","text":"#1b1c1a"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"7px","bottom":"7px","left":"14px","right":"14px"}},"typography":{"fontSize":"13px","fontWeight":"600"}}} -->
      <p class="has-text-color has-background" style="border-radius:6px;color:#1b1c1a;background-color:#ffffff;padding-top:7px;padding-right:14px;padding-bottom:7px;padding-left:14px;font-size:13px;font-weight:600"><span style="color:#cc292b">❂</span> Garantía por Escrito de 10 Años</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->

  <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"20px","left":"20px"}}}} -->
  <div class="wp-block-columns alignwide">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#f3f1ed"},"border":{"radius":"8px"},"spacing":{"padding":{"top":"22px","bottom":"22px","left":"22px","right":"22px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-background" style="border-radius:8px;background-color:#f3f1ed;padding-top:22px;padding-right:22px;padding-bottom:22px;padding-left:22px">
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"34px","fontWeight":"700","lineHeight":"1.1"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"8px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:8px;font-size:34px;font-weight:700;line-height:1.1">4.200+</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"4px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:4px;font-size:13px;font-weight:700">Hogares Aislados en Madrid</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"}}} -->
        <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.4">Especialistas en viviendas, chalets y pisos.</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#f3f1ed"},"border":{"radius":"8px"},"spacing":{"padding":{"top":"22px","bottom":"22px","left":"22px","right":"22px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-background" style="border-radius:8px;background-color:#f3f1ed;padding-top:22px;padding-right:22px;padding-bottom:22px;padding-left:22px">
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"34px","fontWeight":"700","lineHeight":"1.1"},"color":{"text":"#cc292b"},"spacing":{"margin":{"bottom":"8px"}}}} -->
        <p class="has-text-color" style="color:#cc292b;margin-bottom:8px;font-size:34px;font-weight:700;line-height:1.1">50%</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"4px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:4px;font-size:13px;font-weight:700">Ahorro en Calefacción</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"}}} -->
        <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.4">Menor gasto en gas, gasóleo y electricidad.</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#f3f1ed"},"border":{"radius":"8px"},"spacing":{"padding":{"top":"22px","bottom":"22px","left":"22px","right":"22px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-background" style="border-radius:8px;background-color:#f3f1ed;padding-top:22px;padding-right:22px;padding-bottom:22px;padding-left:22px">
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"34px","fontWeight":"700","lineHeight":"1.1"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"8px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:8px;font-size:34px;font-weight:700;line-height:1.1">100%</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"4px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:4px;font-size:13px;font-weight:700">Adiós a la Condensación</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"}}} -->
        <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.4">Eliminación total de manchas de moho y humedad.</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#f3f1ed"},"border":{"radius":"8px"},"spacing":{"padding":{"top":"22px","bottom":"22px","left":"22px","right":"22px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-background" style="border-radius:8px;background-color:#f3f1ed;padding-top:22px;padding-right:22px;padding-bottom:22px;padding-left:22px">
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"34px","fontWeight":"700","lineHeight":"1.1"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"8px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:8px;font-size:34px;font-weight:700;line-height:1.1">1 Día</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"4px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:4px;font-size:13px;font-weight:700">Tiempo de Instalación</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"}}} -->
        <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.4">Sin molestias ni necesidad de abandonar la casa.</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->`;

export const TT5_SECTION_02_BLOCKS = `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"72px","bottom":"80px","left":"24px","right":"24px"},"margin":{"top":"0px","bottom":"0px"}},"color":{"background":"#f4f2ee"}},"layout":{"type":"constrained","contentSize":"1200px","wideSize":"1200px"}} -->
<div id="soluciones" class="wp-block-group alignfull has-background" style="background-color:#f4f2ee;margin-top:0px;margin-bottom:0px;padding-top:72px;padding-right:24px;padding-bottom:80px;padding-left:24px">
  <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700","letterSpacing":"0.04em"},"color":{"text":"#cc292b"},"spacing":{"margin":{"bottom":"10px"}}}} -->
  <p class="has-text-color" style="color:#cc292b;margin-bottom:10px;font-size:13px;font-weight:700;letter-spacing:0.04em">02 / SOLUCIONES DE AISLAMIENTO FRAMO</p>
  <!-- /wp:paragraph -->

  <!-- wp:group {"align":"wide","style":{"spacing":{"margin":{"bottom":"36px"}}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
  <div class="wp-block-group alignwide" style="margin-bottom:36px">
    <!-- wp:group {"style":{"layout":{"selfStretch":"fixed","flexSize":"620px"}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group">
      <!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"34px","fontWeight":"700","lineHeight":"1.18"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"12px"}}}} -->
      <h2 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:12px;font-size:34px;font-weight:700;line-height:1.18">Teccnología avanzada para el confort de tu hogar</h2>
      <!-- /wp:heading -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.5"},"color":{"text":"#43474a"}}} -->
      <p class="has-text-color" style="color:#43474a;font-size:14px;line-height:1.5">Sistemas de aislamiento térmico y acústico insuflado en cámaras y paramentos sin alterar la estética ni requerir obras molestas.</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <!-- wp:button {"style":{"color":{"background":"#cc292b","text":"#ffffff"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"11px","bottom":"11px","left":"20px","right":"20px"}},"typography":{"fontSize":"13px","fontWeight":"700"}}} -->
      <div class="wp-block-button has-custom-font-size" style="font-size:13px;font-weight:700"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="tel:695928763" style="border-radius:6px;color:#ffffff;background-color:#cc292b;padding-top:11px;padding-right:20px;padding-bottom:11px;padding-left:20px">📞 Consultar Técnico: 695 92 87 63</a></div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
  </div>
  <!-- /wp:group -->

  <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"24px","left":"24px"},"margin":{"bottom":"24px"}}}} -->
  <div class="wp-block-columns alignwide" style="margin-bottom:24px">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"12px","color":"#e4e2df","width":"1px"},"spacing":{"padding":{"top":"24px","bottom":"24px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-border-color has-background" style="border-color:#e4e2df;border-width:1px;border-radius:12px;background-color:#ffffff;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px">
        <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"14px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group" style="margin-bottom:14px">
          <!-- wp:paragraph {"style":{"color":{"background":"#fae5e3","text":"#b6171e"},"border":{"radius":"999px"},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"12px","right":"12px"}},"typography":{"fontSize":"12px","fontWeight":"700"}}} -->
          <p class="has-text-color has-background" style="border-radius:999px;color:#b6171e;background-color:#fae5e3;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px;font-size:12px;font-weight:700">Insuflado en Cámaras</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
          <p class="has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">Sin obras ni andamios</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:image {"sizeSlug":"large","style":{"border":{"radius":"8px"},"spacing":{"margin":{"bottom":"18px"}}}} -->
        <figure class="wp-block-image size-large has-custom-border" style="margin-bottom:18px"><img src="/assets/aistudio/service_1.jpg" alt="Aislamiento de Cámaras de Aire con Lana de Roca y Celulosa" style="border-radius:8px"/></figure>
        <!-- /wp:image -->

        <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"20px","fontWeight":"700","lineHeight":"1.3"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
        <h3 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:20px;font-weight:700;line-height:1.3">Aislamiento de Cámaras de Aire con Lana de Roca y Celulosa</h3>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","lineHeight":"1.55"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"18px"}}}} -->
        <p class="has-text-color" style="color:#43474a;margin-bottom:18px;font-size:13px;line-height:1.55">Relleno completo de las cámaras vacías en fachadas mediante perforaciones milimétricas. Actúa como un escudo térmico continuo que retiene el calor en invierno y frena el calor en verano.</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"8px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"16px","right":"16px"},"margin":{"bottom":"16px"}}}} -->
        <div class="wp-block-columns has-background" style="border-radius:8px;background-color:#f4f3ef;margin-bottom:16px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px">
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Ahorro Térmico</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#cc292b;font-size:12px;font-weight:700">Hasta 50%</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Materiales</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">Lana / Celulosa</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Durabilidad</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">De por vida</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->

        <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">Terminación idéntica a la original</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
          <p class="has-text-color" style="color:#cc292b;font-size:12px;font-weight:700"><a href="#diagnostico" style="color:#cc292b;text-decoration:none">Pedir presupuesto →</a></p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div id="humedades" class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"12px","color":"#e4e2df","width":"1px"},"spacing":{"padding":{"top":"24px","bottom":"24px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-border-color has-background" style="border-color:#e4e2df;border-width:1px;border-radius:12px;background-color:#ffffff;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px">
        <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"14px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group" style="margin-bottom:14px">
          <!-- wp:paragraph {"style":{"color":{"background":"#ededeb","text":"#1b1c1a"},"border":{"radius":"999px"},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"12px","right":"12px"}},"typography":{"fontSize":"12px","fontWeight":"700"}}} -->
          <p class="has-text-color has-background" style="border-radius:999px;color:#1b1c1a;background-color:#ededeb;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px;font-size:12px;font-weight:700">Solución Definitiva al Moho</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
          <p class="has-text-color" style="color:#cc292b;font-size:12px;font-weight:700">Adiós manchas negras</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:image {"sizeSlug":"large","style":{"border":{"radius":"8px"},"spacing":{"margin":{"bottom":"18px"}}}} -->
        <figure class="wp-block-image size-large has-custom-border" style="margin-bottom:18px"><img src="/assets/aistudio/service_2.jpg" alt="Eliminación de Humedades por Condensación y Puentes Térmicos" style="border-radius:8px"/></figure>
        <!-- /wp:image -->

        <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"20px","fontWeight":"700","lineHeight":"1.3"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
        <h3 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:20px;font-weight:700;line-height:1.3">Eliminación de Humedades por Condensación y Puentes Térmicos</h3>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","lineHeight":"1.55"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"18px"}}}} -->
        <p class="has-text-color" style="color:#43474a;margin-bottom:18px;font-size:13px;line-height:1.55">Las esquinas frías y paredes sin aislar generan condensación de agua en invierno, creando hongos insalubres. Nuestro aislamiento rompe el puente térmico y seca las paredes por completo.</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"8px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"16px","right":"16px"},"margin":{"bottom":"16px"}}}} -->
        <div class="wp-block-columns has-background" style="border-radius:8px;background-color:#f4f3ef;margin-bottom:16px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px">
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Salubridad</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#cc292b;font-size:12px;font-weight:700">100% Sano</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Sin Obras</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">Rápido y Limpio</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Garantía</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">10 Años</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->

        <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">Ambiente seco y saludable para tu familia</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
          <p class="has-text-color" style="color:#cc292b;font-size:12px;font-weight:700"><a href="#casos" style="color:#cc292b;text-decoration:none">Consultar caso →</a></p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->

  <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"24px","left":"24px"}}}} -->
  <div class="wp-block-columns alignwide">
    <!-- wp:column -->
    <div id="acustico" class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"12px","color":"#e4e2df","width":"1px"},"spacing":{"padding":{"top":"24px","bottom":"24px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-border-color has-background" style="border-color:#e4e2df;border-width:1px;border-radius:12px;background-color:#ffffff;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px">
        <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"14px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group" style="margin-bottom:14px">
          <!-- wp:paragraph {"style":{"color":{"background":"#fae5e3","text":"#b6171e"},"border":{"radius":"999px"},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"12px","right":"12px"}},"typography":{"fontSize":"12px","fontWeight":"700"}}} -->
          <p class="has-text-color has-background" style="border-radius:999px;color:#b6171e;background-color:#fae5e3;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px;font-size:12px;font-weight:700">Confort Acústico</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
          <p class="has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">Silencio Absoluto</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:image {"sizeSlug":"large","style":{"border":{"radius":"8px"},"spacing":{"margin":{"bottom":"18px"}}}} -->
        <figure class="wp-block-image size-large has-custom-border" style="margin-bottom:18px"><img src="/assets/aistudio/service_3.jpg" alt="Aislamiento Acústico contra Ruidos de Vecinos y Tráfico" style="border-radius:8px"/></figure>
        <!-- /wp:image -->

        <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"20px","fontWeight":"700","lineHeight":"1.3"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
        <h3 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:20px;font-weight:700;line-height:1.3">Aislamiento Acústico contra Ruidos de Vecinos y Tráfico</h3>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","lineHeight":"1.55"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"18px"}}}} -->
        <p class="has-text-color" style="color:#43474a;margin-bottom:18px;font-size:13px;line-height:1.55">Atenúa notablemente los ruidos molestos del exterior (tráfico, voces, obras) y entre viviendas medianeras gracias a la alta densidad de nuestros materials fonoabsorbentes.</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"8px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"16px","right":"16px"},"margin":{"bottom":"16px"}}}} -->
        <div class="wp-block-columns has-background" style="border-radius:8px;background-color:#f4f3ef;margin-bottom:16px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px">
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Atenuación</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#cc292b;font-size:12px;font-weight:700">Hasta -15dB</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Material</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">Lana Roca Alta Densidad</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Pérdida espacio</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">0 cm (Cámara)</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->

        <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">Descansa sin ruidos molestos</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
          <p class="has-text-color" style="color:#cc292b;font-size:12px;font-weight:700"><a href="#diagnostico" style="color:#cc292b;text-decoration:none">Más información →</a></p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"12px","color":"#e4e2df","width":"1px"},"spacing":{"padding":{"top":"24px","bottom":"24px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-border-color has-background" style="border-color:#e4e2df;border-width:1px;border-radius:12px;background-color:#ffffff;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px">
        <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"14px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group" style="margin-bottom:14px">
          <!-- wp:paragraph {"style":{"color":{"background":"#ededeb","text":"#1b1c1a"},"border":{"radius":"999px"},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"12px","right":"12px"}},"typography":{"fontSize":"12px","fontWeight":"700"}}} -->
          <p class="has-text-color has-background" style="border-radius:999px;color:#1b1c1a;background-color:#ededeb;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px;font-size:12px;font-weight:700">Pisos, Chalets y Comunidades</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
          <p class="has-text-color" style="color:#cc292b;font-size:12px;font-weight:700">Presupuesto gratuito en 24h</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:image {"sizeSlug":"large","style":{"border":{"radius":"8px"},"spacing":{"margin":{"bottom":"18px"}}}} -->
        <figure class="wp-block-image size-large has-custom-border" style="margin-bottom:18px"><img src="/assets/aistudio/service_4.jpg" alt="Soluciones Adaptadas para Todo Tipo de Inmuebles en Madrid" style="border-radius:8px"/></figure>
        <!-- /wp:image -->

        <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"20px","fontWeight":"700","lineHeight":"1.3"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
        <h3 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:20px;font-weight:700;line-height:1.3">Soluciones Adaptadas para Todo Tipo de Inmuebles en Madrid</h3>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","lineHeight":"1.55"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"18px"}}}} -->
        <p class="has-text-color" style="color:#43474a;margin-bottom:18px;font-size:13px;line-height:1.55">Ya sea un piso en bloque, un chalet pareado o un edificio completo de vecinos, realizamos una endoscopia previa de la cámara para asegurar un resultado perfecto.</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"8px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"16px","right":"16px"},"margin":{"bottom":"16px"}}}} -->
        <div class="wp-block-columns has-background" style="border-radius:8px;background-color:#f4f3ef;margin-bottom:16px;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px">
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Visita y Endoscopia</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">Gratuita</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Ámbito</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">Madrid y Alrededores</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
            <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:2px;font-size:11px">Experiencia</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-align-center has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">+15 Años</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->

        <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">Asesoramiento técnico personalizado</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
          <p class="has-text-color" style="color:#cc292b;font-size:12px;font-weight:700"><a href="tel:695928763" style="color:#cc292b;text-decoration:none">Llamar 695 92 87 63 →</a></p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->`;

export const TT5_SECTION_03_BLOCKS = `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"72px","bottom":"80px","left":"24px","right":"24px"},"margin":{"top":"0px","bottom":"0px"}},"color":{"background":"#fbf9f6"}},"layout":{"type":"constrained","contentSize":"1200px","wideSize":"1200px"}} -->
<div id="calculadora" class="wp-block-group alignfull has-background" style="background-color:#fbf9f6;margin-top:0px;margin-bottom:0px;padding-top:72px;padding-right:24px;padding-bottom:80px;padding-left:24px">
  <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700","letterSpacing":"0.04em"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
  <p class="has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:13px;font-weight:700;letter-spacing:0.04em"><span style="color:#cc292b">03</span> / CALCULADORA DE AHORRO TÉRMICO</p>
  <!-- /wp:paragraph -->

  <!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"34px","fontWeight":"700","lineHeight":"1.18"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"12px"}}}} -->
  <h2 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:12px;font-size:34px;font-weight:700;line-height:1.18">Simula tu ahorro en calefacción y eliminación de humedades</h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.5"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"36px"}}}} -->
  <p class="has-text-color" style="color:#43474a;margin-bottom:36px;font-size:14px;line-height:1.5">Calcula cuánto dinero puedes ahorrar cada año en tus facturas de gas y electricidad<br>aislando las cámaras de aire de tu vivienda con Aislamientos Framo.</p>
  <!-- /wp:paragraph -->

  <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"0px","left":"0px"}}}} -->
  <div class="wp-block-columns alignwide">
    <!-- wp:column {"width":"58%"} -->
    <div class="wp-block-column" style="flex-basis:58%">
      <!-- wp:group {"style":{"color":{"background":"#efede9"},"border":{"radius":{"topLeft":"12px","bottomLeft":"12px","topRight":"0px","bottomRight":"0px"}},"spacing":{"padding":{"top":"36px","bottom":"36px","left":"36px","right":"36px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-background" style="border-top-left-radius:12px;border-top-right-radius:0px;border-bottom-left-radius:12px;border-bottom-right-radius:0px;background-color:#efede9;padding-top:36px;padding-right:36px;padding-bottom:36px;padding-left:36px">
        <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"10px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group" style="margin-bottom:10px">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
          <p class="has-text-color" style="color:#1b1c1a;font-size:14px;font-weight:700">Gasto anual actual en calefacción y aire acondicionado</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"20px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
          <p class="has-text-color" style="color:#cc292b;font-size:20px;font-weight:700">1800 € / año</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:html -->
        <div style="margin-bottom:8px;">
          <input type="range" min="600" max="3500" step="50" value="1800" style="width:100%;accent-color:#cc292b;" />
        </div>
        <!-- /wp:html -->

        <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"26px"}}},"layout":{"type":"flex","justifyContent":"space-between"}} -->
        <div class="wp-block-group" style="margin-bottom:26px">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">600 € (Piso pequeño)</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">1.800 € (Piso estándar / Chalet)</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">3.500 €+ (Chalet grande)</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:13px;font-weight:700">Tipo de inmueble en Madrid</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"10px","left":"10px"},"margin":{"bottom":"24px"}}}} -->
        <div class="wp-block-columns" style="margin-bottom:24px">
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:group {"style":{"color":{"background":"#cc292b","text":"#ffffff"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"14px","right":"14px"}}},"layout":{"type":"constrained"}} -->
            <div class="wp-block-group has-text-color has-background" style="border-radius:6px;color:#ffffff;background-color:#cc292b;padding-top:12px;padding-right:14px;padding-bottom:12px;padding-left:14px">
              <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"spacing":{"margin":{"bottom":"2px"}}}} -->
              <p style="margin-bottom:2px;font-size:12px;font-weight:700">Piso en Bloque</p>
              <!-- /wp:paragraph -->
              <!-- wp:paragraph {"style":{"typography":{"fontSize":"11px"}}} -->
              <p style="font-size:11px">Ahorro estimado 45%</p>
              <!-- /wp:paragraph -->
            </div>
            <!-- /wp:group -->
          </div>
          <!-- /wp:column -->

          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:group {"style":{"color":{"background":"#ffffff","text":"#1b1c1a"},"border":{"radius":"6px","color":"#dcdad6","width":"1px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"14px","right":"14px"}}},"layout":{"type":"constrained"}} -->
            <div class="wp-block-group has-border-color has-text-color has-background" style="border-color:#dcdad6;border-width:1px;border-radius:6px;color:#1b1c1a;background-color:#ffffff;padding-top:12px;padding-right:14px;padding-bottom:12px;padding-left:14px">
              <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"spacing":{"margin":{"bottom":"2px"}}}} -->
              <p style="margin-bottom:2px;font-size:12px;font-weight:700">Chalet Adosado</p>
              <!-- /wp:paragraph -->
              <!-- wp:paragraph {"style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"}}} -->
              <p class="has-text-color" style="color:#43474a;font-size:11px">Ahorro estimado 50%</p>
              <!-- /wp:paragraph -->
            </div>
            <!-- /wp:group -->
          </div>
          <!-- /wp:column -->

          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:group {"style":{"color":{"background":"#ffffff","text":"#1b1c1a"},"border":{"radius":"6px","color":"#dcdad6","width":"1px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"14px","right":"14px"}}},"layout":{"type":"constrained"}} -->
            <div class="wp-block-group has-border-color has-text-color has-background" style="border-color:#dcdad6;border-width:1px;border-radius:6px;color:#1b1c1a;background-color:#ffffff;padding-top:12px;padding-right:14px;padding-bottom:12px;padding-left:14px">
              <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"spacing":{"margin":{"bottom":"2px"}}}} -->
              <p style="margin-bottom:2px;font-size:12px;font-weight:700">Chalet Independiente</p>
              <!-- /wp:paragraph -->
              <!-- wp:paragraph {"style":{"typography":{"fontSize":"11px"},"color":{"text":"#43474a"}}} -->
              <p class="has-text-color" style="color:#43474a;font-size:11px">Ahorro estimado 55%</p>
              <!-- /wp:paragraph -->
            </div>
            <!-- /wp:group -->
          </div>
          <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:13px;font-weight:700">Problema térmico principal</p>
        <!-- /wp:paragraph -->

        <!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"10px","left":"10px"},"margin":{"bottom":"20px"}}}} -->
        <div class="wp-block-columns" style="margin-bottom:20px">
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"style":{"color":{"background":"#cc292b","text":"#ffffff"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"11px","bottom":"11px","left":"14px","right":"14px"}},"typography":{"fontSize":"12px","fontWeight":"700"}}} -->
            <p class="has-text-color has-background" style="border-radius:6px;color:#ffffff;background-color:#cc292b;padding-top:11px;padding-right:14px;padding-bottom:11px;padding-left:14px;font-size:12px;font-weight:700">Frío y Calor Extremo</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"style":{"color":{"background":"#ffffff","text":"#1b1c1a"},"border":{"radius":"6px","color":"#dcdad6","width":"1px"},"spacing":{"padding":{"top":"11px","bottom":"11px","left":"14px","right":"14px"}},"typography":{"fontSize":"12px","fontWeight":"700"}}} -->
            <p class="has-border-color has-text-color has-background" style="border-color:#dcdad6;border-width:1px;border-radius:6px;color:#1b1c1a;background-color:#ffffff;padding-top:11px;padding-right:14px;padding-bottom:11px;padding-left:14px;font-size:12px;font-weight:700">Humedad / Moho</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
          <!-- wp:column -->
          <div class="wp-block-column">
            <!-- wp:paragraph {"style":{"color":{"background":"#ffffff","text":"#1b1c1a"},"border":{"radius":"6px","color":"#dcdad6","width":"1px"},"spacing":{"padding":{"top":"11px","bottom":"11px","left":"14px","right":"14px"}},"typography":{"fontSize":"12px","fontWeight":"700"}}} -->
            <p class="has-border-color has-text-color has-background" style="border-color:#dcdad6;border-width:1px;border-radius:6px;color:#1b1c1a;background-color:#ffffff;padding-top:11px;padding-right:14px;padding-bottom:11px;padding-left:14px;font-size:12px;font-weight:700">Ruido Exterior</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->

        <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"14px","right":"14px"}}},"layout":{"type":"constrained"}} -->
        <div class="wp-block-group has-background" style="border-radius:6px;background-color:#ffffff;padding-top:12px;padding-right:14px;padding-bottom:12px;padding-left:14px">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.45"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.45"><span style="color:#cc292b">ⓘ</span> Cálculo basado en coeficientes de transmitancia térmica de cerramientos estándar en la Comunidad de Madrid.</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column {"width":"42%"} -->
    <div class="wp-block-column" style="flex-basis:42%">
      <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"12px","color":"#e4e2df","width":"1px"},"spacing":{"padding":{"top":"36px","bottom":"36px","left":"36px","right":"36px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-border-color has-background" style="border-color:#e4e2df;border-width:1px;border-radius:12px;background-color:#ffffff;padding-top:36px;padding-right:36px;padding-bottom:36px;padding-left:36px">
        <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"16px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
        <div class="wp-block-group" style="margin-bottom:16px">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.04em"},"color":{"text":"#cc292b"}}} -->
          <p class="has-text-color" style="color:#cc292b;font-size:12px;font-weight:700;letter-spacing:0.04em">SIMULACIÓN ESTIMADA FRAMO</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"color":{"background":"#fae5e3","text":"#b6171e"},"border":{"radius":"999px"},"spacing":{"padding":{"top":"3px","bottom":"3px","left":"10px","right":"10px"}},"typography":{"fontSize":"11px","fontWeight":"700"}}} -->
          <p class="has-text-color has-background" style="border-radius:999px;color:#b6171e;background-color:#fae5e3;padding-top:3px;padding-right:10px;padding-bottom:3px;padding-left:10px;font-size:11px;font-weight:700">Sin Obras</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"4px"}}}} -->
        <p class="has-text-color" style="color:#43474a;margin-bottom:4px;font-size:12px">Ahorro anual estimado en facturas</p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"52px","fontWeight":"800","lineHeight":"1.05"},"color":{"text":"#cc292b"},"spacing":{"margin":{"bottom":"10px"}}}} -->
        <p class="has-text-color" style="color:#cc292b;margin-bottom:10px;font-size:52px;font-weight:800;line-height:1.05">900 € <span style="font-size:14px;font-weight:500;color:#43474a">/ año</span></p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700","lineHeight":"1.4"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"20px"}}}} -->
        <p class="has-text-color" style="color:#1b1c1a;margin-bottom:20px;font-size:13px;font-weight:700;line-height:1.4">Recupera la inversión inicial en menos de 2 o 3 inviernos</p>
        <!-- /wp:paragraph -->

        <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"9px","bottom":"9px","left":"14px","right":"14px"},"margin":{"bottom":"8px"}}},"layout":{"type":"flex","justifyContent":"space-between"}} -->
        <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;margin-bottom:8px;padding-top:9px;padding-right:14px;padding-bottom:9px;padding-left:14px">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">Reducción de pérdidas térmicas</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
          <p class="has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">Hasta 50%</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"9px","bottom":"9px","left":"14px","right":"14px"},"margin":{"bottom":"8px"}}},"layout":{"type":"flex","justifyContent":"space-between"}} -->
        <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;margin-bottom:8px;padding-top:9px;padding-right:14px;padding-bottom:9px;padding-left:14px">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">Eliminación de condensación</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#cc292b"}}} -->
          <p class="has-text-color" style="color:#cc292b;font-size:12px;font-weight:700">100% Definitiva</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"9px","bottom":"9px","left":"14px","right":"14px"},"margin":{"bottom":"8px"}}},"layout":{"type":"flex","justifyContent":"space-between"}} -->
        <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;margin-bottom:8px;padding-top:9px;padding-right:14px;padding-bottom:9px;padding-left:14px">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">Tiempo de ejecución</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
          <p class="has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">1 Jornada (Sin Obras)</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"9px","bottom":"9px","left":"14px","right":"14px"},"margin":{"bottom":"22px"}}},"layout":{"type":"flex","justifyContent":"space-between"}} -->
        <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;margin-bottom:22px;padding-top:9px;padding-right:14px;padding-bottom:9px;padding-left:14px">
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
          <p class="has-text-color" style="color:#43474a;font-size:12px">Garantía por escrito</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
          <p class="has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">10 Años</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
        <div class="wp-block-buttons">
          <!-- wp:button {"width":100,"style":{"color":{"background":"#cc292b","text":"#ffffff"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"20px","right":"20px"}},"typography":{"fontSize":"13px","fontWeight":"700"}}} -->
          <div class="wp-block-button has-custom-width wp-block-button__width-100 has-custom-font-size" style="font-size:13px;font-weight:700"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="tel:695928763" style="border-radius:6px;color:#ffffff;background-color:#cc292b;padding-top:12px;padding-right:20px;padding-bottom:12px;padding-left:20px">📞 Llamar Ahora al 695 92 87 63</a></div>
          <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->

        <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"},"spacing":{"margin":{"top":"10px"}}}} -->
        <p class="has-text-align-center has-text-color" style="color:#43474a;margin-top:10px;font-size:12px;line-height:1.4">Presupuesto y visita técnica gratuita en toda la<br>Comunidad de Madrid.</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->`;

export const TT5_SECTION_04_BLOCKS = `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"72px","bottom":"80px","left":"24px","right":"24px"},"margin":{"top":"0px","bottom":"0px"}},"color":{"background":"#f4f2ee"}},"layout":{"type":"constrained","contentSize":"1200px","wideSize":"1200px"}} -->
<div id="casos" class="wp-block-group alignfull has-background" style="background-color:#f4f2ee;margin-top:0px;margin-bottom:0px;padding-top:72px;padding-right:24px;padding-bottom:80px;padding-left:24px">
  <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700","letterSpacing":"0.04em"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
  <p class="has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:13px;font-weight:700;letter-spacing:0.04em"><span style="color:#cc292b">04</span> / CASOS DE ÉXITO EN MADRID</p>
  <!-- /wp:paragraph -->

  <!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"34px","fontWeight":"700","lineHeight":"1.18"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
  <h2 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:34px;font-weight:700;line-height:1.18">Viviendas reales transformadas por Aislamientos Framo</h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","lineHeight":"1.5"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"36px"}}}} -->
  <p class="has-text-color" style="color:#43474a;margin-bottom:36px;font-size:14px;line-height:1.5">Descubre cómo hemos ayudado a familias en Madrid a eliminar el frío, el ruido y los<br>problemas de moho en un solo día sin obras en casa.</p>
  <!-- /wp:paragraph -->

  <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"2px","left":"2px"}}}} -->
  <div class="wp-block-columns alignwide">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":{"topLeft":"12px","bottomLeft":"12px","topRight":"0px","bottomRight":"0px"},"color":"#e4e2df","width":"1px"},"spacing":{"padding":{"top":"0px","bottom":"28px","left":"0px","right":"0px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-border-color has-background" style="border-color:#e4e2df;border-width:1px;border-top-left-radius:12px;border-top-right-radius:0px;border-bottom-left-radius:12px;border-bottom-right-radius:0px;background-color:#ffffff;padding-top:0px;padding-right:0px;padding-bottom:28px;padding-left:0px">
        <!-- wp:html -->
        <div style="position:relative;">
          <img src="/assets/aistudio/case_1.jpg" alt="Pozuelo de Alarcón, Madrid · 180 m²" style="width:100%;display:block;border-top-left-radius:12px;" />
          <span style="position:absolute;top:12px;left:12px;background:#ffffff;color:#1b1c1a;font-size:12px;font-weight:700;padding:4px 12px;border-radius:6px;">Pozuelo de Alarcón, Madrid · 180 m²</span>
        </div>
        <!-- /wp:html -->

        <!-- wp:group {"style":{"spacing":{"padding":{"top":"24px","bottom":"0px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
        <div class="wp-block-group" style="padding-top:24px;padding-right:24px;padding-bottom:0px;padding-left:24px">
          <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"20px","fontWeight":"700","lineHeight":"1.3"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
          <h3 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:20px;font-weight:700;line-height:1.3">Chalet Unifamiliar: Insuflado de Lana de Roca en Cámaras de Fachada</h3>
          <!-- /wp:heading -->

          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.55"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"18px"}}}} -->
          <p class="has-text-color" style="color:#43474a;margin-bottom:18px;font-size:12px;line-height:1.55">La vivienda sufría de fuertes corrientes de aire interior y paredes muy frías en invierno. Se insufló lana de roca de alta densidad en toda la cámara de aire desde el exterior en solo 8 horas.</p>
          <!-- /wp:paragraph -->

          <!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"12px","left":"12px"},"margin":{"bottom":"16px"}}}} -->
          <div class="wp-block-columns" style="margin-bottom:16px">
            <!-- wp:column -->
            <div class="wp-block-column">
              <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"14px","right":"14px"}}},"layout":{"type":"constrained"}} -->
              <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;padding-top:12px;padding-right:14px;padding-bottom:12px;padding-left:14px">
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"11px","fontWeight":"700"},"color":{"text":"#b6171e"},"spacing":{"margin":{"bottom":"4px"}}}} -->
                <p class="has-text-color" style="color:#b6171e;margin-bottom:4px;font-size:11px;font-weight:700">✕ Antes del Aislamiento</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"600"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
                <p class="has-text-color" style="color:#1b1c1a;margin-bottom:2px;font-size:12px;font-weight:600">Frío y Gasto Alto</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"}}} -->
                <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.4">Calefacción encendida todo el día sin confort real.</p>
                <!-- /wp:paragraph -->
              </div>
              <!-- /wp:group -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column -->
            <div class="wp-block-column">
              <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"14px","right":"14px"}}},"layout":{"type":"constrained"}} -->
              <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;padding-top:12px;padding-right:14px;padding-bottom:12px;padding-left:14px">
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"11px","fontWeight":"700"},"color":{"text":"#b6171e"},"spacing":{"margin":{"bottom":"4px"}}}} -->
                <p class="has-text-color" style="color:#b6171e;margin-bottom:4px;font-size:11px;font-weight:700">✓ Tras el Insuflado Framo</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"600"},"color":{"text":"#cc292b"},"spacing":{"margin":{"bottom":"2px"}}}} -->
                <p class="has-text-color" style="color:#cc292b;margin-bottom:2px;font-size:12px;font-weight:600">-48% en Gas</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"}}} -->
                <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.4">Temperatura estable y hogar cálido en invierno.</p>
                <!-- /wp:paragraph -->
              </div>
              <!-- /wp:group -->
            </div>
            <!-- /wp:column -->
          </div>
          <!-- /wp:columns -->

          <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"14px","bottom":"14px","left":"16px","right":"16px"}}},"layout":{"type":"constrained"}} -->
          <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;padding-top:14px;padding-right:16px;padding-bottom:14px;padding-left:16px">
            <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontStyle":"italic","lineHeight":"1.5"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"6px"}}}} -->
            <p class="has-text-color" style="color:#43474a;margin-bottom:6px;font-size:12px;font-style:italic;line-height:1.5">"El cambio ha sido radical desde el primer día. Ya no se nota esa sensación de pared fría y la caldera salta muchísimo menos. Todo ejecutado sin entrar prácticamente a la vivienda."</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">— Alberto S. (Propietario en Pozuelo)</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:group -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":{"topLeft":"0px","bottomLeft":"0px","topRight":"12px","bottomRight":"12px"},"color":"#e4e2df","width":"1px"},"spacing":{"padding":{"top":"0px","bottom":"28px","left":"0px","right":"0px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-border-color has-background" style="border-color:#e4e2df;border-width:1px;border-top-left-radius:0px;border-top-right-radius:12px;border-bottom-left-radius:0px;border-bottom-right-radius:12px;background-color:#ffffff;padding-top:0px;padding-right:0px;padding-bottom:28px;padding-left:0px">
        <!-- wp:html -->
        <div style="position:relative;">
          <img src="/assets/aistudio/case_2.jpg" alt="Barrio de Salamanca, Madrid · 110 m²" style="width:100%;display:block;border-top-right-radius:12px;" />
          <span style="position:absolute;top:12px;left:12px;background:#ffffff;color:#1b1c1a;font-size:12px;font-weight:700;padding:4px 12px;border-radius:6px;">Barrio de Salamanca, Madrid · 110 m²</span>
        </div>
        <!-- /wp:html -->

        <!-- wp:group {"style":{"spacing":{"padding":{"top":"24px","bottom":"0px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
        <div class="wp-block-group" style="padding-top:24px;padding-right:24px;padding-bottom:0px;padding-left:24px">
          <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"20px","fontWeight":"700","lineHeight":"1.3"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"10px"}}}} -->
          <h3 class="wp-block-heading has-text-color" style="color:#1b1c1a;margin-bottom:10px;font-size:20px;font-weight:700;line-height:1.3">Piso en Edificio: Eliminación de Humedades por Condensación y Moho</h3>
          <!-- /wp:heading -->

          <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.55"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"18px"}}}} -->
          <p class="has-text-color" style="color:#43474a;margin-bottom:18px;font-size:12px;line-height:1.55">Problemas persistentes de manchas negras y condensación en las esquinas de las habitaciones norte. Se intervino mediante aislamiento térmico soplado en tabique y cámara interior.</p>
          <!-- /wp:paragraph -->

          <!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"12px","left":"12px"},"margin":{"bottom":"16px"}}}} -->
          <div class="wp-block-columns" style="margin-bottom:16px">
            <!-- wp:column -->
            <div class="wp-block-column">
              <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"14px","right":"14px"}}},"layout":{"type":"constrained"}} -->
              <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;padding-top:12px;padding-right:14px;padding-bottom:12px;padding-left:14px">
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"11px","fontWeight":"700"},"color":{"text":"#b6171e"},"spacing":{"margin":{"bottom":"4px"}}}} -->
                <p class="has-text-color" style="color:#b6171e;margin-bottom:4px;font-size:11px;font-weight:700">✕ Antes del Aislamiento</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"600"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"2px"}}}} -->
                <p class="has-text-color" style="color:#1b1c1a;margin-bottom:2px;font-size:12px;font-weight:600">Moho y Olor a Humedad</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"}}} -->
                <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.4">Paredes frías y agua condensada en cristales y marcos.</p>
                <!-- /wp:paragraph -->
              </div>
              <!-- /wp:group -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column -->
            <div class="wp-block-column">
              <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"14px","right":"14px"}}},"layout":{"type":"constrained"}} -->
              <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;padding-top:12px;padding-right:14px;padding-bottom:12px;padding-left:14px">
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"11px","fontWeight":"700"},"color":{"text":"#b6171e"},"spacing":{"margin":{"bottom":"4px"}}}} -->
                <p class="has-text-color" style="color:#b6171e;margin-bottom:4px;font-size:11px;font-weight:700">✓ Tras el Insuflado Framo</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"600"},"color":{"text":"#cc292b"},"spacing":{"margin":{"bottom":"2px"}}}} -->
                <p class="has-text-color" style="color:#cc292b;margin-bottom:2px;font-size:12px;font-weight:600">100% Seco</p>
                <!-- /wp:paragraph -->
                <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"}}} -->
                <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.4">Desaparición total de hongos y confort acústico extra.</p>
                <!-- /wp:paragraph -->
              </div>
              <!-- /wp:group -->
            </div>
            <!-- /wp:column -->
          </div>
          <!-- /wp:columns -->

          <!-- wp:group {"style":{"color":{"background":"#f4f3ef"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"14px","bottom":"14px","left":"16px","right":"16px"}}},"layout":{"type":"constrained"}} -->
          <div class="wp-block-group has-background" style="border-radius:6px;background-color:#f4f3ef;padding-top:14px;padding-right:16px;padding-bottom:14px;padding-left:16px">
            <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontStyle":"italic","lineHeight":"1.5"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"6px"}}}} -->
            <p class="has-text-color" style="color:#43474a;margin-bottom:6px;font-size:12px;font-style:italic;line-height:1.5">"Teníamos condensación en los dormitorios infantiles cada invierno. Los chicos de Framo lo solucionaron en una mañana sin obras ni polvo. No ha vuelto a aparecer ni una sola gota de agua."</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
            <p class="has-text-color" style="color:#1b1c1a;font-size:12px;font-weight:700">— Carmen R. (Madrid)</p>
            <!-- /wp:paragraph -->
          </div>
          <!-- /wp:group -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->`;

export const TT5_SECTION_05_BLOCKS = `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"72px","bottom":"80px","left":"24px","right":"24px"},"margin":{"top":"0px","bottom":"0px"}},"color":{"background":"#fbf9f6"}},"layout":{"type":"constrained","contentSize":"920px","wideSize":"920px"}} -->
<div id="faq" class="wp-block-group alignfull has-background" style="background-color:#fbf9f6;margin-top:0px;margin-bottom:0px;padding-top:72px;padding-right:24px;padding-bottom:80px;padding-left:24px">
  <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"13px","fontWeight":"700","letterSpacing":"0.04em"},"color":{"text":"#cc292b"},"spacing":{"margin":{"bottom":"10px"}}}} -->
  <p class="has-text-align-center has-text-color" style="color:#cc292b;margin-bottom:10px;font-size:13px;font-weight:700;letter-spacing:0.04em">05 / PREGUNTAS FRECUENTES</p>
  <!-- /wp:paragraph -->

  <!-- wp:heading {"textAlign":"center","level":2,"style":{"typography":{"fontSize":"34px","fontWeight":"700","lineHeight":"1.18"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"12px"}}}} -->
  <h2 class="wp-block-heading has-text-align-center has-text-color" style="color:#1b1c1a;margin-bottom:12px;font-size:34px;font-weight:700;line-height:1.18">Dudas habituales sobre el aislamiento<br>sin obras</h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"14px","lineHeight":"1.5"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"40px"}}}} -->
  <p class="has-text-align-center has-text-color" style="color:#43474a;margin-bottom:40px;font-size:14px;line-height:1.5">Todo lo que necesitas saber sobre nuestro método de insuflado en cámaras de aire en<br>Madrid.</p>
  <!-- /wp:paragraph -->

  <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"8px","color":"#eae8e5","width":"1px"},"spacing":{"padding":{"top":"20px","bottom":"20px","left":"24px","right":"24px"},"margin":{"bottom":"14px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
  <div class="wp-block-group has-border-color has-background" style="border-color:#eae8e5;border-width:1px;border-radius:8px;background-color:#ffffff;margin-bottom:14px;padding-top:20px;padding-right:24px;padding-bottom:20px;padding-left:24px">
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"16px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
    <p class="has-text-color" style="color:#1b1c1a;font-size:16px;font-weight:700">¿Es verdad que se hace sin obras y sin entrar en casa?</p>
    <!-- /wp:paragraph -->
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"22px","fontWeight":"600"},"color":{"text":"#cc292b"}}} -->
    <p class="has-text-color" style="color:#cc292b;font-size:22px;font-weight:600">+</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->

  <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"8px","color":"#eae8e5","width":"1px"},"spacing":{"padding":{"top":"20px","bottom":"20px","left":"24px","right":"24px"},"margin":{"bottom":"14px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
  <div class="wp-block-group has-border-color has-background" style="border-color:#eae8e5;border-width:1px;border-radius:8px;background-color:#ffffff;margin-bottom:14px;padding-top:20px;padding-right:24px;padding-bottom:20px;padding-left:24px">
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"16px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
    <p class="has-text-color" style="color:#1b1c1a;font-size:16px;font-weight:700">¿Cómo elimina el aislamiento las humedades por condensación y el moho?</p>
    <!-- /wp:paragraph -->
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"22px","fontWeight":"600"},"color":{"text":"#cc292b"}}} -->
    <p class="has-text-color" style="color:#cc292b;font-size:22px;font-weight:600">+</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->

  <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"8px","color":"#eae8e5","width":"1px"},"spacing":{"padding":{"top":"20px","bottom":"20px","left":"24px","right":"24px"},"margin":{"bottom":"14px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
  <div class="wp-block-group has-border-color has-background" style="border-color:#eae8e5;border-width:1px;border-radius:8px;background-color:#ffffff;margin-bottom:14px;padding-top:20px;padding-right:24px;padding-bottom:20px;padding-left:24px">
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"16px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
    <p class="has-text-color" style="color:#1b1c1a;font-size:16px;font-weight:700">¿Cuánto tiempo se tarda en realizar la instalación en un piso o chalet?</p>
    <!-- /wp:paragraph -->
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"22px","fontWeight":"600"},"color":{"text":"#cc292b"}}} -->
    <p class="has-text-color" style="color:#cc292b;font-size:22px;font-weight:600">+</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->

  <!-- wp:group {"style":{"color":{"background":"#ffffff"},"border":{"radius":"8px","color":"#eae8e5","width":"1px"},"spacing":{"padding":{"top":"20px","bottom":"20px","left":"24px","right":"24px"}}},"layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"center"}} -->
  <div class="wp-block-group has-border-color has-background" style="border-color:#eae8e5;border-width:1px;border-radius:8px;background-color:#ffffff;padding-top:20px;padding-right:24px;padding-bottom:20px;padding-left:24px">
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"16px","fontWeight":"700"},"color":{"text":"#1b1c1a"}}} -->
    <p class="has-text-color" style="color:#1b1c1a;font-size:16px;font-weight:700">¿Qué materiales utilizáis y qué garantía ofrecéis?</p>
    <!-- /wp:paragraph -->
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"22px","fontWeight":"600"},"color":{"text":"#cc292b"}}} -->
    <p class="has-text-color" style="color:#cc292b;font-size:22px;font-weight:600">+</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->`;

export const TT5_FOOTER_CTA_BLOCKS = `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"72px","bottom":"72px","left":"24px","right":"24px"},"margin":{"top":"0px","bottom":"0px"}},"color":{"background":"#293133"}},"layout":{"type":"constrained","contentSize":"1200px","wideSize":"1200px"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#293133;margin-top:0px;margin-bottom:0px;padding-top:72px;padding-right:24px;padding-bottom:72px;padding-left:24px">
  <!-- wp:columns {"align":"wide","verticalAlignment":"center","style":{"spacing":{"blockGap":{"top":"32px","left":"48px"}}}} -->
  <div class="wp-block-columns alignwide are-vertically-aligned-center">
    <!-- wp:column {"verticalAlignment":"center","width":"64%"} -->
    <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:64%">
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700","letterSpacing":"0.06em"},"color":{"text":"#ffffff"},"spacing":{"margin":{"bottom":"14px"}}}} -->
      <p class="has-text-color" style="color:#ffffff;margin-bottom:14px;font-size:13px;font-weight:700;letter-spacing:0.06em">AISLAMIENTOS FRAMO · EXPERTOS EN MADRID</p>
      <!-- /wp:paragraph -->

      <!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"48px","fontWeight":"400","lineHeight":"1.12"},"color":{"text":"#ffffff"},"spacing":{"margin":{"bottom":"18px"}}}} -->
      <h2 class="wp-block-heading has-text-color" style="color:#ffffff;margin-bottom:18px;font-size:48px;font-weight:400;line-height:1.12">¿Harto de pasar frío, oír ruido o sufrir humedad en casa?</h2>
      <!-- /wp:heading -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"15px","lineHeight":"1.55"},"color":{"text":"#bec8cd"}}} -->
      <p class="has-text-color" style="color:#bec8cd;font-size:15px;line-height:1.55">Llámanos directamente o solicita tu visita técnica y presupuesto gratuito sin<br>compromiso en toda la Comunidad de Madrid.</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column {"verticalAlignment":"center","width":"36%"} -->
    <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:36%">
      <!-- wp:group {"style":{"color":{"background":"#3b4244"},"border":{"radius":"10px","color":"#4c5457","width":"1px"},"spacing":{"padding":{"top":"24px","bottom":"24px","left":"24px","right":"24px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-border-color has-background" style="border-color:#4c5457;border-width:1px;border-radius:10px;background-color:#3b4244;padding-top:24px;padding-right:24px;padding-bottom:24px;padding-left:24px">
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","fontWeight":"700"},"color":{"text":"#ffffff"},"spacing":{"margin":{"bottom":"4px"}}}} -->
        <p class="has-text-color" style="color:#ffffff;margin-bottom:4px;font-size:14px;font-weight:700">Atención Directa con Especialistas</p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#bec8cd"},"spacing":{"margin":{"bottom":"14px"}}}} -->
        <p class="has-text-color" style="color:#bec8cd;margin-bottom:14px;font-size:12px">Llámanos ahora mismo al teléfono de contacto:</p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"align":"center","style":{"color":{"background":"#ffffff","text":"#1b1c1a"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"11px","bottom":"11px","left":"16px","right":"16px"},"margin":{"bottom":"10px"}},"typography":{"fontSize":"18px","fontWeight":"700"}}} -->
        <p class="has-text-align-center has-text-color has-background" style="border-radius:6px;color:#1b1c1a;background-color:#ffffff;margin-bottom:10px;padding-top:11px;padding-right:16px;padding-bottom:11px;padding-left:16px;font-size:18px;font-weight:700"><span style="color:#cc292b">📞</span> 695 92 87 63</p>
        <!-- /wp:paragraph -->

        <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
        <div class="wp-block-buttons">
          <!-- wp:button {"width":100,"style":{"color":{"background":"#cc292b","text":"#ffffff"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"10px","bottom":"10px","left":"16px","right":"16px"}},"typography":{"fontSize":"13px","fontWeight":"700"}}} -->
          <div class="wp-block-button has-custom-width wp-block-button__width-100 has-custom-font-size" style="font-size:13px;font-weight:700"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="tel:695928763" style="border-radius:6px;color:#ffffff;background-color:#cc292b;padding-top:10px;padding-right:16px;padding-bottom:10px;padding-left:16px">Llamar al 695 92 87 63</a></div>
          <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->

        <!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"11px"},"color":{"text":"#bec8cd"},"spacing":{"margin":{"top":"10px"}}}} -->
        <p class="has-text-align-center has-text-color" style="color:#bec8cd;margin-top:10px;font-size:11px">Visita y presupuesto sin ningún compromiso.</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"56px","bottom":"36px","left":"24px","right":"24px"},"margin":{"top":"0px","bottom":"0px"}},"color":{"background":"#efede9"}},"layout":{"type":"constrained","contentSize":"1200px","wideSize":"1200px"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#efede9;margin-top:0px;margin-bottom:0px;padding-top:56px;padding-right:24px;padding-bottom:36px;padding-left:24px">
  <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"32px","left":"36px"},"margin":{"bottom":"48px"}}}} -->
  <div class="wp-block-columns alignwide" style="margin-bottom:48px">
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:image {"width":"130px","sizeSlug":"full","style":{"spacing":{"margin":{"bottom":"14px"}}}} -->
      <figure class="wp-block-image size-full is-resized" style="margin-bottom:14px"><img src="/assets/aistudio/footer_logo.jpg" alt="Hábitat Eficiente" style="width:130px"/></figure>
      <!-- /wp:image -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.55"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"14px"}}}} -->
      <p class="has-text-color" style="color:#43474a;margin-bottom:14px;font-size:12px;line-height:1.55">Especialistas en aislamiento térmico y acústico sin obras en Madrid. Insuflado de lana de roca, celulosa y EPS grafito para eliminar el frío, el ruido y las humedades por condensación.</p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"style":{"color":{"background":"#e3e1dd","text":"#1b1c1a"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"7px","bottom":"7px","left":"12px","right":"12px"}},"typography":{"fontSize":"12px","fontWeight":"700"}}} -->
      <p class="has-text-color has-background" style="border-radius:6px;color:#1b1c1a;background-color:#e3e1dd;display:inline-block;padding-top:7px;padding-right:12px;padding-bottom:7px;padding-left:12px;font-size:12px;font-weight:700">Teléfono: 695 92 87 63</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"14px"}}}} -->
      <p class="has-text-color" style="color:#1b1c1a;margin-bottom:14px;font-size:13px;font-weight:700">Soluciones Framo</p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"2.1"},"color":{"text":"#43474a"}}} -->
      <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:2.1">Aislamiento de Cámaras de Aire<br>Eliminar Humedades y Condensación<br>Aislamiento Acústico en Paredes<br>Lana de Roca y Celulosa<br>Aislamiento para Chalets y Pisos</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"14px"}}}} -->
      <p class="has-text-color" style="color:#1b1c1a;margin-bottom:14px;font-size:13px;font-weight:700">Comunidad de Madrid</p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"2.1"},"color":{"text":"#43474a"}}} -->
      <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:2.1">Madrid Capital y Barrios<br>Pozuelo de Alarcón y Majadahonda<br>Las Rozas y Boadilla del Monte<br>Alcobendas y San Sebastián de los Reyes<br>Zona Sur y Corredor del Henares</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#1b1c1a"},"spacing":{"margin":{"bottom":"14px"}}}} -->
      <p class="has-text-color" style="color:#1b1c1a;margin-bottom:14px;font-size:13px;font-weight:700">Contacto Directo</p>
      <!-- /wp:paragraph -->

      <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.55"},"color":{"text":"#43474a"},"spacing":{"margin":{"bottom":"14px"}}}} -->
      <p class="has-text-color" style="color:#43474a;margin-bottom:14px;font-size:12px;line-height:1.55">Llámanos ahora para recibir asesoramiento técnico personalizado y presupuesto inmediato sin compromiso.</p>
      <!-- /wp:paragraph -->

      <!-- wp:group {"style":{"color":{"background":"#e8e6e2"},"border":{"radius":"6px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"14px","right":"14px"}}},"layout":{"type":"constrained"}} -->
      <div class="wp-block-group has-background" style="border-radius:6px;background-color:#e8e6e2;padding-top:12px;padding-right:14px;padding-bottom:12px;padding-left:14px">
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"13px","fontWeight":"700"},"color":{"text":"#cc292b"},"spacing":{"margin":{"bottom":"4px"}}}} -->
        <p class="has-text-color" style="color:#cc292b;margin-bottom:4px;font-size:13px;font-weight:700">📞 695 92 87 63</p>
        <!-- /wp:paragraph -->
        <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px","lineHeight":"1.4"},"color":{"text":"#43474a"}}} -->
        <p class="has-text-color" style="color:#43474a;font-size:12px;line-height:1.4">Visita técnica y endoscopia de cámara 100% gratuita.</p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->

  <!-- wp:group {"align":"wide","style":{"border":{"top":{"color":"#dcdad6","width":"1px"}},"spacing":{"padding":{"top":"24px"}}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
  <div class="wp-block-group alignwide" style="border-top-color:#dcdad6;border-top-width:1px;padding-top:24px">
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
    <p class="has-text-color" style="color:#43474a;font-size:12px">© 2025 Aislamientos Framo S.L. Todos los derechos reservados.</p>
    <!-- /wp:paragraph -->

    <!-- wp:group {"style":{"spacing":{"blockGap":"20px"}},"layout":{"type":"flex","flexWrap":"wrap"}} -->
    <div class="wp-block-group">
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
      <p class="has-text-color" style="color:#43474a;font-size:12px">Aviso Legal</p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
      <p class="has-text-color" style="color:#43474a;font-size:12px">Política de Privacidad</p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
      <p class="has-text-color" style="color:#43474a;font-size:12px">Política de Cookies</p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"style":{"typography":{"fontSize":"12px"},"color":{"text":"#43474a"}}} -->
      <p class="has-text-color" style="color:#43474a;font-size:12px">Contacto</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->`;

export const FULL_GUTENBERG_TT5_PAGE = [
  TT5_HEADER_BLOCKS,
  TT5_SECTION_01_BLOCKS,
  TT5_SECTION_02_BLOCKS,
  TT5_SECTION_03_BLOCKS,
  TT5_SECTION_04_BLOCKS,
  TT5_SECTION_05_BLOCKS,
  TT5_FOOTER_CTA_BLOCKS,
].join('\n\n');

export const GUTENBERG_SECTIONS: GutenbergSection[] = [
  {
    id: 'all',
    number: 'TT5',
    title: 'Página Completa (Twenty Twenty-Five TT5)',
    description: 'Todos los bloques Gutenberg listos para pegar en el Editor de Código de WordPress Twenty Twenty-Five (TT5) con los textos 100% literales.',
    blockCode: FULL_GUTENBERG_TT5_PAGE,
  },
  {
    id: 'header',
    number: '00',
    title: 'Cabecera Superior y Navegación Principal',
    description: 'Barra superior de contacto rápido y navegación principal con botón de llamada.',
    blockCode: TT5_HEADER_BLOCKS,
  },
  {
    id: 'section-01',
    number: '01',
    title: 'Hero, Diagnóstico Rápido y Métricas',
    description: '01 / AISLAMIENTO TÉRMICO Y ACÚSTICO EN MADRID / Sin Obras + Diagnóstico & Presupuesto Rápido + 4 KPIs.',
    blockCode: TT5_SECTION_01_BLOCKS,
  },
  {
    id: 'section-02',
    number: '02',
    title: 'Soluciones de Aislamiento Framo (4 Tarjetas)',
    description: '02 / SOLUCIONES DE AISLAMIENTO FRAMO con cuadrícula 2x2 de soluciones técnicas.',
    blockCode: TT5_SECTION_02_BLOCKS,
  },
  {
    id: 'section-03',
    number: '03',
    title: 'Calculadora de Ahorro Térmico',
    description: '03 / CALCULADORA DE AHORRO TÉRMICO con panel de configuración y tarjeta de Simulación Estimada Framo.',
    blockCode: TT5_SECTION_03_BLOCKS,
  },
  {
    id: 'section-04',
    number: '04',
    title: 'Casos de Éxito en Madrid',
    description: '04 / CASOS DE ÉXITO EN MADRID con comparativa Antes / Después y testimonios literales.',
    blockCode: TT5_SECTION_04_BLOCKS,
  },
  {
    id: 'section-05',
    number: '05',
    title: 'Preguntas Frecuentes (FAQ)',
    description: '05 / PREGUNTAS FRECUENTES con las 4 preguntas literales en acordeón.',
    blockCode: TT5_SECTION_05_BLOCKS,
  },
  {
    id: 'footer',
    number: '06',
    title: 'Banner CTA Final y Pie de Página',
    description: 'Bloque oscuro de Atención Directa con Especialistas y pie de página de 4 columnas.',
    blockCode: TT5_FOOTER_CTA_BLOCKS,
  },
];

export const TT5_THEME_JSON_SNIPPET = `{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "layout": {
      "contentSize": "1200px",
      "wideSize": "1200px"
    },
    "color": {
      "palette": [
        { "slug": "surface", "color": "#fbf9f6", "name": "Surface Warm" },
        { "slug": "surface-container", "color": "#efede9", "name": "Surface Container" },
        { "slug": "pure-white", "color": "#ffffff", "name": "Pure White" },
        { "slug": "on-surface", "color": "#1b1c1a", "name": "On Surface" },
        { "slug": "on-surface-variant", "color": "#43474a", "name": "On Surface Variant" },
        { "slug": "roof-charcoal", "color": "#293133", "name": "Roof Charcoal" },
        { "slug": "energy-red", "color": "#cc292b", "name": "Energy Red" },
        { "slug": "cooling-blue", "color": "#1e73be", "name": "Cooling Blue" }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "'Newsreader', Georgia, serif",
          "name": "Newsreader",
          "slug": "newsreader"
        },
        {
          "fontFamily": "'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif",
          "name": "Source Sans 3",
          "slug": "source-sans-3"
        }
      ]
    }
  }
}`;
