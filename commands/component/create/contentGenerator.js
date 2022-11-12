exports.genComponentContent = (_componentName) =>
	`import classnames from 'classnames';
import styles from './index.module.scss';

const ${_componentName} = ({ className }) => {
	return <div className={classnames(styles.${
		_componentName.charAt(0).toLowerCase() + _componentName.slice(1)
	}, className)}>${_componentName}</div>;
};

export default ${_componentName};
`;

exports.genStyleContent = (_componentName) => {
	const transferClassName = (oldName) =>
		oldName
			.split('')
			.map((letter, index) => {
				if (letter !== letter.toLowerCase()) {
					if (index !== 0) {
						return `-${letter.toLowerCase()}`;
					}

					return letter.toLowerCase();
				}
				return letter;
			})
			.join('');

	return `.${transferClassName(_componentName)} {}\n`;
};
