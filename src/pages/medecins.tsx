import React from "react";

import HeadTag from "../components/HeadTag";

const Page = () => {
  return (
    <>
      <HeadTag
        title="Je suis médecin, je souhaite orienter au mieux mes patients"
        description=" MonPsy permet aux médecins d’orienter les patients présentant des troubles psychiques d’intensité légère à modérée vers des psychologues conventionnés avec l’Assurance Maladie."
        image="doctor.svg"
      />
      <section>
        <div className="fr-container fr-my-6w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center fr-grid-row--middle">
            <div className="fr-col-7">
              <h1>Je suis médecin</h1>
              <p>Je souhaite orienter au mieux mes patients</p>
              <p className="fr-text--lead fr-mt-10w">
                Le dispositif MonPsy sera accessible à partir d’
                <strong>avril&nbsp;2022</strong>.
              </p>
            </div>
            <div className="fr-col-5">
              <img
                src="/images/doctor.svg"
                alt="Je suis médecin illustration"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fr-container fr-my-6w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12">
              <h2>Quels sont les patients concernés&nbsp;?</h2>
            </div>
          </div>

          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-3 fr-centered">
              <img
                src="/images/children-psy.svg"
                height="160"
                alt="Enfants illustration"
              />
            </div>
            <div className="fr-col-9">
              <p>
                <strong>Les enfants dès 3 ans et des adolescents</strong>{" "}
                présentant une situation de mal-être ou souffrance psychique
                d’intensité légère à modérée, qui a pu susciter l’inquiétude de
                l’entourage (famille, milieu scolaire, médecin, etc).
              </p>
            </div>
          </div>
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-my-4w">
            <div className="fr-col-8">
              <p>
                <strong>Et les adultes</strong> en souffrance psychique
                d’intensité légère à modérée présentant&nbsp;:
              </p>
              <ul>
                <li>Soit un trouble anxieux</li>
                <li>Soit un trouble dépressif</li>
                <li>
                  Soit un mésusage lié à l’usage de tabac, d’alcool ou de
                  cannabis (hors dépendance)
                </li>
                <li>
                  Soit un trouble du comportement alimentaire (sans critères de
                  gravité).
                </li>
              </ul>
            </div>
            <div className="fr-col-2">
              <img
                src="/images/patient-woman.svg"
                height="300"
                alt="Patient femme illustration"
              />
            </div>
            <div className="fr-col-2">
              <img
                src="/images/patient-man.svg"
                height="300"
                alt="Patient homme illustration"
              />
            </div>
          </div>
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12">
              <p>
                <strong>
                  Les patients en situation d’urgence, présentant un risque
                  suicidaire ou avec des critères de gravité
                </strong>{" "}
                (signes de décompensation psychiatrique aigus, par exemple){" "}
                <strong>
                  doivent être orientés sans délai vers le psychiatre ou des
                  structures spécialisées.
                </strong>
              </p>

              <p>
                Pour plus de précisions, référez vous au guide à destination des
                médecins (à venir)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fr-container--fluid fr-bg--light fr-py-4w">
          <div className="fr-container">
            <h2>Comment j’accompagne mon patient dans son parcours&nbsp;?</h2>
          </div>
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
            <div className="fr-col-12 fr-col-md-3">
              <div className="fr-card fr-centered fr-card--no-arrow">
                <div className="fr-card__body">
                  <strong className="fr-display-xs">1</strong>
                  <h3 className="fr-card__title fr-mb-4w">
                    Je reçois le patient et j’évalue son état de santé
                  </h3>
                  <div className="fr-card__desc">
                    <p>
                      Je suis médecin traitant (généraliste, pédiatre,
                      gériatre….), scolaire, de PMI, des services de santé des
                      universités ou encore d’un médecin hospitalier.
                    </p>

                    <p>
                      Si le patient présente des troubles psychiques d’intensité
                      légère à modérée, je lui propose un accompagnement par un
                      psychologue partenaire.
                    </p>

                    <p>
                      Le cas échéant, je m’assure du consentement des titulaires
                      de l’autorité parentale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fr-col-12 fr-col-md-3">
              <div className="fr-card fr-centered fr-card--no-arrow">
                <div className="fr-card__body">
                  <strong className="fr-display-xs">2</strong>
                  <h3 className="fr-card__title fr-mb-4w">
                    J’oriente mon patient vers le dispositif MonPsy{" "}
                  </h3>
                  <div className="fr-card__desc">
                    <p>Je remets à mon patient: </p>

                    <p>
                      un courrier d’adressage nécessaire au remboursement de 8
                      séances maximum. Le nombre de séances est déterminé par le
                      psychologue.
                    </p>
                    <p>
                      un courrier d’accompagnement avec le contexte, les
                      éléments cliniques et le motif de l’adressage à
                      destination du psychologue partenaire du dispositif
                    </p>

                    <p>
                      Un modèle de ces deux courriers accessible{" "}
                      <a
                        className="fr-link fr-fi-download-line fr-link--icon-left"
                        target="_blank"
                        href="/documents/Courrier_d_adressage.docx"
                      >
                        ici
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fr-col-12 fr-col-md-3">
              <div className="fr-card fr-centered fr-card--no-arrow">
                <div className="fr-card__body">
                  <strong className="fr-display-xs">3</strong>
                  <h3 className="fr-card__title fr-mb-4w">
                    J’échange avec le psychologue{" "}
                  </h3>
                  <div className="fr-card__desc">
                    <p>
                      A la fin de l’accompagnement, le psychologue m’adresse, un
                      compte-rendu de fin de prise en charge.
                    </p>
                    <p>
                      <strong>En cas de non amélioration des symptômes</strong>,
                      une concertation avec le psychologue et un psychiatre est
                      nécessaire pour prévoir de la suite de la prise en charge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fr-container fr-my-4w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
            <div className="fr-col-12">
              <p>
                A la fin de l’accompagnement,{" "}
                <strong>je me concerte avec le psychologue partenaire </strong>{" "}
                et, le cas échéant, avec un psychiatre pour réévaluer et adapter
                la prise en charge du patient.
              </p>
              <p>Différents cas peuvent se présenter&nbsp;:</p>
              <ul>
                <li>
                  la nécessité d’une consultation avec un psychiatre (en libéral
                  ou à l’hôpital) pour une évaluation plus approfondie
                </li>
                <li>
                  la nécessité d’une prise en charge la plus adaptée: centre
                  médico-psychologique (CMP), CMP infanto-juvéniles, service de
                  psychiatrie ou pédopsychiatrie, maison des adolescents…
                </li>
                <li>
                  une évolution favorable ne nécessitant pas nécessairement un
                  nouvel accompagnement psychologique
                </li>
                <li>un nouvel accompagnement psychologique</li>
              </ul>

              <p>
                Dans ce dernier cas, je peux ré-adresser le patient dans la
                limite de 8 séances remboursées par année civile. Je vérifie
                donc avec lui le nombre de séances réalisées dans l’année.
              </p>

              <p>
                Le patient peut aussi décider de poursuivre avec son psychologue
                dans un cadre non remboursé.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fr-container fr-callout fr-callout--pink-tuile fr-my-6w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12">
              <p className="fr-text--lead">
                Les coordonnées des psychologues partenaires, conventionnés avec
                l’Assurance Maladie, seront disponibles à partir du printemps
                2022.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fr-container fr-my-6w">
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12">
              <h2>Je suis psychiatre </h2>
              <p>
                Le dispositif MonPsy est né d’une volonté partagée entre les
                acteurs de faciliter l’accès à une{" "}
                <strong>prise en charge psychologique de 1er recours</strong>{" "}
                pour les patients souffrant de troubles d’intensité légère à
                modérée.
              </p>
              <p>
                A tout moment du parcours,{" "}
                <strong>
                  le psychologue et le médecin pourront solliciter mon avis
                </strong>{" "}
                et m’adresser le patient si des indicateurs de gravité
                apparaissent. A la fin du parcours et en l’absence
                d’amélioration, le patient devra m’être adressé(e) pour une
                prise en charge adaptée.
              </p>
              <p>
                Ce dispositif a vocation de favoriser la coordination entre les
                médecins de 1er recours, les psychologues et les psychiatres.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fr-container fr-my-6w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12">
              <p className="fr-text--lead">
                J’ai des questions&nbsp;?{" "}
                <a
                  href="/faq/doctor"
                  className="fr-link fr-fi-question-line fr-link--icon-left"
                >
                  Je consulte la FAQ
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
