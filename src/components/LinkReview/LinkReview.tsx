import './LinkReview.scss';

interface ContainerProps {
    risk: number;
    idade: number;
    selo: boolean;

}

const LinkReview: React.FC<ContainerProps> = ({ risk, idade, selo }) => {
    return (
        <div className="reviewContainer">
            <div className='row'>
                <label>Risk</label>
                <p>{risk}/100</p>
            </div>
            <div className='row'>
                <label>Tempo de Registro</label>
                <p>Anos de idade {idade}</p>
                
            </div>
            <div className='row'>
                <label>HTTPS (selo de segurança)</label>
                <p>{selo ? "Valido":"Invalido"}</p>
            </div>
        </div>
    );
};

export default LinkReview;
