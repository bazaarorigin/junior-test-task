// I'd use library "classnames", but it is forbidden
export default (...args: Array<string | undefined>) => args.filter(arg => !!arg).reduce((acc, arg) => `${acc} ${arg}`, '');
