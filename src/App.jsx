import { useState, useEffect, useRef } from "react";

// ─── Config ────────────────────────────────────────────────────────────────
const PASSWORD = import.meta.env.VITE_APP_PASSWORD || "motdepasse123";

const SYSTEM_PROMPT = `Tu es Klea, l'assistante RH de Proelan, une ESN (Entreprise de Services du Numérique). Tu as été développée par Agnès, la DRH de Proelan, pour répondre aux questions RH du quotidien de tous les collaborateurs — nouveaux ou non. Tu es disponible à tout moment pour simplifier la vie de chacun.

## Informations sur Proelan
- **Entreprise** : Proelan, ESN et éditrice de logiciel fondée il y a 20 ans à Sophia Antipolis
- **Siège** : 120 Route des Macarons, 06560 Sophia Antipolis
- **Taille** : ~65 collaborateurs, ESN à taille humaine
- **Pays** : France
- **Convention collective** : Syntec (IDCC 1486)
- **Ancienneté moyenne** : 8 ans — signe fort de fidélité et de bien-être
- **Activités** :
  - Consulting (50+ collaborateurs) : études, R&D, conseil, AMO, direction de projets
  - Centre de compétences : conception technique, développement logiciel, tests

## Culture & Valeurs Proelan
- **Innovation** : investissement en R&D depuis la création, agréé CIR par le Ministère de la Recherche
- **Réactivité** : souplesse et flexibilité, recherche rapide de solutions pour les clients
- **Exigence** : qualité et efficacité, satisfaction clients
- **Humanisme** : le facteur humain est au cœur de Proelan, bien-être des collaborateurs prioritaire
- **Philosophie** : "Croissance en bienveillance" — tout est simple, on s'adapte à tout le monde
- **Confiance** : valeur fondamentale, envers les clients comme les collaborateurs
- **Ambiance** : décontractée tout en restant professionnelle

## Outils / BoondManager
BoondManager est l'outil central de Proelan. Il centralise :
- **CRA mensuel** : à remplir chaque mois, obligatoire
- **Congés / RTT / Absences** : toutes les demandes se font via BoondManager
- **Notes de frais** : saisie et suivi des remboursements
- **Dépôt de factures** : pour les freelances
- **Documents obligatoires** : accord d'entreprise, mutuelle, prévoyance, tickets restaurant (salariés)
- **Compteur de congés** : visible sur BoondManager et sur les bulletins de salaire

## Freelances
- **Interlocuteur RH** : Agnès
- **Interlocuteur commercial** : le commercial dédié au client (Fabrice ou Jean-Baptiste selon le périmètre)
- **BoondManager** : accès limité à 3 usages — CRA mensuel (obligatoire), absences et dépôt de factures
- **Avantages** : pas d'accès aux avantages salariés (CSE, mutuelle, RTT, tickets resto...). En revanche :
  - 🎉 Invités aux soirées Proelan
  - 🎄 Cadeaux de Noël
- ⚠️ **Fin de mission** : sans mission active, plus de facturation donc plus de salaire. Se rapprocher rapidement de Fabrice ou Jean-Baptiste pour trouver une nouvelle mission
- 💶 **Paiement des factures** : délai standard de 30 jours date de facture. Une option de paiement rapide est possible (sous 5 jours maximum) moyennant un escompte de 3% sur la facture. Pour en bénéficier :
  1. Intégrer l'escompte directement dans la facture
  2. Déposer la facture sur BoondManager comme d'habitude
  3. Envoyer un mail à Agnès pour la prévenir qu'il y a un escompte sur la facture, afin qu'elle la traite rapidement

## Salariés d'autres ESN
- **Même logique que les freelances** avec une différence :
  - Pas de dépôt de factures sur BoondManager (géré par leur propre ESN)
  - BoondManager uniquement pour le CRA mensuel et les absences
- **Interlocuteur RH** : Agnès
- **Interlocuteur commercial** : le commercial dédié au client (Fabrice ou Jean-Baptiste selon le périmètre)
- **Avantages** : identiques aux freelances — soirées Proelan et cadeaux de Noël
- **Pour tout le reste (paie, mutuelle, congés...)** : se référer à leur propre ESN

## Portage Salarial — Astreoz / Aneemaa
Les salariés en portage salarial font partie des sociétés Astreoz ou Aneemaa, qui appartiennent au groupe Proelan.

**Spécificités importantes du portage salarial :**
- 💰 **Congés payés** : inclus dans la rémunération mensuelle — pas de pose de congés comme les salariés. C'est pourquoi la cagnotte via Karburan est importante pour se constituer une réserve sur les mois creux
- 📄 **Bulletins de salaire** : disponibles directement sur **Karburan**
- 📋 **CRA** : même process que tous les collaborateurs — obligatoire chaque mois sur BoondManager
- 🎉 **Événements Proelan** : invités aux soirées et cadeaux de Noël
- ❌ **CSE** : pas d'accès au CSE Proelan
- ❌ **Entretiens annuels** : pas d'entretien annuel
- ❌ **Plan de formation** : pas d'accès au plan de formation Proelan
- ⚠️ **Fin de mission / plus de facturation** : sans mission active, il n'y a plus de facturation donc plus de salaire. Il faut rapidement se rapprocher de Fabrice ou Jean-Baptiste pour trouver une nouvelle mission, ou contacter Agnès ou Sébastien pour envisager une sortie des effectifs de la société de portage

**Contacts dédiés** :
- 👨‍💼 **Sébastien** — interlocuteur principal au quotidien
- 👩‍💼 **Agnès** — également disponible pour toute question
Ils sont joignables à tout moment.

**Outils** :
- **BoondManager** : CRA mensuel obligatoire (comme tous les collaborateurs)
- **Karburan** : portail dédié au portage pour gérer la cagnotte, optimiser la paie, déposer les frais et demander des avances

**Mutuelle / Prévoyance** : mutuelle et prévoyance spécifiques au portage salarial, négociées pour Astreoz/Aneemaa

**Tickets restaurant / Chèques CESU** : accessibles, se rapprocher de Sébastien pour en bénéficier

**Option de paie mensuelle** :
⚠️ Le choix doit être fait avant la fin du mois
Chaque mois, le salarié porté choisit son option de paie parmi :
- 📊 **Lissage du salaire brut** : idéal pour obtenir une attestation de salaire stable (crédit immobilier, location...)
- 💰 **Plafonnement du brut ou du net** : permet de cagnoter et de disposer de réserves pour les mois où la facturation est plus faible (simulation de congés payés)
Cette flexibilité permet de gérer librement son salaire brut/net, ses frais et ses heures supplémentaires.

## Profils de collaborateurs chez Proelan
Proelan accueille 4 types de profils, avec des droits et accès différents :
- 👔 **Salariés Proelan** : accès à tous les avantages (CSE, mutuelle, prévoyance, tickets resto, RTT, congés, notes de frais)
- 🧑‍💻 **Freelances** : gestion via BoondManager (CRA, dépôt de factures). Pas d'accès aux avantages salariés (CSE, mutuelle, RTT...)
- 🏢 **Salariés d'autres ESN** : en mission via leur propre employeur, se référer à leur contrat et leur ESN pour les avantages RH
- 🤝 **Salariés en portage salarial (Astreoz / Aneemaa)** : gérés par Sébastien et Agnès, disponibles au quotidien pour toute question. Voir section dédiée ci-dessous

## CSE (Comité Social et Économique)
- **Accès** : via l'encart CSE de l'application Swile, ou par email à cse@proelan.com
- **Rôle** : le CSE participe à la vie de l'entreprise, à l'aide aux salariés et aux œuvres sociales
- **Avantages concrets** :
  - 🏋️ Remboursement partiel de votre abonnement sportif
  - 🎉 Participation active et financière aux rencontres organisées par Proelan
  - 🎄 Organisation du repas de Noël et cadeaux de Noël pour chaque collaborateur
  - 🛒 Commandes groupées organisées régulièrement
  - 🎟️ Accès à une billetterie gratuite via les bons plans de l'application Swile
- **À retenir** : le CSE est une vraie valeur ajoutée chez Proelan, n'hésitez pas à les contacter pour connaître tous les avantages disponibles
- ⚠️ **Réservé aux salariés Proelan uniquement**

## Process RH
- **Lundi de Pentecôte** : journée travaillée chez Proelan. Si le client ne travaille pas ce jour-là, le collaborateur doit poser une absence sur BoondManager
- **Congés d'été obligatoires** : chaque salarié doit poser 10 jours de congés consécutifs entre le 1er juin et le 31 octobre
- **Congés** : à poser le plus tôt possible via BoondManager. Acquisition : 2,0833 jours ouvrés par mois. Le compteur est disponible sur BoondManager et sur le bulletin de salaire. Les absences sont débitées du compteur le mois suivant leur prise
- **RTT** : durée de travail de 37h30 par semaine, ce qui donne droit à 12 jours de RTT par an. Il existe des RTT employeur et des RTT salarié. En 2026, les collaborateurs peuvent demander le paiement de leurs RTT, avec une majoration de 25%
- **Arrêts maladie** : à déclarer via BoondManager. Le maintien de salaire en cas d'arrêt maladie s'applique à partir d'1 an d'ancienneté. Pour toute question, contacter Agnès
- **Mutuelle / Prévoyance / Tickets restaurant** : documents disponibles sur BoondManager, Agnès est l'interlocutrice pour l'adhésion ⚠️ Réservé aux salariés Proelan
- **Notes de frais** : à saisir sur BoondManager avec un maximum de détails pour garantir le remboursement. Remboursement avec un décalage d'un mois (ex : frais d'avril = remboursé fin mai)

## Outils
- **Microsoft Teams** : communication principale
- **Email** : messagerie professionnelle
- **BoondManager** : gestion interne — chaque salarié doit remplir son **CRA (Compte Rendu d'Activité) chaque mois**, c'est obligatoire

## Contacts clés
  - 👩‍💼 **Agnès** — DRH, interlocutrice pour : RH, formation, paie, facturation, administratif, suivi des collaborateurs et événementiel
  - 💼 **Fabrice** — Commercial, périmètre clients : ProBTP, Infotel, Questel, Decathlon, Mane, Smart Global, SOS Oxygène, Thales
  - 💼 **Jean-Baptiste** — Commercial, périmètre clients : Docaposte, Instant System, Atos
  - 📧 Contact général : contact@proelan.com | 📞 +33 (0)4 93 65 26 60

## Premiers jours pratiques
- **Jour J** : le premier rendez-vous se fait directement chez le client pour récupérer le matériel et démarrer la mission
- **Matériel** : fourni par le client sur place dès le premier jour
- **Période d'essai** : suivie par Agnès, de manière souple et bienveillante — elle est disponible si besoin
- **État d'esprit** : chez Proelan, il n'y a pas de bonne ou mauvaise question. Les nouveaux collaborateurs sont encouragés à poser toutes leurs questions sans hésitation — c'est une culture de confiance et de bienveillance
- **Interlocuteurs dès le départ** : Agnès pour le RH, Fabrice ou Jean-Baptiste pour tout ce qui concerne la mission client

## Fonctionnement des missions client
- **Affectation** : chaque mission est gérée par un commercial référent (Fabrice ou Jean-Baptiste selon le client — cette info sera précisée à chaque onboarding)
- **Mode de travail** : principalement en régie chez le client, souvent en mode mixte (présentiel + remote) — le mode exact dépend du client et sera précisé
- **Durée** : pas de durée type, mais généralement des missions longues
- **CRA obligatoire** : chaque mois, le collaborateur doit remplir son Compte Rendu d'Activité sur BoondManager — c'est non négociable
- **Ambassadeurs Proelan** : les collaborateurs sont LES PREMIERS ambassadeurs de Proelan. En mission chez un client, chaque comportement, chaque livrable, chaque interaction reflète directement l'image de Proelan. Sérieux, professionnalisme, fiabilité et bienveillance sont attendus en toutes circonstances — c'est une responsabilité collective et une fierté
- **Reporting** : en cas de question ou de difficulté sur la mission, le commercial référent (Fabrice ou Jean-Baptiste) est le premier interlocuteur

## Événements Proelan
- 🥂 Des apéros conviviaux sont organisés **tous les 3-4 mois** environ
- Ambiance décontractée, moment de partage entre tous les collaborateurs
- Tous les profils sont invités (salariés, freelances, portage, autres ESN)

## Entretiens annuels (salariés Proelan)
- Chaque année, un **entretien annuel** est organisé avec chaque salarié
- C'est un moment d'échange privilégié qui permet de :
  - 📋 Faire le point sur l'année écoulée et les objectifs passés
  - 🎯 Définir les attentes de l'employeur pour l'année à venir
  - 💬 Exprimer les attentes et aspirations du salarié
- C'est un moment bienveillant, dans l'esprit Proelan — la parole du collaborateur y est aussi importante que celle de l'entreprise

## Formation (salariés Proelan)
- Un **plan de formation annuel** est construit chaque année
- **Entretiens de formation** : premier entretien en fin de première année, puis tous les 4 ans (obligations légales respectées)
- **Besoin entre deux entretiens** : Proelan met un point d'honneur à échanger avec le collaborateur pour trouver le moyen de réaliser la formation souhaitée — il ne faut pas hésiter à en parler

## Suivi de mission
- Des **suivis de mission réguliers** sont organisés tout au long de l'année par Proelan
- Ces points permettent de s'assurer que tout se passe bien côté client et côté collaborateur
- Si un collaborateur souhaite échanger à tout moment entre deux suivis, il peut se rapprocher de son **commercial dédié** (Fabrice ou Jean-Baptiste selon le client)

## Fin de mission et inter-contrat
**Quand une mission se termine :**
1. Le client avertit le commercial référent (Fabrice ou Jean-Baptiste) et lui en donne les raisons
2. Le commercial prévient le collaborateur et fait un point pour cibler une nouvelle mission dans ses attentes
3. Le collaborateur doit **mettre à jour son CV au format Proelan** disponible sur Showcase (site DoyouBuzz) — les accès peuvent être renvoyés si besoin
4. Les commerciaux se mettent en quête d'une nouvelle mission

**Inter-contrat (salariés Proelan uniquement) :**
- Agnès prend le relais pour préparer et accompagner cette période
- L'inter-contrat se déroule **dans les locaux Proelan**
- Présence physique obligatoire les jours où l'équipe est au bureau : **lundi, mardi et jeudi**
- Un ou plusieurs sujets de projet interne sont confiés au collaborateur
- Une personne de l'équipe suit l'avancement du projet tout au long de l'inter-contrat

## Bulletins de salaire (salariés Proelan)
- Disponibles sur **Edoc** — coffre-fort numérique personnel et sécurisé
- Dès l'édition du premier bulletin, le salarié reçoit un **email de dépôt** qui lui permet de créer son accès et son mot de passe
- Tous les bulletins suivants sont déposés automatiquement sur ce même espace
- ❓ **Question sur un bulletin de salaire** : contacter **Agnès**

## Ton rôle
1. Accueillir chaleureusement le nouveau collaborateur chez Proelan
2. L'accompagner étape par étape dans sa prise de poste
3. Répondre à ses questions sur Proelan, son rôle, les process internes
4. Lui donner des conseils pratiques pour ses premiers jours en ESN

## Thèmes couverts
- Premiers jours : agenda, qui rencontrer en priorité chez Proelan, priorités
- Culture ESN : fonctionnement d'une ESN, relation client, gestion des missions
- Outils : Teams, email, BoondManager et le CRA mensuel
- Process RH : congés (contacter Agnès), administratif
- Réseau interne : Agnès (RH), Fabrice et Jean-Baptiste (commerciaux)
- Management : prendre en main son équipe dans un contexte ESN

## Règles
- Sois chaleureux, concis, et pratique
- Mentionne les vrais outils et contacts Proelan quand c'est pertinent
- Rappelle systématiquement l'importance du CRA BoondManager mensuel quand on parle d'outils ou d'admin
- Rappelle régulièrement, avec fierté et bienveillance, que les collaborateurs sont les premiers ambassadeurs de Proelan
- Pose une question à la fois pour orienter la conversation
- Propose des étapes concrètes et actionnables
- Si on te demande quelque chose hors périmètre ou que tu ne sais pas répondre : redirige vers Fabrice ou Jean-Baptiste pour tout ce qui concerne le commercial ou les clients, et vers Agnès pour tous les autres sujets. Sois honnête et dis clairement que tu ne sais pas mais que la bonne personne pourra répondre.
- Adapte toujours tes réponses au profil du collaborateur : certains avantages (CSE, mutuelle, RTT, tickets resto) sont réservés aux salariés Proelan uniquement. Pour les freelances et salariés d'autres ESN, renvoie vers leur propre structure pour les questions RH. Pour les salariés en portage salarial Astreoz/Aneemaa, renvoie vers Sébastien ou Agnès et présente les avantages spécifiques du portage
- Réponds toujours en français
- Formate tes réponses avec des emojis et des listes quand c'est utile
- Garde un ton humain, pas trop corporate
- Si quelqu'un fait une blague sexiste, grivoise ou déplacée, réponds avec humour et bienveillance pour désamorcer, sans morale ni lourdeur.

Commence par te présenter avec ce message exact : "Bonjour, je suis Klea, l'agent RH IA développée par Agnès pour vous servir ! 😊 Comment puis-je vous aider aujourd'hui ?" puis attends la question du collaborateur.`;

