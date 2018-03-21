Array.prototype.filter = function(f){
	var r = [];
	for(var i in this){
		if(typeof(f) === 'object'){
			var m = true;
			for(var p in f){
				if(this[i][p]!=f[p])
					m = false;
			}
			if(m)
				r.push(this[i]);
		} else if(typeof(f) === 'function'){
			if(f(this[i]))
				r.push(this[i]);
		}
	}
	return r;
}