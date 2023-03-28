import './styles/InformationBody.css';

export interface InformationBodyProps {}

const InformationBody: React.FC<InformationBodyProps> = () => {
	return (
		<div className='informationContainer'>
			<div className='informationImages'>
				<img
					src='./src/assets/images/logo-color.svg'
					height={227}
					width={270}
				/>
				<img
					src='./src/assets/images/letra-blanco.svg'
					height={73}
					width={384}
				/>
			</div>
			<div className='bodyInfo whiteText textLight'>
				<p className='textInfo'>Aplicación web para la gestión de tareas.</p>
				<p className='textInfo'>
					Aprénde a gestionar tus proyectos y a trabajar en linea con tu equipo
				</p>
				<p className='textInfo'>
					utilizando las herramientas que te brinda la aplicación.
				</p>
			</div>
		</div>
	);
};

export default InformationBody;
