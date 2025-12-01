import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const PortfolioWrapper = styled.div`
  max-width: 1000px;
  margin: 40px auto 80px;
  padding: 40px 50px;
  background: rgba(11, 17, 32, 0.8);
  border-radius: 24px;
  border: 1px solid rgba(75, 85, 99, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    padding: 24px 20px;
    margin: 20px auto 40px;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #f9fafb;
  margin: 0 0 12px 0;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  font-size: 1.05em;
  color: #9ca3af;
  text-align: center;
  margin: 0 0 24px 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const CategorySection = styled.section`
  margin-bottom: 56px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.8em;
  color: #a855f7;
  margin: 0 0 24px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(168, 85, 247, 0.3);
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const ProjectItem = styled.article`
  margin-bottom: 36px;
  padding: 24px;
  background: rgba(5, 8, 20, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(100, 116, 139, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(168, 85, 247, 0.4);
    background: rgba(5, 8, 20, 0.7);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4em;
  color: #22d3ee;
  margin: 0 0 12px 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid rgba(34, 211, 238, 0.2);

  @media (max-width: 768px) {
    max-height: 200px;
  }
`;

const ProjectSummary = styled.p`
  font-size: 1em;
  color: #d1d5db;
  line-height: 1.7;
  margin: 0 0 16px 0;
  text-align: left;
`;

const RoleSection = styled.div`
  margin: 16px 0;
  padding: 16px;
  background: rgba(20, 30, 48, 0.4);
  border-left: 3px solid #22d3ee;
  border-radius: 4px;
  text-align: left;
`;

const RoleTitle = styled.div`
  font-size: 0.9em;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: left;
`;

const RoleContent = styled.div`
  font-size: 0.95em;
  color: #e5e7eb;
  line-height: 1.6;
  text-align: left;

  ul {
    margin: 8px 0;
    padding-left: 20px;
    text-align: left;
  }

  li {
    margin-bottom: 6px;
    text-align: left;
  }
`;

const LinkSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid #22d3ee;
  border-radius: 8px;
  color: #22d3ee;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(34, 211, 238, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.85em;
    padding: 6px 12px;
  }