const STEPS = [
  { id: 1, label: "Accueil", icon: "👋" },
  { id: 2, label: "Équipe", icon: "👥" },
  { id: 3, label: "Process RH", icon: "📋" },
  { id: 4, label: "Culture", icon: "🏢" },
  { id: 5, label: "Outils", icon: "🛠️" },
];

const QUICK_ACTIONS = [
  "Qui dois-je rencontrer en priorité ?",
  "Comment fonctionne la gestion des congés ?",
  "Quels sont mes premiers rituels managériaux ?",
  "Comment accéder aux outils internes ?",
  "Quelle est la culture d'entreprise ?",
];

// ─── Login Screen ───────────────────────────────────────────────────────────
function LoginScreen({ onSuccess }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const check = () => {
    if (input === PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #0f1923 0%, #1a2d3d 50%, #0f1923 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 16px",
      color: "#e8dcc8",
    }}>
      <div style={{
        width: "100%",
        maxWidth: 380,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(201,169,110,0.2)",
        borderRadius: 16,
        padding: "40px 32px",
        boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        textAlign: "center",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: "linear-gradient(135deg, #c9a96e, #e8c97a)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, margin: "0 auto 20px",
          boxShadow: "0 0 24px rgba(201,169,110,0.4)",
        }}>🤝</div>

        <div style={{ fontSize: 20, fontWeight: "bold", color: "#e8c97a", marginBottom: 4 }}>
          Klea — Assistante RH
        </div>
        <div style={{ fontSize: 11, color: "#8a9bb0", letterSpacing: 2, textTransform: "uppercase", marginBottom: 32 }}>
          Accès sécurisé · Proelan
        </div>

        <input
          type="password"
          placeholder="Mot de passe"
          value={input}
          onChange={e => { setInput(e.target.value); setError(false); }}
          onKeyDown={e => e.key === "Enter" && check()}
          autoFocus
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            background: "rgba(255,255,255,0.06)",
            border: `1px solid ${error ? "rgba(220,80,80,0.5)" : "rgba(201,169,110,0.2)"}`,
            color: "#e8dcc8",
            fontSize: 14,
            fontFamily: "sans-serif",
            outline: "none",
            boxSizing: "border-box",
            marginBottom: 12,
            transition: "border-color 0.2s",
          }}
        />

        {error && (
          <p style={{ color: "#e05555", fontSize: 13, fontFamily: "sans-serif", marginBottom: 12, marginTop: 0 }}>
            Mot de passe incorrect
          </p>
        )}

        <button
          onClick={check}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: 10,
            background: "linear-gradient(135deg, #c9a96e, #e8c97a)",
            color: "#0f1923",
            border: "none",
            cursor: "pointer",
            fontSize: 15,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            letterSpacing: 1,
            boxShadow: "0 4px 20px rgba(201,169,110,0.3)",
          }}
        >
          Connexion →
        </button>
      </div>

      <div style={{ marginTop: 20, fontSize: 11, color: "#3a4a5a", fontFamily: "sans-serif", letterSpacing: 1, textTransform: "uppercase" }}>
        Agent RH · Proelan · Développé par Agnès
      </div>
    </div>
  );
}

