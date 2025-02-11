---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
lang: de
permalink: /
title: AI4Lab2Plant
description: Website des Forschungsprojekts AI4Lab2Plant
---

<section class="background-light pad" id="welcome">
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

<section class="background-dark pad" id="news">
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

{% include map.html %}

[ffg]: https://www.ffg.at/AI-Region-UpperAustria
[uv]: https://www.uppervision.at/
