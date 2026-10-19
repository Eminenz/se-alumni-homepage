import { clubInfo } from "./club";

export interface SatzungClauseItem {
  number: string; // e.g. "(1)", "(2)"
  text: string;
  subitems?: { label?: string; text: string }[];
}

export interface SatzungSection {
  id: string;
  paragraph: string;
  title: string;
  shortTitle: string;
  blocks: (
    | { type: "p"; text: string }
    | { type: "clauses"; items: SatzungClauseItem[] }
    | { type: "sublist"; intro: string; items: { label: string; text: string }[] }
  )[];
}

export const satzungMeta = {
  stand: "München, den 29.10.2019",
  pdfUrl: clubInfo.downloads.satzung,
};

export const satzungSections: SatzungSection[] = [
  {
    id: "p1",
    paragraph: "§ 1",
    title: "§ 1 Name und Sitz",
    shortTitle: "Name und Sitz",
    blocks: [
      {
        type: "p",
        text: 'Der Verein führt den Namen Elitestudiengang Software Engineering Alumni. Er soll in das Vereinsregister eingetragen werden und trägt dann den Zusatz "e.V." Der Sitz des Vereins ist München.',
      },
    ],
  },
  {
    id: "p2",
    paragraph: "§ 2",
    title: "§ 2 Geschäftsjahr",
    shortTitle: "Geschäftsjahr",
    blocks: [
      {
        type: "p",
        text: "Das Geschäftsjahr ist das Kalenderjahr.",
      },
    ],
  },
  {
    id: "p3",
    paragraph: "§ 3",
    title: "§ 3 Zweck des Vereins",
    shortTitle: "Zweck des Vereins",
    blocks: [
      {
        type: "p",
        text: 'Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts "Steuerbegünstigte Zwecke" der Abgabenordnung.',
      },
      {
        type: "clauses",
        items: [
          {
            number: "(1)",
            text: "Der Zweck des Vereins ist die Förderung der Berufsbildung einschließlich der Studentenhilfe. Insbesondere verfolgt der Verein den Zweck, die Verbindung zwischen den ehemaligen Studierenden und gegenwärtig Studierenden des Elitestudiengangs Software Engineering aufrechtzuerhalten und zu vertiefen.",
          },
          {
            number: "(2)",
            text: "Diese Zwecke werden insbesondere realisiert durch:",
            subitems: [
              {
                label: "a)",
                text: "die Förderung des regelmäßigen Austauschs zwischen ehemaligen und gegenwärtigen Studierenden des Elitestudiengangs Software Engineering, sowie Studien- und Fachinteressierten. Insbesondere zählen hierzu regelmäßige Meetups, in deren Rahmen ein Vortrag zu einem aktuellen Thema der Informatik gehalten wird.",
              },
              {
                label: "b)",
                text: "die Organisation von Weiterbildungsveranstaltungen für ehemalige und gegenwärtige Studierende des Elitestudiengangs Software Engineering, sowie Studien- und Fachinteressierte. Insbesondere zählt hierzu das jährlich ausgerichtete “Alumni-Seminar”, in dem aktuelle Themen der Informatik in Vorträgen und Workshops vermittelt und diskutiert werden.",
              },
              {
                label: "c)",
                text: "die Unterstützung der Hochschulen/Institutionen bei der Verbesserung der Studienbedingungen für die Studierenden, insbesondere durch die Förderung von Projekten, die von der Studierendenschaft initiiert wurden,",
              },
            ],
          },
        ],
      },
      {
        type: "p",
        text: "Parteipolitische, rassistische und konfessionelle Bestrebungen des Vereins sind ausgeschlossen.",
      },
    ],
  },
  {
    id: "p4",
    paragraph: "§ 4",
    title: "§ 4 Selbstlose Tätigkeit",
    shortTitle: "Selbstlose Tätigkeit",
    blocks: [
      {
        type: "p",
        text: "Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.",
      },
    ],
  },
  {
    id: "p5",
    paragraph: "§ 5",
    title: "§ 5 Mittelverwendung",
    shortTitle: "Mittelverwendung",
    blocks: [
      {
        type: "p",
        text: "Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins. Sie haben bei ihrem Ausscheiden keinerlei Ansprüche an das Vereinsvermögen.",
      },
    ],
  },
  {
    id: "p6",
    paragraph: "§ 6",
    title: "§ 6 Verbot von Begünstigungen",
    shortTitle: "Verbot von Begünstigungen",
    blocks: [
      {
        type: "p",
        text: "Es darf keine Person durch Ausgaben, die dem Zweck der Körperschaft fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.",
      },
    ],
  },
  {
    id: "p7",
    paragraph: "§ 7",
    title: "§ 7 Erwerb der Mitgliedschaft",
    shortTitle: "Erwerb der Mitgliedschaft",
    blocks: [
      {
        type: "clauses",
        items: [
          {
            number: "(1)",
            text: "Die ordentliche Mitgliedschaft können alle ehemaligen und gegenwärtigen Studierenden des Elitestudiengangs Software Engineering erwerben.",
          },
          {
            number: "(2)",
            text: "Fördernde Mitglieder können alle natürlichen oder juristischen Personen oder Personenvereinigungen sein, die sich dem Zweck des Vereins verbunden fühlen.",
          },
          {
            number: "(3)",
            text: "Eine Ehrenmitgliedschaft ist möglich. Sie wird der betreffenden Person nach einer entsprechenden Beschlussfassung des Vorstandes angetragen.",
          },
          {
            number: "(4)",
            text: "Der Aufnahmeantrag ist formlos in Textform zu stellen. Über den Aufnahmeantrag entscheidet der Vorstand. Erworben wird die Mitgliedschaft durch Verkündung oder Übersendung einer formlosen Bestätigung in Textform. Gegen die Ablehnung, die keiner Begründung bedarf, steht dem/der Bewerber/in die Berufung an die Mitgliederversammlung zu, welche dann endgültig entscheidet.",
          },
          {
            number: "(5)",
            text: "Der Vorstand hat die Mitglieder in einer außerordentlichen Erklärung (elektronische Post genügt) über den Eingang einer Berufung (gilt auch für Ausschluss, vgl. § 8) zu unterrichten. In einem solchen Falle, hat die Einberufung einer Mitgliederversammlung, welche satzungsgemäß über die Berufung entscheidet, mindestens innerhalb von 6 Monaten nach Zugang der Beschwerde bei dem Vorstand zu erfolgen. Es gelten die Vorschriften des § 11 der Satzung. Die Entscheidung der Mitgliederversammlung über die Berufung ist zwingend zu protokollieren. Wird die Entscheidung nicht protokolliert, so wird die Stattgabe der Berufung zugunsten des Antragstellers fingiert.",
          },
        ],
      },
    ],
  },
  {
    id: "p8",
    paragraph: "§ 8",
    title: "§ 8 Beendigung der Mitgliedschaft",
    shortTitle: "Beendigung der Mitgliedschaft",
    blocks: [
      {
        type: "clauses",
        items: [
          {
            number: "(1)",
            text: "Die Mitgliedschaft endet:",
            subitems: [
              {
                label: "a)",
                text: "mit dem Tod des Mitglieds bzw. mit der Auflösung der juristischen Person,",
              },
              {
                label: "b)",
                text: "durch Austritt,",
              },
              {
                label: "c)",
                text: "durch Ausschluss aus dem Verein.",
              },
            ],
          },
          {
            number: "(2)",
            text: "Der Austritt erfolgt durch formlose Erklärung in Textform gegenüber einem vertretungsberechtigten Vorstandsmitglied. Der Austritt muss mit einer Frist von drei Monaten jeweils zum Ende des Geschäftsjahres gegenüber dem Vorstand erklärt werden.",
          },
          {
            number: "(3)",
            text: "Ein Ausschluss kann nur aus wichtigem Grund erfolgen. Wichtige Gründe sind insbesondere ein die Vereinsziele schädigendes Verhalten, die Verletzung satzungsmäßiger Pflichten oder Beitragsrückstände von mindestens einem Jahr. Über den Ausschluss entscheidet der Vorstand. Gegen den Ausschluss steht dem ausgeschlossenen Mitglied die Berufung an die Mitgliederversammlung zu, die schriftlich binnen eines Monats an den Vorstand zu richten ist. Die Mitgliederversammlung entscheidet im Rahmen des Vereins endgültig. Dem ausgeschlossenen Mitglied bleibt die Überprüfung der Maßnahme durch Anrufung der ordentlichen Gerichte vorbehalten. Die Anrufung eines ordentlichen Gerichts hat aufschiebende Wirkung bis zur Rechtskraft der gerichtlichen Entscheidung.",
          },
        ],
      },
    ],
  },
  {
    id: "p9",
    paragraph: "§ 9",
    title: "§ 9 Beiträge",
    shortTitle: "Beiträge",
    blocks: [
      {
        type: "clauses",
        items: [
          {
            number: "(1)",
            text: "Für ordentliche Mitglieder werden Geldbeträge als regelmäßige Jahresbeiträge erhoben.",
          },
          {
            number: "(2)",
            text: "Für fördernde Mitglieder werden die Beiträge in Absprache mit dem Vorstand festgelegt.",
          },
          {
            number: "(3)",
            text: "Für Ehrenmitglieder werden keine Beiträge erhoben.",
          },
          {
            number: "(4)",
            text: "Über die Höhe, Fälligkeit, Art und weitere Einzelfälle (Erlass- und Stundungsmöglichkeiten, Ermäßigung für bestimmte Personengruppen) bestimmt die Mitgliederversammlung in einer separaten Beitrags- und Kassenordnung. Die Änderung dieser Ordnung bedarf des Beschlusses der Mitgliederversammlung.",
          },
        ],
      },
    ],
  },
  {
    id: "p10",
    paragraph: "§ 10",
    title: "§ 10 Organe des Vereins",
    shortTitle: "Organe des Vereins",
    blocks: [
      {
        type: "sublist",
        intro: "Organe des Vereins sind",
        items: [
          { label: "a)", text: "Mitgliederversammlung" },
          { label: "b)", text: "Vorstand" },
          { label: "c)", text: "Kassenprüfer/in" },
        ],
      },
      {
        type: "p",
        text: "Die Ausübung der Vereinsämter erfolgt ehrenamtlich.",
      },
    ],
  },
  {
    id: "p11",
    paragraph: "§ 11",
    title: "§ 11 Mitgliederversammlung",
    shortTitle: "Mitgliederversammlung",
    blocks: [
      {
        type: "clauses",
        items: [
          {
            number: "(1)",
            text: "Die Mitgliederversammlung ist das oberste Vereinsorgan. Zu ihren Aufgaben gehören insbesondere die Wahl und Abwahl des Vorstands, Entlastung des Vorstands, Entgegennahme der Berichte des Vorstandes, Wahl des/der Kassenprüfers/in, Festsetzung von Beiträgen und deren Fälligkeit, Erlass der Beitrags- und Kassenordnung (die nicht Bestandteil der Satzung ist), Beschlussfassung über die Änderung der Satzung, Beschlussfassung über die Auflösung des Vereins, Entscheidung über Aufnahme und Ausschluss von Mitgliedern in Berufungsfällen, sowie weitere Aufgaben, soweit sich diese aus der Satzung oder nach dem Gesetz ergeben.",
          },
          {
            number: "(2)",
            text: "Die Mitgliederversammlung tagt so oft es erforderlich ist, mindestens jedoch einmal im Geschäftsjahr.",
          },
          {
            number: "(3)",
            text: "Der Vorstand ist zur Einberufung einer außerordentlichen Mitgliederversammlung verpflichtet, wenn mindestens ein Drittel der stimmberechtigten Mitglieder dies schriftlich unter Angabe von Gründen verlangt.",
          },
          {
            number: "(4)",
            text: "Die Mitgliederversammlung wird vom Vorstand unter Einhaltung einer Frist von zwei Wochen schriftlich (elektronische Post genügt) unter Angabe einer vorläufigen Tagesordnung einberufen. Die Frist beginnt mit dem auf die Absendung des Einladungsschreibens folgenden Tag. Das Einladungsschreiben gilt als den Mitgliedern zugegangen, wenn es an die letzte dem Verein bekannt gegebene Anschrift (E-Mail-Adresse) gerichtet war.",
          },
          {
            number: "(5)",
            text: "Die Tagesordnung ist zu ergänzen, wenn dies ein Mitglied bis spätestens eine Woche vor dem angesetzten Termin schriftlich beantragt. Die Ergänzung ist zu Beginn der Versammlung bekanntzumachen.",
          },
          {
            number: "(6)",
            text: "Anträge über die Abwahl des Vorstands, über die Änderung der Satzung und über die Auflösung des Vereins, die den Mitgliedern nicht bereits mit der Einladung zur Mitgliederversammlung zugegangen sind, können erst auf der nächsten Mitgliederversammlung beschlossen werden.",
          },
          {
            number: "(7)",
            text: "Mitglieder des Vorstands sind zur Teilnahme an jeder Mitgliederversammlung berechtigt, auch wenn sie nicht Vereinsmitglieder sind. Sie können auch Anträge einbringen und zu jedem Tagesordnungspunkt Stellung nehmen.",
          },
          {
            number: "(8)",
            text: "Die Mitgliederversammlung ist beschlussfähig, wenn - auch mittels Stimmübertragung - mindestens 5 Stimmberechtigungen repräsentiert sind.",
          },
          {
            number: "(9)",
            text: "Die Mitgliederversammlung wird in der Regel von einem Vorstandsmitglied geleitet. Zu Beginn der Mitgliederversammlung ist ein/eine Schriftführer/in zu wählen.",
          },
          {
            number: "(10)",
            text: "Jedes ordentliche Mitglied hat eine Stimme. Das Stimmrecht kann nur persönlich oder für ein Mitglied unter Vorlage einer schriftlichen Vollmacht ausgeübt werden.",
          },
          {
            number: "(11)",
            text: "Fördernde und Ehrenmitglieder sind in der Mitgliederversammlung nicht stimm- und wahlberechtigt und können auch nicht für Ämter kandidieren.",
          },
          {
            number: "(12)",
            text: "Bei Abstimmungen und Wahlen entscheidet die einfache Mehrheit der abgegebenen Stimmen.",
          },
          {
            number: "(13)",
            text: "Satzungsänderungen und die Auflösung des Vereins können nur mit einer Mehrheit von 2/3 der anwesenden Mitglieder beschlossen werden.",
          },
          {
            number: "(14)",
            text: "Stimmenthaltungen und ungültige Stimmen bleiben außer Betracht.",
          },
          {
            number: "(15)",
            text: "Über die Beschlüsse der Mitgliederversammlung ist ein Protokoll anzufertigen, das von dem/der Versammlungsleiter/in und dem/der Schriftführer/in zu unterzeichnen ist.",
          },
        ],
      },
    ],
  },
  {
    id: "p12",
    paragraph: "§ 12",
    title: "§ 12 Vorstand",
    shortTitle: "Vorstand",
    blocks: [
      {
        type: "clauses",
        items: [
          {
            number: "(1)",
            text: "Der Vorstand im Sinn des § 26 BGB besteht aus dem/der 1. und 2. Vorsitzenden und dem/der Kassierer/in. Sie vertreten den Verein gerichtlich und außergerichtlich. Zwei Vorstandsmitglieder vertreten gemeinsam.",
          },
          {
            number: "(2)",
            text: "Der Vorstand wird von der Mitgliederversammlung auf die Dauer von zwei Jahren gewählt.",
          },
          {
            number: "(3)",
            text: "Vorstandsmitglieder können nur ordentliche Mitglieder des Vereins werden.",
          },
          {
            number: "(4)",
            text: "Wiederwahl ist zulässig.",
          },
          {
            number: "(5)",
            text: "Der Vorstand bleibt solange im Amt, bis ein neuer Vorstand gewählt ist.",
          },
          {
            number: "(6)",
            text: "Bei Beendigung der Mitgliedschaft im Verein endet auch das Amt als Vorstand.",
          },
          {
            number: "(7)",
            text: "Abweichend von den gesetzlichen Bestimmungen (insbes. §§ 31a, 31b, 40 BGB) haftet der Vorstand oder ein Mitglied des Vorstandes dem Verein und seinen Mitgliedern gegenüber nur im Falle vorsätzlichen Tuns oder Unterlassens. Gleiches gilt für die Haftung des Vereins im Innenverhältnis.",
          },
        ],
      },
    ],
  },
  {
    id: "p13",
    paragraph: "§ 13",
    title: "§ 13 Kassenprüfung",
    shortTitle: "Kassenprüfung",
    blocks: [
      {
        type: "clauses",
        items: [
          {
            number: "(1)",
            text: "Die Mitgliederversammlung wählt für die Dauer von zwei Jahren eine/n Kassenprüfer/in. Diese/r darf nicht Mitglied des Vorstands sein.",
          },
          {
            number: "(2)",
            text: "Wiederwahl ist zulässig.",
          },
        ],
      },
    ],
  },
  {
    id: "p14",
    paragraph: "§ 14",
    title: "§ 14 Auflösung des Vereins",
    shortTitle: "Auflösung des Vereins",
    blocks: [
      {
        type: "clauses",
        items: [
          {
            number: "(1)",
            text: "Bei Auflösung des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des Vereins an die Universität Augsburg, die es unmittelbar und ausschließlich für gemeinnützige Zwecke zu verwenden hat.",
          },
        ],
      },
    ],
  },
  {
    id: "p15",
    paragraph: "§ 15",
    title: "§ 15 Datenschutz",
    shortTitle: "Datenschutz",
    blocks: [
      {
        type: "clauses",
        items: [
          {
            number: "(1)",
            text: "Zur Erfüllung der Zwecke und Aufgaben des Vereins werden unter Beachtung der Vorgaben der EU-Datenschutz-Grundverordnung (DS-GVO) und des Bundesdatenschutzgesetzes (BDSG) personenbezogene Daten über persönliche und sachliche Verhältnisse der Mitglieder im Verein verarbeitet.",
          },
          {
            number: "(2)",
            text: "Soweit die in den jeweiligen Vorschriften beschriebenen Voraussetzungen vorliegen, hat jedes Vereinsmitglied insbesondere die folgenden Rechte:",
            subitems: [
              { text: "das Recht auf Auskunft nach Artikel 15 DS-GVO," },
              { text: "das Recht auf Berichtigung nach Artikel 16 DS-GVO," },
              { text: "das Recht auf Löschung nach Artikel 17 DS-GVO," },
              { text: "das Recht auf Einschränkung der Verarbeitung nach Artikel 18 DS-GVO," },
              { text: "das Recht auf Datenübertragbarkeit nach Artikel 20 DS-GVO und" },
              { text: "das Widerspruchsrecht nach Artikel 21 DS-GVO." },
            ],
          },
          {
            number: "(3)",
            text: "Den Organen des Vereins, allen Mitarbeitern und Mitarbeiterinnen oder sonst für den Verein Tätigen ist es untersagt, personenbezogene Daten unbefugt zu anderen als dem jeweiligen Aufgabenerfüllung gehörenden Zweck zu verarbeiten, bekannt zu geben, Dritten zugänglich zu machen oder sonst zu nutzen. Diese Pflicht besteht auch über das Ausscheiden der oben genannten Personen aus dem Verein hinaus.",
          },
        ],
      },
    ],
  },
];