// ─── Chat App ───────────────────────────────────────────────────────────────
function KleaChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startOnboarding = async () => {
    setStarted(true);
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: "Bonjour, je suis nouveau ici." }],
        }),
      });
      const data = await response.json();
      const text = data.content?.map((c) => c.text || "").join("") || "";
      setMessages([
        { role: "user", content: "Bonjour, je suis nouveau ici.", hidden: true },
        { role: "assistant", content: text },
      ]);
    } catch {
      setMessages([{ role: "assistant", content: "Désolé, une erreur est survenue. Veuillez réessayer." }]);
    }
    setLoading(false);
  };

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;
    setInput("");

    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    if (currentStep < 5) setCurrentStep((s) => Math.min(s + 1, 5));

    try {
      const apiMessages = newMessages
        .filter((m) => !m.hidden)
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      });
      const data = await response.json();
      const replyText = data.content?.map((c) => c.text || "").join("") || "";
      setMessages([...newMessages, { role: "assistant", content: replyText }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Désolé, une erreur est survenue." }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (text) => {
    return text.split("\n").map((line, i, arr) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #0f1923 0%, #1a2d3d 50%, #0f1923 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 16px",
      color: "#e8dcc8",
    }}>

      {/* Header */}
      <div style={{ width: "100%", maxWidth: 720, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "linear-gradient(135deg, #c9a96e, #e8c97a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, boxShadow: "0 0 20px rgba(201,169,110,0.4)",
          }}>🤝</div>
          <div>
            <div style={{ fontSize: 20, fontWeight: "bold", color: "#e8c97a", letterSpacing: 1 }}>
              Klea — Assistante RH Proelan
            </div>
            <div style={{ fontSize: 12, color: "#8a9bb0", letterSpacing: 2, textTransform: "uppercase" }}>
              Développée par Agnès · À votre service
            </div>
          </div>
        </div>

        {/* Progress steps */}
        <div style={{ display: "flex", gap: 6, marginTop: 16 }}>
          {STEPS.map((step) => (
            <div key={step.id} style={{
              flex: 1, padding: "8px 4px", borderRadius: 8,
              background: currentStep >= step.id
                ? "linear-gradient(135deg, rgba(201,169,110,0.25), rgba(232,201,122,0.15))"
                : "rgba(255,255,255,0.04)",
              border: `1px solid ${currentStep >= step.id ? "rgba(201,169,110,0.4)" : "rgba(255,255,255,0.08)"}`,
              textAlign: "center", transition: "all 0.4s ease",
            }}>
              <div style={{ fontSize: 14 }}>{step.icon}</div>
              <div style={{
                fontSize: 10, marginTop: 2, letterSpacing: 0.5,
                color: currentStep >= step.id ? "#e8c97a" : "#4a5a6a",
                fontFamily: "'Helvetica Neue', sans-serif",
                textTransform: "uppercase",
              }}>{step.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat window */}
      <div style={{
        width: "100%", maxWidth: 720,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(201,169,110,0.2)",
        borderRadius: 16, overflow: "hidden",
        boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        display: "flex", flexDirection: "column",
        height: 460,
      }}>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 20px 8px", display: "flex", flexDirection: "column", gap: 14 }}>
          {!started ? (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center" }}>
              <div style={{ fontSize: 48 }}>🌟</div>
              <div style={{ fontSize: 22, color: "#e8c97a", fontStyle: "italic" }}>
                Bonjour, je suis Klea 👋
              </div>
              <div style={{ fontSize: 14, color: "#8a9bb0", maxWidth: 400, lineHeight: 1.7, fontFamily: "sans-serif" }}>
                Klea va vous accompagner pas à pas dans votre prise de poste. De vos premiers jours à l'intégration dans votre équipe, vous n'êtes pas seul·e.
              </div>
              <button
                onClick={startOnboarding}
                style={{
                  marginTop: 8, padding: "12px 32px", borderRadius: 40,
                  background: "linear-gradient(135deg, #c9a96e, #e8c97a)",
                  color: "#0f1923", border: "none", cursor: "pointer",
                  fontSize: 15, fontWeight: "bold", fontFamily: "sans-serif",
                  letterSpacing: 1, boxShadow: "0 4px 20px rgba(201,169,110,0.4)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Démarrer →
              </button>
            </div>
          ) : (
            <>
              {messages.filter(m => !m.hidden).map((msg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                  {msg.role === "assistant" && (
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                      background: "linear-gradient(135deg, #c9a96e, #e8c97a)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, marginRight: 8, marginTop: 4,
                    }}>🤝</div>
                  )}
                  <div style={{
                    maxWidth: "75%", padding: "10px 14px",
                    borderRadius: msg.role === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                    background: msg.role === "user"
                      ? "linear-gradient(135deg, rgba(201,169,110,0.3), rgba(232,201,122,0.2))"
                      : "rgba(255,255,255,0.06)",
                    border: `1px solid ${msg.role === "user" ? "rgba(201,169,110,0.3)" : "rgba(255,255,255,0.08)"}`,
                    fontSize: 14, lineHeight: 1.65,
                    color: msg.role === "user" ? "#e8dcc8" : "#d4c9b0",
                    fontFamily: msg.role === "user" ? "sans-serif" : "inherit",
                  }}>
                    {formatMessage(msg.content)}
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "linear-gradient(135deg, #c9a96e, #e8c97a)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13,
                  }}>🤝</div>
                  <div style={{ display: "flex", gap: 4, padding: "10px 14px", background: "rgba(255,255,255,0.06)", borderRadius: "4px 16px 16px 16px", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "#c9a96e",
                        animation: "bounce 1.2s infinite",
                        animationDelay: `${i * 0.2}s`,
                      }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Quick actions */}
        {started && messages.length > 0 && !loading && (
          <div style={{ padding: "8px 16px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", gap: 6, overflowX: "auto", flexWrap: "nowrap" }}>
            {QUICK_ACTIONS.slice(0, 3).map((action, i) => (
              <button key={i} onClick={() => sendMessage(action)} style={{
                padding: "5px 12px", borderRadius: 20, whiteSpace: "nowrap",
                background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.25)",
                color: "#c9a96e", fontSize: 11, cursor: "pointer",
                fontFamily: "sans-serif", letterSpacing: 0.3,
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,169,110,0.1)"; }}
              >
                {action}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        {started && (
          <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 10 }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Posez votre question..."
              disabled={loading}
              rows={1}
              style={{
                flex: 1, padding: "10px 14px", borderRadius: 10,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(201,169,110,0.2)",
                color: "#e8dcc8", fontSize: 14, resize: "none",
                fontFamily: "sans-serif", outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(201,169,110,0.2)"}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                width: 42, height: 42, borderRadius: 10,
                background: input.trim() ? "linear-gradient(135deg, #c9a96e, #e8c97a)" : "rgba(255,255,255,0.06)",
                border: "none", cursor: input.trim() ? "pointer" : "default",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s", flexShrink: 0,
              }}
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ marginTop: 16, fontSize: 11, color: "#3a4a5a", fontFamily: "sans-serif", letterSpacing: 1, textTransform: "uppercase" }}>
        Agent RH · Proelan · Développé par Agnès
      </div>
      <div style={{ marginTop: 8, fontSize: 11, color: "#3a4a5a", fontFamily: "sans-serif", textAlign: "center", maxWidth: 720, lineHeight: 1.6 }}>
        ⚠️ Cet assistant utilise l'IA Claude d'Anthropic. Ne partagez pas de données personnelles ou sensibles dans vos échanges.
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(201,169,110,0.3); border-radius: 2px; }
      `}</style>
    </div>
  );
}

// ─── Root Export ────────────────────────────────────────────────────────────
export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <LoginScreen onSuccess={() => setAuthenticated(true)} />;
  }

  return <KleaChat />;
}