`;

const PDFLink = styled(Link)`
  background: rgba(168, 85, 247, 0.1);
  border-color: #a855f7;
  color: #a855f7;

  &:hover {
    background: rgba(168, 85, 247, 0.2);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(to bottom, #050814 0%, #0b1120 100%);
`;

export function UCSCPortfolio() {
  return (
    <Container>
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
        <title>UCSC Computational Media · Portfolio – Olly Guo</title>
      </Helmet>
      <PortfolioWrapper as="main" aria-labelledby="ucsc-portfolio-title">
        <Title id="ucsc-portfolio-title">
          UCSC Computational Media · Portfolio
        </Title>
        <Subtitle>
          Olly (Ziqi) Guo · B.S. Computer Science (Game Design Certificate), UW–Madison (Dec 2025)
          <br />
          VR, games, and computational models of user state in immersive media
        </Subtitle>

        {/* 1. COMPUTATIONAL SYSTEMS & ANALYTICS */}
        <CategorySection aria-label="Computational systems and analytics">
          <CategoryTitle>1. Computational Systems &amp; Analytics</CategoryTitle>

          <ProjectItem>
            <ProjectTitle>VR Telemetry &amp; Early-Quit Prediction System</ProjectTitle>
            <ProjectImage
              src={`${process.env.PUBLIC_URL}/img/Waddle/1.jpg`}
              alt="VR telemetry analysis dashboard"
            />
            <ProjectSummary>
              Extracts interpretable behavioral features from VR
              head-movement telemetry to predict early quitting in educational games. Achieves ~80% ROC–AUC
              within-game and ~73% cross-game generalization across 7,000+ sessions, treating VR gameplay
              as a data-rich medium for modeling user state.
            </ProjectSummary>

            <RoleSection>
              <RoleTitle>My Role (Sole Technical Lead)</RoleTitle>
                <RoleContent>
                <ul>
                    <li>
                    Designed a feature representation for 30-second windows of VR head rotation, converting raw quaternions
                    into velocity, stability, and exploration metrics that can run in real time
                    </li>
                    <li>
                    Assembled and cleaned a 7,000+ session dataset by joining telemetry with quit/completion outcomes,
                    building balanced HDF5 datasets and group-aware splits by player, site, and deployment period
                    </li>
                    <li>
                    Trained and compared tree-based classifiers (Random Forest, XGBoost), tuning them for both accuracy
                    and interpretability on early-quit prediction under realistic deployment constraints
                    </li>
                    <li>
                    Used SHAP analysis to recover human-interpretable movement signatures (e.g., wide exploratory scanning
                    vs. frozen gaze) and stress-tested model robustness under time-based and cross-game splits
                    </li>
                    <li>
                        Note: Manuscript in preparation for IEEE TVCG; draft available in links below; The Repository will
                        be made public upon publication.
                    </li>
                </ul>
                </RoleContent>

            </RoleSection>

            <LinkSection>
              <Link
                href="https://ollieii.github.io/portofolio/portofolio/projects/2"
                target="_blank"
                rel="noreferrer"
              >
                Project Page
              </Link>
              <PDFLink
                href={`${process.env.PUBLIC_URL}/writing/Using_Head_Movements_to_Predict_Performance_and_Early_Quitting_in_Virtual_Reality.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                📄 TVCG Draft (2025)
              </PDFLink>
            </LinkSection>
          </ProjectItem>

          <ProjectItem>
            <ProjectTitle>Library of Meialia – Narrative Systems</ProjectTitle>
            <ProjectImage
              src={`${process.env.PUBLIC_URL}/img/LOM/1.jpg`}
              alt="Screenshot from Library of Meialia"
            />
            <ProjectSummary>
              Interactive storytelling engine and data collection framework for a 2D roguelike with 80+ skills,
              50+ items, and 20+ mobs. Built in Unity/C#/Lua; 3,000+ players on Steam Early Access. Combines
              authoring tools for narrative design with embedded telemetry hooks for later behavioral analysis.
            </ProjectSummary>

            <RoleSection>
              <RoleTitle>My Role (Senior Narrative Designer &amp; Developer)</RoleTitle>
              <RoleContent>
                <ul>
                  <li>
                    Architected and implemented dialogue/story-state system using Lua scripting and Unity C# runtime
                  </li>
                  <li>
                    Built in-game encyclopedia and narrative tools for managing branching storylines
                  </li>
                  <li>
                    Led collaboration with art, audio, and engineering to align narrative, mechanics, and data needs
                  </li>
                </ul>
              </RoleContent>
            </RoleSection>

            <LinkSection>
              <Link
                href="https://ollieii.github.io/portofolio/portofolio/projects/1"
                target="_blank"
                rel="noreferrer"
              >
                Project Page
              </Link>
              <Link
                href="https://store.steampowered.com/app/3102950/Library_of_Meialia/"
                target="_blank"
                rel="noreferrer"
              >
                Steam Page
              </Link>
              <Link href="https://github.com/minerva-studio" target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </LinkSection>
          </ProjectItem>

          <ProjectItem>
            <ProjectTitle>POMG Solver – Multi-Agent RL Framework</ProjectTitle>
            <ProjectImage
              src={`${process.env.PUBLIC_URL}/img/POMDP/3.png`}
              alt="Visualization of a grid-world POMDP environment"
            />
            <ProjectSummary>
              Research toolkit for partially observable Markov games: implemented Nash Q-learning, Nash-QMDP,
              DQN, and fictitious play across Car–Truck grid world, Tiger POMDP, and Rock–Paper–Scissors
              benchmarks. Provides infrastructure for experimenting with algorithmic models of strategic
              interaction and uncertainty.
            </ProjectSummary>

            <RoleSection>
              <RoleTitle>My Role (Sole Researcher &amp; Developer)</RoleTitle>
              <RoleContent>
                <ul>
                  <li>Designed transition models, belief-state matrices, and reward-state representations</li>
                  <li>Implemented Nash equilibrium computation via linear programming (PuLP)</li>
                  <li>Built DQN agents with experience replay, target networks, and ε-greedy exploration</li>
                  <li>
                    Analyzed convergence and stability across game-theoretic vs. deep RL approaches as
                    alternative models of agent behavior
                  </li>
                </ul>
              </RoleContent>
            </RoleSection>

            <LinkSection>
              <Link
                href="https://ollieii.github.io/portofolio/portfolio/projects/4"
                target="_blank"
                rel="noreferrer"
              >
                Project Page
              </Link>
              <Link href="https://github.com/OllieII/pomg" target="_blank" rel="noreferrer">
                GitHub Repo
              </Link>
            </LinkSection>
          </ProjectItem>
        </CategorySection>

        {/* 2. COMPUTATIONAL MEDIA & CREATIVE PRACTICE */}
        <CategorySection aria-label="Computational media and creative practice">
          <CategoryTitle>2. Computational Media &amp; Creative Practice</CategoryTitle>

          <ProjectItem>
            <ProjectTitle>Beyond the Garden of Adrian – VR Theatre Performance</ProjectTitle>
            <ProjectImage
              src={`${process.env.PUBLIC_URL}/img/GOA/2.png`}
              alt="Scene from Beyond the Garden of Adrian VR theatre"
            />
            <ProjectSummary>
              One-on-one immersive VR theatre experience adapted from Adrian Howells&apos; performance work.
              Explores intimacy, embodiment, and actor–audience connection in virtual space. Accepted to
              Festival d&apos;Avignon 2023, treating VR as a medium for experimental performance and affective design.
            </ProjectSummary>

            <RoleSection>
              <RoleTitle>My Role (Lead Designer &amp; Unity Developer)</RoleTitle>
              <RoleContent>
                <ul>
                  <li>Designed and implemented two A/B test versions in Unity (C#, Oculus VR SDK)</li>
                  <li>
                    Collaborated with theatre faculty to translate physical staging to VR interaction and spatial design
                  </li>
                  <li>Created environmental storytelling, lighting, and spatial audio to evoke intimacy</li>
                  <li>Surveyed 30+ participants to evaluate transformational gameplay, embodiment, and presence</li>
                </ul>
              </RoleContent>
            </RoleSection>

            <LinkSection>
              <Link
                href="https://ollieii.github.io/portofolio/portfolio/projects/3"
                target="_blank"
                rel="noreferrer"
              >
                Project Page
              </Link>
              <PDFLink
                href={`${process.env.PUBLIC_URL}/writing/Beyond the Garden of Adrian Article 2025.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                📄 IJPADM Submission under review(2025)
              </PDFLink>
            </LinkSection>
          </ProjectItem>

          <ProjectItem>
            <ProjectTitle>Library of Meialia – Narrative Design &amp; World-Building</ProjectTitle>
            <ProjectImage
              src={`${process.env.PUBLIC_URL}/img/LOM/2.jpg`}
              alt="Narrative scene from Library of Meialia"
            />
            <ProjectSummary>
              Led narrative direction for a 2D roguelike: story arc, character development, dialogue writing,
              and environmental storytelling across four biomes. Focuses on how narrative structure and pacing
              interact with roguelike systems to shape player emotion and engagement.
            </ProjectSummary>

            <RoleSection>
              <RoleTitle>My Role (Lead Narrative Designer)</RoleTitle>
              <RoleContent>
                <ul>
                  <li>Wrote 10,000+ words of branching dialogue and world-building lore</li>
                  <li>Designed character arcs for Almos (protagonist) and 8+ NPCs with distinct motivations</li>
                  <li>
                    Created a drip-feed narrative delivery system tuned to roguelike repetition and partial completion
                  </li>
                  <li>
                    Collaborated with level designers to embed storytelling in biome layouts, props, and visual motifs
                  </li>
                  <li>
                    Design sheets and documentation for game content will be published as the storyline is revealed in Early Access versions,
                    currently in active development and locked for public viewing.
                  </li>
                </ul>
              </RoleContent>
            </RoleSection>

            <LinkSection>
              <Link
                href="https://ollieii.github.io/portofolio/portfolio/projects/1"
                target="_blank"
                rel="noreferrer"
              >
                Project Page
              </Link>
              <Link
                href="https://store.steampowered.com/app/3102950/Library_of_Meialia/"
                target="_blank"
                rel="noreferrer"
              >
                Steam Trailer
              </Link>
            </LinkSection>
          </ProjectItem>
        </CategorySection>

        {/* 3. RESEARCH, THEORY & WRITING */}
        <CategorySection aria-label="Research, theory, and writing">
          <CategoryTitle>3. Research, Theory &amp; Writing</CategoryTitle>

          <ProjectItem>
            <ProjectTitle>VR Telemetry Analysis &amp; User Behavior Modeling</ProjectTitle>
            <ProjectImage
              src={`${process.env.PUBLIC_URL}/img/Waddle/2.png`}
              alt="Graphs from VR telemetry research"
            />
            <ProjectSummary>
              Empirical research paper analyzing head-movement patterns as proxies for engagement and quitting
              intent in educational VR. Combines ML pipeline design, interpretability analysis (SHAP), and
              discussion of ethical implications for adaptive systems that intervene on players in real time.
              Manuscript in preparation for IEEE TVCG.
            </ProjectSummary>

            <RoleSection>
              <RoleTitle>My Role (First Author, with advisor Kevin Ponto)</RoleTitle>
              <RoleContent>
                <ul>
                  <li>Sole contributor to ML pipeline, experiments, and interpretability analysis</li>
                  <li>Wrote Methods, Results, and Discussion sections</li>
                  <li>
                    Addressed ethical concerns around prediction, misclassification, and intervention design in
                    educational contexts
                  </li>
                  <li>Collaborated on framing, theory, and related work with advisor</li>
                </ul>
              </RoleContent>
            </RoleSection>

            <LinkSection>

              <Link
                href="https://ollieii.github.io/portofolio/portfolio/projects/2"
                target="_blank"
                rel="noreferrer"
              >
                Project Summary
              </Link>
                            <PDFLink
                href={`${process.env.PUBLIC_URL}/writing/Using_Head_Movements_to_Predict_Performance_and_Early_Quitting_in_Virtual_Reality.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                📄 TVCG Draft (2025)
              </PDFLink>
            </LinkSection>
          </ProjectItem>

          <ProjectItem>
            <ProjectTitle>Beyond the Garden of Adrian – Performance Theory Analysis</ProjectTitle>
            <ProjectImage
              src={`${process.env.PUBLIC_URL}/img/GOA/6.png`}
              alt="Still image from Beyond the Garden of Adrian"
            />
            <ProjectSummary>
              Qualitative research paper examining how VR theatrical performance shifts actor–audience dynamics,
              intimacy, and authenticity. Analyzes survey data from 30+ participants through performance studies
              and HCI lenses, situating the piece within broader debates on presence and embodiment in
              computational media.
            </ProjectSummary>

            <RoleSection>
              <RoleTitle>My Role (Co-Author with Megan Reilly, Theatre Dept.)</RoleTitle>
              <RoleContent>
                <ul>
                  <li>Designed and conducted A/B testing protocol for two VR environment versions</li>
                  <li>Analyzed quantitative survey responses and coded qualitative feedback</li>
                  <li>Collaborated on discussion of embodiment, intimacy, and audience agency</li>
                </ul>
              </RoleContent>
            </RoleSection>

            <LinkSection>

              <Link
                href="https://ollieii.github.io/portofolio/portfolio/projects/3"
                target="_blank"
                rel="noreferrer"
              >
                Project Page
              </Link>
                            <PDFLink
                href={`${process.env.PUBLIC_URL}/writing/Beyond the Garden of Adrian Article 2025.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                📄 IJPADM Submission under review(2025)
              </PDFLink>
            </LinkSection>
          </ProjectItem>

          <ProjectItem>
            <ProjectTitle>Milky Way Density Structure – Computational Astrophysics</ProjectTitle>
            <ProjectImage
              src={`${process.env.PUBLIC_URL}/img/Milky/Slide1.png`}
              alt="Milky Way density map from research poster"
            />
            <ProjectSummary>
              Research poster analyzing galactic bar structures using Gaia DR3 data and N-body simulations.
              Trained a TensorFlow classifier to identify red clump giants as standard-candle tracers and
              compared observed vs. simulated density patterns, developing transferable skills in large-scale
              scientific data processing and modeling.
            </ProjectSummary>

            <RoleSection>
              <RoleTitle>My Role (Undergraduate Researcher, Astronomy Dept.)</RoleTitle>
              <RoleContent>
                <ul>
                  <li>Cleaned and filtered Gaia DR3 photometry; built training/test datasets</li>
                  <li>Implemented and tuned TensorFlow red-clump classifier with ~85% accuracy</li>
                  <li>Applied model to 100M+ stars and N-body simulation; generated density maps</li>
                  <li>Designed research poster summarizing methods and findings</li>
                </ul>
              </RoleContent>
            </RoleSection>

            <LinkSection>
              <Link
                href="https://ollieii.github.io/portofolio/portfolio/projects/5"
                target="_blank"
                rel="noreferrer"
              >
                Project Page
              </Link>
              <PDFLink
                href={`${process.env.PUBLIC_URL}/img/Milky/Slide1.png`}
                target="_blank"
                rel="noreferrer"
              >
                📄 Research Poster
              </PDFLink>
            </LinkSection>
          </ProjectItem>
        </CategorySection>
      </PortfolioWrapper>
    </Container>
  );
}

export default UCSCPortfolio;
