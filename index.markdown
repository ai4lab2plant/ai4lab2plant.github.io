---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
lang: de
permalink: /
title: AI4Lab2Plant
description: Website des Forschungsprojekts AI4Lab2Plant
---

<section class="background-light pad" id="info">
    <div class="container text-justify">
        <h1>Projektinformationen</h1>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <p class="text-justify">
                    AI4Lab2Plant ist ein kooperatives F&E-Projekt der FH OÖ Forschungs- und Entwicklungs GmbH, K1-MET GmbH und voestalpine Stahl GmbH, gefördert durch die Initiative AI Region Upper Austria des Landes Oberösterreich im Rahmen der Wirtschafts- und Forschungsstrategie #upperVISION2030.
                </p>
                <p class="text-justify">
                Das kooperative F&E-Projekt AI4Lab2Plant der FH OÖ F&E GmbH Forschungsgruppe HEAL (FHOOE-HEAL), K1-MET GmbH (K1-MET) und voestalpine Stahl GmbH (VAS) zielt darauf ab, die Praxistauglichkeit von Machine Learning -Algorithmen und -Modellen zu verbessern. Mit der Entwicklung neuartiger Algorithmen und unter Einbindung von Domänenwissen, sollen Vorhersagemodelle erzeugt werden, die nicht nur unter Laborbedingungen, sondern z.B. auch im Kontext einer großtechnischen Produktionsanlage funktionieren. Dies soll zur Effizienzsteigerung, Qualitätsverbesserung und Ressourcenschonung im industriellen Umfeld beitragen. Wichtige Aspekte beim Einsatz von Machine Learning (-Modellen) sind hierbei:
                <ul>
                <li>Vertrauenswürdigkeit und Interpretierbarkeit: Modelle, die von Domänenexperten verstanden und interpretiert werden können, genießen mehr Vertrauen als sogenannte Black-Box Modelle.</li>
                <li>Wissensintegrationsfähigkeit: Insbesondere bei schwieriger Datenlage, sind Modelle, die bestehendes Domänenwissen integrieren können, im Vorteil.</li>
                <li>Übertragbarkeit: Eine weitere Herausforderung ist der Transfer von Modellen von der Trainingsumgebung auf die (industrielle) Einsatzumgebung.</li>
                </ul>
                </p>
                <p class="text-justify">
                Aktuelle Machine Learning Methoden können bislang nur einzelne Aspekte adressieren, aber nicht alle zusammenhängend betrachten. Der daraus entstehende Forschungsbedarf zeigt sich besonders deutlich im Anwendungsfall der voestalpine Stahl GmbH (VAS): Neben begleitenden Funktionstests auf synthetischen Daten fokussiert sich das Projekt im Rahmen einer Machbarkeitsstudie auf den Beschichtungsprozess von Stranggussformen in der Stahlindustrie. Ziel ist es, anhand aufgezeichneter Daten spezifische Beschichtungseigenschaften zu modellieren, um diese zukünftig in Echtzeit vorhersagen und gegebenenfalls optimieren zu können. Ein zentraler Aspekt des Vorhabens ist die Einbindung von Domänenwissen in den Modellierungsprozess durch den Einsatz symbolischer Regression, um eine hohe Interpretierbarkeit der Ergebnisse zu gewährleisten.
                </p>
                <p class="text-justify">
                Eine besondere Herausforderung stellt die Tatsache dar, dass manche Eigenschaften nur unter Laborbedingungen erfasst werden können und ihr Verhalten in großtechnischen Anlagen unbekannt bleibt. Daher sollen die Modelle mit Transfer Learning Methoden kombiniert werden, um die Übertragbarkeit der auf Labordaten basierenden und durch Domänenwissen erweiterten Vorhersagemodelle auf industrielle Maßstäbe zu ermöglichen. Eine erfolgreiche Umsetzung dieses Vorhabens würde den Prozess der Beschichtung verbessern, und dadurch die Beschichtungsqualität erhöhen, den Schutz der Stranggussanlage verbessern und somit im Endeffekt ressourcenschonend wirken. Zudem verringert der verbesserte Beschichtungsprozess die Ausfallswahrscheinlichkeit von industriellen Komponenten und führt zu einer allgemeinen Effizienzsteigerung.
                </p>
                <p class="text-justify">
                Die geplante Kombination aus interpretierbaren, wissensintegrierenden und übertragbaren Machine Learning Methoden und -Modellen ist neuartig und bietet das Potenzial, ähnliche Probleme in anderen industriellen Bereichen zu lösen, in denen Daten knapp, aber Domänenwissen ausreichend vorhanden ist. Die entwickelten Methoden dieses Projekts sollen als Open Source Software veröffentlicht werden, um einen niederschwelligen Zugang für zukünftige Anwender und andere naturwissenschaftlich-technisch motivierte Anwendungsfälle zu gewährleisten.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="background-dark pad" id="blog">
    <div class="container">
        <h1>Von unserem Blog...</h1>
        {% if site.posts.size > 0 %}
        <div class="row">
            <div class="col-lg-12 col-md-12">
                {% for post in site.posts limit:1 %}
                    {% include post_preview.html preview_size_small=true %}
                {% endfor %}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-right">
                <a href="/blog" id="btn-blog" class="btn btn-xl btn-slim-primary blog-button">Mehr Posts</a>
            </div>
        </div>
        {% else %}
        <div class="row"><div class="col-lg-12"><h4>Sorry, there are currently no posts available.</h4></div></div>
        {% endif %}
    </div>
