import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>Fidelity Investments · MA, USA</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led large-scale LLM prompt engineering and evaluation across 5+
              models (GPT-4, Claude, Llama), reducing hallucination rates by 34%.
              Built an internal LLM experimentation platform with RAG-based
              retrieval and Knowledge Graph augmented QA, improving multi-hop
              reasoning accuracy by 28%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>LMS Pvt Ltd</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Trained ML models on AWS SageMaker, constructed data pipelines
              processing 1TB+ customer data with AWS Glue and Lambda. Analyzed
              customer feedback using BERT and NLP, achieving 85% accuracy.
              Created interactive Tableau dashboards for cross-functional
              stakeholders.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Codiant Software Technologies</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Automated analytics pipelines using Python, Docker, and AWS Step
              Functions. Engineered Neo4j graph data models across 1M+
              transactions. Optimized TensorFlow-based churn prediction model
              achieving 88% accuracy, contributing to 23% churn reduction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
