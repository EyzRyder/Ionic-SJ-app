import './PageReview.scss';

interface ContainerProps {
    risk: number;
    idade: number;
    selo: boolean;

}

const PageReview: React.FC<ContainerProps> = ({ risk, idade, selo }) => {
    return (
        <div className="reviewContainer">
            <div className='row'>
                <label>Risk</label>
                <p>{risk}/100</p>
            </div>
            <div className='row'>
                <label>Tempo de Registro</label>
                <p>Anos de idade{idade}</p>
                
            </div>
            <div className='row'>
                <label>HTTPS (selo de segurança)</label>
                <p>{risk? "Valido":"Invalido"}</p>
                
            </div>
        </div>
    );
};

export default PageReview;