</section>

<section class="background-light pad" id="team">
    <div class="container text-justify">
        <h1>Team</h1>

        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <p>Die Entwicklung innovativer Methoden und Konzepte im Forschungsfeld Transfer Learning und dem Anwendungsgebiet Beschichtungsprozesstechnik verlangt nach der Synthese von Forschungsdisziplinen. Ein Schlüssel zum Erfolg dieses Forschungsprojekts liegt daher in der Zusammenarbeit eines interdispziplinären Teams, das verschiedene Kompetenzen einbringt und zusammenführt. Am Projekt AI4Lab2Plant sind Forscher*innen der Organisationen <i>FH OÖ F&E GmbH Forschungsgruppe HEAL, K1-MET GmbH</i> und <i>voestalpine Stahl GmbH</i> beteiligt.</p>
            </div>
        </div>

        <div class="row image-row">
            <div class="col-lg-3 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.i18n.t.links.fhooe[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-fhlogo" src="/{{ site.data.assets.image-fhlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-3 col-md-12 text-center topic-box">            
                <a target="_blank" href="{{ site.data.i18n.t.links.heal[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-heallogo" src="/{{ site.data.assets.image-heallogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-3 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.i18n.t.links.k1met[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-k1metlogo" src="/{{ site.data.assets.image-k1metlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-3 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.i18n.t.links.vas[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-vaslogo" src="/{{ site.data.assets.image-vaslogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
        </div>

        <div class="row contact-info">
            <div class="col-lg-6 col-md-12">
                <h4>Jan Zenisek</h4>
                <table class="contact-table">
                    <tr><td>Funktion:</td><td>Projektleitung</td></tr>
                    <tr><td>Tel.:</td><td>+43 50804 27114</td></tr>                  
                    <tr><td>Mail:</td><td><a href="mailto:jan.zenisek@fh-ooe.at">jan.zenisek@fh-ooe.at</a></td></tr>
                </table>
            </div>
            <div class="col-lg-6 col-md-12">
                <h4>Michaela Beneder</h4>
                <table class="contact-table">
                    <tr><td>Funktion:</td><td>Koordination</td></tr>
                    <tr><td>Tel.:</td><td>+43 50804 27160</td></tr>                    
                    <tr><td>Mail:</td><td><a href="mailto:michaela.beneder@fh-ooe.at">michaela.beneder@fh-ooe.at</a></td></tr>
                </table>
            </div>
        </div>
    </div>
</section>


{% include map.html %}

[ffg]: https://www.ffg.at/AI-Region-UpperAustria
[uv]: https://www.uppervision.at/
