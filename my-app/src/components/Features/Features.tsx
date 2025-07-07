import { FeatureCard } from '../../types/types';
import '../../assets/styles/features.css';

type FeaturesSectionProps = {
  featureCards: FeatureCard[];
};

const Features = ({ featureCards }: FeaturesSectionProps) => {
  return (
    <section className="section__features" id="features">
      <div className="features__content">
        <img 
          className="features__img" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PTEImbme2ITZk-OhsfEuzKhNXJuwx4iwiY3j1W8M9F-qnhdtb4v_wM1xzBAio9dOvds&usqp=CAU" 
          alt="Feature illustration" 
        />
        <div className="features__wrap">
          <h2 className="features__title">Связаться с предстовителем</h2>
          <p className="features__subtitle">
            Получите мгновенный доступ к тщательно отобранными предстовителями!
          </p>
        </div>
      </div>


    </section>
  );
};

export default Features;