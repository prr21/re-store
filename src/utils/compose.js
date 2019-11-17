const compose = (...func) => (Comp) => {
	return func.reduceRight(
		(wrap, f) => ( f(wrap) ), Comp);
}

export default compose;