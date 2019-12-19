export default function Build(baseClass, Factorys, Arg) {
	return Factorys.reduce((subClass, Factory) => Factory(subClass, Arg), baseClass);
}
