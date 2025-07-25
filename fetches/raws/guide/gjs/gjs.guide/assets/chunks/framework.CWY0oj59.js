/**
 * @vue/shared v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function gs(e, t) {
	const n = new Set(e.split(","));
	return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const te = {},
	mt = [],
	xe = () => {},
	ii = () => !1,
	kt = (e) =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
	ms = (e) => e.startsWith("onUpdate:"),
	oe = Object.assign,
	_s = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	},
	li = Object.prototype.hasOwnProperty,
	X = (e, t) => li.call(e, t),
	B = Array.isArray,
	_t = (e) => bn(e) === "[object Map]",
	Fr = (e) => bn(e) === "[object Set]",
	U = (e) => typeof e == "function",
	ne = (e) => typeof e == "string",
	St = (e) => typeof e == "symbol",
	Z = (e) => e !== null && typeof e == "object",
	$r = (e) => (Z(e) || U(e)) && U(e.then) && U(e.catch),
	Hr = Object.prototype.toString,
	bn = (e) => Hr.call(e),
	ci = (e) => bn(e).slice(8, -1),
	jr = (e) => bn(e) === "[object Object]",
	ys = (e) =>
		ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
	yt = gs(
		",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
	),
	vn = (e) => {
		const t = Object.create(null);
		return (n) => t[n] || (t[n] = e(n));
	},
	ai = /-(\w)/g,
	Me = vn((e) => e.replace(ai, (t, n) => (n ? n.toUpperCase() : ""))),
	ui = /\B([A-Z])/g,
	at = vn((e) => e.replace(ui, "-$1").toLowerCase()),
	wn = vn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
	on = vn((e) => (e ? `on${wn(e)}` : "")),
	Qe = (e, t) => !Object.is(e, t),
	Dn = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t);
	},
	an = (e, t, n) => {
		Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
	},
	fi = (e) => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t;
	},
	di = (e) => {
		const t = ne(e) ? Number(e) : NaN;
		return isNaN(t) ? e : t;
	};
let ks;
const Dr = () =>
	ks ||
	(ks =
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
				? self
				: typeof window < "u"
					? window
					: typeof global < "u"
						? global
						: {});
function bs(e) {
	if (B(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const s = e[n],
				r = ne(s) ? mi(s) : bs(s);
			if (r) for (const o in r) t[o] = r[o];
		}
		return t;
	} else if (ne(e) || Z(e)) return e;
}
const hi = /;(?![^(]*\))/g,
	pi = /:([^]+)/,
	gi = /\/\*[^]*?\*\//g;
function mi(e) {
	const t = {};
	return (
		e
			.replace(gi, "")
			.split(hi)
			.forEach((n) => {
				if (n) {
					const s = n.split(pi);
					s.length > 1 && (t[s[0].trim()] = s[1].trim());
				}
			}),
		t
	);
}
function vs(e) {
	let t = "";
	if (ne(e)) t = e;
	else if (B(e))
		for (let n = 0; n < e.length; n++) {
			const s = vs(e[n]);
			s && (t += s + " ");
		}
	else if (Z(e)) for (const n in e) e[n] && (t += n + " ");
	return t.trim();
}
const _i =
		"itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
	yi = gs(_i);
function Vr(e) {
	return !!e || e === "";
}
const Fa = (e) =>
		ne(e)
			? e
			: e == null
				? ""
				: B(e) || (Z(e) && (e.toString === Hr || !U(e.toString)))
					? JSON.stringify(e, Br, 2)
					: String(e),
	Br = (e, t) =>
		t && t.__v_isRef
			? Br(e, t.value)
			: _t(t)
				? {
						[`Map(${t.size})`]: [...t.entries()].reduce(
							(n, [s, r], o) => ((n[Vn(s, o) + " =>"] = r), n),
							{},
						),
					}
				: Fr(t)
					? { [`Set(${t.size})`]: [...t.values()].map((n) => Vn(n)) }
					: St(t)
						? Vn(t)
						: Z(t) && !B(t) && !jr(t)
							? String(t)
							: t,
	Vn = (e, t = "") => {
		var n;
		return St(e) ? `Symbol(${((n = e.description)) != null ? n : t})` : e;
	}; /**
 * @vue/reactivity v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let be;
class bi {
	constructor(t = !1) {
		(this.detached = t),
			(this._active = !0),
			(this.effects = []),
			(this.cleanups = []),
			(this.parent = be),
			!t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	run(t) {
		if (this._active) {
			const n = be;
			try {
				return (be = this), t();
			} finally {
				be = n;
			}
		}
	}
	on() {
		be = this;
	}
	off() {
		be = this.parent;
	}
	stop(t) {
		if (this._active) {
			let n, s;
			for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
			for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
			if (this.scopes)
				for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
			if (!this.detached && this.parent && !t) {
				const r = this.parent.scopes.pop();
				r &&
					r !== this &&
					((this.parent.scopes[this.index] = r), (r.index = this.index));
			}
			(this.parent = void 0), (this._active = !1);
		}
	}
}
function vi(e, t = be) {
	t && t.active && t.effects.push(e);
}
function kr() {
	return be;
}
function wi(e) {
	be && be.cleanups.push(e);
}
let it;
class ws {
	constructor(t, n, s, r) {
		(this.fn = t),
			(this.trigger = n),
			(this.scheduler = s),
			(this.active = !0),
			(this.deps = []),
			(this._dirtyLevel = 4),
			(this._trackId = 0),
			(this._runnings = 0),
			(this._shouldSchedule = !1),
			(this._depsLength = 0),
			vi(this, r);
	}
	get dirty() {
		if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
			(this._dirtyLevel = 1), ut();
			for (let t = 0; t < this._depsLength; t++) {
				const n = this.deps[t];
				if (n.computed && (Ei(n.computed), this._dirtyLevel >= 4)) break;
			}
			this._dirtyLevel === 1 && (this._dirtyLevel = 0), ft();
		}
		return this._dirtyLevel >= 4;
	}
	set dirty(t) {
		this._dirtyLevel = t ? 4 : 0;
	}
	run() {
		if (((this._dirtyLevel = 0), !this.active)) return this.fn();
		let t = Ge,
			n = it;
		try {
			return (Ge = !0), (it = this), this._runnings++, Us(this), this.fn();
		} finally {
			Ks(this), this._runnings--, (it = n), (Ge = t);
		}
	}
	stop() {
		var t;
		this.active &&
			(Us(this),
			Ks(this),
			(t = this.onStop) == null || t.call(this),
			(this.active = !1));
	}
}
function Ei(e) {
	return e.value;
}
function Us(e) {
	e._trackId++, (e._depsLength = 0);
}
function Ks(e) {
	if (e.deps.length > e._depsLength) {
		for (let t = e._depsLength; t < e.deps.length; t++) Ur(e.deps[t], e);
		e.deps.length = e._depsLength;
	}
}
function Ur(e, t) {
	const n = e.get(t);
	n !== void 0 &&
		t._trackId !== n &&
		(e.delete(t), e.size === 0 && e.cleanup());
}
let Ge = !0,
	ts = 0;
const Kr = [];
function ut() {
	Kr.push(Ge), (Ge = !1);
}
function ft() {
	const e = Kr.pop();
	Ge = e === void 0 ? !0 : e;
}
function Es() {
	ts++;
}
function Cs() {
	for (ts--; !ts && ns.length; ) ns.shift()();
}
function Wr(e, t, n) {
	if (t.get(e) !== e._trackId) {
		t.set(e, e._trackId);
		const s = e.deps[e._depsLength];
		s !== t ? (s && Ur(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
	}
}
const ns = [];
function qr(e, t, n) {
	Es();
	for (const s of e.keys()) {
		let r;
		s._dirtyLevel < t &&
			(r ?? (r = e.get(s) === s._trackId)) &&
			(s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
			(s._dirtyLevel = t)),
			s._shouldSchedule &&
				(r ?? (r = e.get(s) === s._trackId)) &&
				(s.trigger(),
				(!s._runnings || s.allowRecurse) &&
					s._dirtyLevel !== 2 &&
					((s._shouldSchedule = !1), s.scheduler && ns.push(s.scheduler)));
	}
	Cs();
}
const Gr = (e, t) => {
		const n = new Map();
		return (n.cleanup = e), (n.computed = t), n;
	},
	un = new WeakMap(),
	lt = Symbol(""),
	ss = Symbol("");
function _e(e, t, n) {
	if (Ge && it) {
		let s = un.get(e);
		s || un.set(e, (s = new Map()));
		let r = s.get(n);
		r || s.set(n, (r = Gr(() => s.delete(n)))), Wr(it, r);
	}
}
function $e(e, t, n, s, r, o) {
	const i = un.get(e);
	if (!i) return;
	let l = [];
	if (t === "clear") l = [...i.values()];
	else if (n === "length" && B(e)) {
		const c = Number(s);
		i.forEach((u, d) => {
			(d === "length" || (!St(d) && d >= c)) && l.push(u);
		});
	} else
		switch ((n !== void 0 && l.push(i.get(n)), t)) {
			case "add":
				B(e)
					? ys(n) && l.push(i.get("length"))
					: (l.push(i.get(lt)), _t(e) && l.push(i.get(ss)));
				break;
			case "delete":
				B(e) || (l.push(i.get(lt)), _t(e) && l.push(i.get(ss)));
				break;
			case "set":
				_t(e) && l.push(i.get(lt));
				break;
		}
	Es();
	for (const c of l) c && qr(c, 4);
	Cs();
}
function Ci(e, t) {
	var n;
	return (n = un.get(e)) == null ? void 0 : n.get(t);
}
const xi = gs("__proto__,__v_isRef,__isVue"),
	zr = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter((e) => e !== "arguments" && e !== "caller")
			.map((e) => Symbol[e])
			.filter(St),
	),
	Ws = Si();
function Si() {
	const e = {};
	return (
		["includes", "indexOf", "lastIndexOf"].forEach((t) => {
			e[t] = function (...n) {
				const s = Y(this);
				for (let o = 0, i = this.length; o < i; o++) _e(s, "get", o + "");
				const r = s[t](...n);
				return r === -1 || r === !1 ? s[t](...n.map(Y)) : r;
			};
		}),
		["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
			e[t] = function (...n) {
				ut(), Es();
				const s = Y(this)[t].apply(this, n);
				return Cs(), ft(), s;
			};
		}),
		e
	);
}
function Ti(e) {
	const t = Y(this);
	return _e(t, "has", e), t.hasOwnProperty(e);
}
class Xr {
	constructor(t = !1, n = !1) {
		(this._isReadonly = t), (this._shallow = n);
	}
	get(t, n, s) {
		const r = this._isReadonly,
			o = this._shallow;
		if (n === "__v_isReactive") return !r;
		if (n === "__v_isReadonly") return r;
		if (n === "__v_isShallow") return o;
		if (n === "__v_raw")
			return s === (r ? (o ? Di : Zr) : o ? Qr : Jr).get(t) ||
				Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
				? t
				: void 0;
		const i = B(t);
		if (!r) {
			if (i && X(Ws, n)) return Reflect.get(Ws, n, s);
			if (n === "hasOwnProperty") return Ti;
		}
		const l = Reflect.get(t, n, s);
		return (St(n) ? zr.has(n) : xi(n)) || (r || _e(t, "get", n), o)
			? l
			: de(l)
				? i && ys(n)
					? l
					: l.value
				: Z(l)
					? r
						? xn(l)
						: Cn(l)
					: l;
	}
}
class Yr extends Xr {
	constructor(t = !1) {
		super(!1, t);
	}
	set(t, n, s, r) {
		let o = t[n];
		if (!this._shallow) {
			const c = Ct(o);
			if (
				(!fn(s) && !Ct(s) && ((o = Y(o)), (s = Y(s))), !B(t) && de(o) && !de(s))
			)
				return c ? !1 : ((o.value = s), !0);
		}
		const i = B(t) && ys(n) ? Number(n) < t.length : X(t, n),
			l = Reflect.set(t, n, s, r);
		return (
			t === Y(r) && (i ? Qe(s, o) && $e(t, "set", n, s) : $e(t, "add", n, s)), l
		);
	}
	deleteProperty(t, n) {
		const s = X(t, n);
		t[n];
		const r = Reflect.deleteProperty(t, n);
		return r && s && $e(t, "delete", n, void 0), r;
	}
	has(t, n) {
		const s = Reflect.has(t, n);
		return (!St(n) || !zr.has(n)) && _e(t, "has", n), s;
	}
	ownKeys(t) {
		return _e(t, "iterate", B(t) ? "length" : lt), Reflect.ownKeys(t);
	}
}
class Ai extends Xr {
	constructor(t = !1) {
		super(!0, t);
	}
	set(t, n) {
		return !0;
	}
	deleteProperty(t, n) {
		return !0;
	}
}
const Ri = new Yr(),
	Oi = new Ai(),
	Li = new Yr(!0),
	xs = (e) => e,
	En = (e) => Reflect.getPrototypeOf(e);
function qt(e, t, n = !1, s = !1) {
	e = e.__v_raw;
	const r = Y(e),
		o = Y(t);
	n || (Qe(t, o) && _e(r, "get", t), _e(r, "get", o));
	const { has: i } = En(r),
		l = s ? xs : n ? As : Ht;
	if (i.call(r, t)) return l(e.get(t));
	if (i.call(r, o)) return l(e.get(o));
	e !== r && e.get(t);
}
function Gt(e, t = !1) {
	const n = this.__v_raw,
		s = Y(n),
		r = Y(e);
	return (
		t || (Qe(e, r) && _e(s, "has", e), _e(s, "has", r)),
		e === r ? n.has(e) : n.has(e) || n.has(r)
	);
}
function zt(e, t = !1) {
	return (
		(e = e.__v_raw), !t && _e(Y(e), "iterate", lt), Reflect.get(e, "size", e)
	);
}
function qs(e) {
	e = Y(e);
	const t = Y(this);
	return En(t).has.call(t, e) || (t.add(e), $e(t, "add", e, e)), this;
}
function Gs(e, t) {
	t = Y(t);
	const n = Y(this),
		{ has: s, get: r } = En(n);
	let o = s.call(n, e);
	o || ((e = Y(e)), (o = s.call(n, e)));
	const i = r.call(n, e);
	return (
		n.set(e, t), o ? Qe(t, i) && $e(n, "set", e, t) : $e(n, "add", e, t), this
	);
}
function zs(e) {
	const t = Y(this),
		{ has: n, get: s } = En(t);
	let r = n.call(t, e);
	r || ((e = Y(e)), (r = n.call(t, e))), s && s.call(t, e);
	const o = t.delete(e);
	return r && $e(t, "delete", e, void 0), o;
}
function Xs() {
	const e = Y(this),
		t = e.size !== 0,
		n = e.clear();
	return t && $e(e, "clear", void 0, void 0), n;
}
function Xt(e, t) {
	return function (s, r) {
		const o = this,
			i = o.__v_raw,
			l = Y(i),
			c = t ? xs : e ? As : Ht;
		return (
			!e && _e(l, "iterate", lt), i.forEach((u, d) => s.call(r, c(u), c(d), o))
		);
	};
}
function Yt(e, t, n) {
	return function (...s) {
		const r = this.__v_raw,
			o = Y(r),
			i = _t(o),
			l = e === "entries" || (e === Symbol.iterator && i),
			c = e === "keys" && i,
			u = r[e](...s),
			d = n ? xs : t ? As : Ht;
		return (
			!t && _e(o, "iterate", c ? ss : lt),
			{
				next() {
					const { value: h, done: m } = u.next();
					return m
						? { value: h, done: m }
						: { value: l ? [d(h[0]), d(h[1])] : d(h), done: m };
				},
				[Symbol.iterator]() {
					return this;
				},
			}
		);
	};
}
function De(e) {
	return function (...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ii() {
	const e = {
			get(o) {
				return qt(this, o);
			},
			get size() {
				return zt(this);
			},
			has: Gt,
			add: qs,
			set: Gs,
			delete: zs,
			clear: Xs,
			forEach: Xt(!1, !1),
		},
		t = {
			get(o) {
				return qt(this, o, !1, !0);
			},
			get size() {
				return zt(this);
			},
			has: Gt,
			add: qs,
			set: Gs,
			delete: zs,
			clear: Xs,
			forEach: Xt(!1, !0),
		},
		n = {
			get(o) {
				return qt(this, o, !0);
			},
			get size() {
				return zt(this, !0);
			},
			has(o) {
				return Gt.call(this, o, !0);
			},
			add: De("add"),
			set: De("set"),
			delete: De("delete"),
			clear: De("clear"),
			forEach: Xt(!0, !1),
		},
		s = {
			get(o) {
				return qt(this, o, !0, !0);
			},
			get size() {
				return zt(this, !0);
			},
			has(o) {
				return Gt.call(this, o, !0);
			},
			add: De("add"),
			set: De("set"),
			delete: De("delete"),
			clear: De("clear"),
			forEach: Xt(!0, !0),
		};
	return (
		["keys", "values", "entries", Symbol.iterator].forEach((o) => {
			(e[o] = Yt(o, !1, !1)),
				(n[o] = Yt(o, !0, !1)),
				(t[o] = Yt(o, !1, !0)),
				(s[o] = Yt(o, !0, !0));
		}),
		[e, n, t, s]
	);
}
const [Pi, Mi, Ni, Fi] = Ii();
function Ss(e, t) {
	const n = t ? (e ? Fi : Ni) : e ? Mi : Pi;
	return (s, r, o) =>
		r === "__v_isReactive"
			? !e
			: r === "__v_isReadonly"
				? e
				: r === "__v_raw"
					? s
					: Reflect.get(X(n, r) && r in s ? n : s, r, o);
}
const $i = { get: Ss(!1, !1) },
	Hi = { get: Ss(!1, !0) },
	ji = { get: Ss(!0, !1) },
	Jr = new WeakMap(),
	Qr = new WeakMap(),
	Zr = new WeakMap(),
	Di = new WeakMap();
function Vi(e) {
	switch (e) {
		case "Object":
		case "Array":
			return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet":
			return 2;
		default:
			return 0;
	}
}
function Bi(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Vi(ci(e));
}
function Cn(e) {
	return Ct(e) ? e : Ts(e, !1, Ri, $i, Jr);
}
function ki(e) {
	return Ts(e, !1, Li, Hi, Qr);
}
function xn(e) {
	return Ts(e, !0, Oi, ji, Zr);
}
function Ts(e, t, n, s, r) {
	if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
	const o = r.get(e);
	if (o) return o;
	const i = Bi(e);
	if (i === 0) return e;
	const l = new Proxy(e, i === 2 ? s : n);
	return r.set(e, l), l;
}
function bt(e) {
	return Ct(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ct(e) {
	return !!(e && e.__v_isReadonly);
}
function fn(e) {
	return !!(e && e.__v_isShallow);
}
function eo(e) {
	return bt(e) || Ct(e);
}
function Y(e) {
	const t = e && e.__v_raw;
	return t ? Y(t) : e;
}
function Lt(e) {
	return Object.isExtensible(e) && an(e, "__v_skip", !0), e;
}
const Ht = (e) => (Z(e) ? Cn(e) : e),
	As = (e) => (Z(e) ? xn(e) : e);
class to {
	constructor(t, n, s, r) {
		(this._setter = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this.__v_isReadonly = !1),
			(this.effect = new ws(
				() => t(this._value),
				() => It(this, this.effect._dirtyLevel === 2 ? 2 : 3),
			)),
			(this.effect.computed = this),
			(this.effect.active = this._cacheable = !r),
			(this.__v_isReadonly = s);
	}
	get value() {
		const t = Y(this);
		return (
			(!t._cacheable || t.effect.dirty) &&
				Qe(t._value, (t._value = t.effect.run())) &&
				It(t, 4),
			Rs(t),
			t.effect._dirtyLevel >= 2 && It(t, 2),
			t._value
		);
	}
	set value(t) {
		this._setter(t);
	}
	get _dirty() {
		return this.effect.dirty;
	}
	set _dirty(t) {
		this.effect.dirty = t;
	}
}
function Ui(e, t, n = !1) {
	let s, r;
	const o = U(e);
	return (
		o ? ((s = e), (r = xe)) : ((s = e.get), (r = e.set)),
		new to(s, r, o || !r, n)
	);
}
function Rs(e) {
	var t;
	Ge &&
		it &&
		((e = Y(e)),
		Wr(
			it,
			(t = e.dep) != null
				? t
				: (e.dep = Gr(() => (e.dep = void 0), e instanceof to ? e : void 0)),
		));
}
function It(e, t = 4, n) {
	e = Y(e);
	const s = e.dep;
	s && qr(s, t);
}
function de(e) {
	return !!(e && e.__v_isRef === !0);
}
function me(e) {
	return so(e, !1);
}
function no(e) {
	return so(e, !0);
}
function so(e, t) {
	return de(e) ? e : new Ki(e, t);
}
class Ki {
	constructor(t, n) {
		(this.__v_isShallow = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this._rawValue = n ? t : Y(t)),
			(this._value = n ? t : Ht(t));
	}
	get value() {
		return Rs(this), this._value;
	}
	set value(t) {
		const n = this.__v_isShallow || fn(t) || Ct(t);
		(t = n ? t : Y(t)),
			Qe(t, this._rawValue) &&
				((this._rawValue = t), (this._value = n ? t : Ht(t)), It(this, 4));
	}
}
function ro(e) {
	return de(e) ? e.value : e;
}
const Wi = {
	get: (e, t, n) => ro(Reflect.get(e, t, n)),
	set: (e, t, n, s) => {
		const r = e[t];
		return de(r) && !de(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
	},
};
function oo(e) {
	return bt(e) ? e : new Proxy(e, Wi);
}
class qi {
	constructor(t) {
		(this.dep = void 0), (this.__v_isRef = !0);
		const { get: n, set: s } = t(
			() => Rs(this),
			() => It(this),
		);
		(this._get = n), (this._set = s);
	}
	get value() {
		return this._get();
	}
	set value(t) {
		this._set(t);
	}
}
function Gi(e) {
	return new qi(e);
}
class zi {
	constructor(t, n, s) {
		(this._object = t),
			(this._key = n),
			(this._defaultValue = s),
			(this.__v_isRef = !0);
	}
	get value() {
		const t = this._object[this._key];
		return t === void 0 ? this._defaultValue : t;
	}
	set value(t) {
		this._object[this._key] = t;
	}
	get dep() {
		return Ci(Y(this._object), this._key);
	}
}
class Xi {
	constructor(t) {
		(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
	}
	get value() {
		return this._getter();
	}
}
function Yi(e, t, n) {
	return de(e)
		? e
		: U(e)
			? new Xi(e)
			: Z(e) && arguments.length > 1
				? Ji(e, t, n)
				: me(e);
}
function Ji(e, t, n) {
	const s = e[t];
	return de(s) ? s : new zi(e, t, n);
} /**
 * @vue/runtime-core v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function ze(e, t, n, s) {
	let r;
	try {
		r = s ? e(...s) : e();
	} catch (o) {
		Sn(o, t, n);
	}
	return r;
}
function Se(e, t, n, s) {
	if (U(e)) {
		const o = ze(e, t, n, s);
		return (
			o &&
				$r(o) &&
				o.catch((i) => {
					Sn(i, t, n);
				}),
			o
		);
	}
	const r = [];
	for (let o = 0; o < e.length; o++) r.push(Se(e[o], t, n, s));
	return r;
}
function Sn(e, t, n, s = !0) {
	const r = t ? t.vnode : null;
	if (t) {
		let o = t.parent;
		const i = t.proxy,
			l = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; o; ) {
			const u = o.ec;
			if (u) {
				for (let d = 0; d < u.length; d++) if (u[d](e, i, l) === !1) return;
			}
			o = o.parent;
		}
		const c = t.appContext.config.errorHandler;
		if (c) {
			ze(c, null, 10, [e, i, l]);
			return;
		}
	}
	Qi(e, n, r, s);
}
function Qi(e, t, n, s = !0) {
	console.error(e);
}
let jt = !1,
	rs = !1;
const ue = [];
let Pe = 0;
const vt = [];
let Ue = null,
	rt = 0;
const io = Promise.resolve();
let Os = null;
function Tn(e) {
	const t = Os || io;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zi(e) {
	let t = Pe + 1,
		n = ue.length;
	for (; t < n; ) {
		const s = (t + n) >>> 1,
			r = ue[s],
			o = Dt(r);
		o < e || (o === e && r.pre) ? (t = s + 1) : (n = s);
	}
	return t;
}
function Ls(e) {
	(!ue.length || !ue.includes(e, jt && e.allowRecurse ? Pe + 1 : Pe)) &&
		(e.id == null ? ue.push(e) : ue.splice(Zi(e.id), 0, e), lo());
}
function lo() {
	!jt && !rs && ((rs = !0), (Os = io.then(co)));
}
function el(e) {
	const t = ue.indexOf(e);
	t > Pe && ue.splice(t, 1);
}
function tl(e) {
	B(e)
		? vt.push(...e)
		: (!Ue || !Ue.includes(e, e.allowRecurse ? rt + 1 : rt)) && vt.push(e),
		lo();
}
function Ys(e, t, n = jt ? Pe + 1 : 0) {
	for (; n < ue.length; n++) {
		const s = ue[n];
		if (s && s.pre) {
			if (e && s.id !== e.uid) continue;
			ue.splice(n, 1), n--, s();
		}
	}
}
function dn(e) {
	if (vt.length) {
		const t = [...new Set(vt)].sort((n, s) => Dt(n) - Dt(s));
		if (((vt.length = 0), Ue)) {
			Ue.push(...t);
			return;
		}
		for (Ue = t, rt = 0; rt < Ue.length; rt++) Ue[rt]();
		(Ue = null), (rt = 0);
	}
}
const Dt = (e) => (e.id == null ? 1 / 0 : e.id),
	nl = (e, t) => {
		const n = Dt(e) - Dt(t);
		if (n === 0) {
			if (e.pre && !t.pre) return -1;
			if (t.pre && !e.pre) return 1;
		}
		return n;
	};
function co(e) {
	(rs = !1), (jt = !0), ue.sort(nl);
	try {
		for (Pe = 0; Pe < ue.length; Pe++) {
			const t = ue[Pe];
			t && t.active !== !1 && ze(t, null, 14);
		}
	} finally {
		(Pe = 0),
			(ue.length = 0),
			dn(),
			(jt = !1),
			(Os = null),
			(ue.length || vt.length) && co();
	}
}
function sl(e, t, ...n) {
	if (e.isUnmounted) return;
	const s = e.vnode.props || te;
	let r = n;
	const o = t.startsWith("update:"),
		i = o && t.slice(7);
	if (i && i in s) {
		const d = `${i === "modelValue" ? "model" : i}Modifiers`,
			{ number: h, trim: m } = s[d] || te;
		m && (r = n.map((w) => (ne(w) ? w.trim() : w))), h && (r = n.map(fi));
	}
	let l,
		c = s[(l = on(t))] || s[(l = on(Me(t)))];
	!c && o && (c = s[(l = on(at(t)))]), c && Se(c, e, 6, r);
	const u = s[l + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[l]) return;
		(e.emitted[l] = !0), Se(u, e, 6, r);
	}
}
function ao(e, t, n = !1) {
	const s = t.emitsCache,
		r = s.get(e);
	if (r !== void 0) return r;
	const o = e.emits;
	let i = {},
		l = !1;
	if (!U(e)) {
		const c = (u) => {
			const d = ao(u, t, !0);
			d && ((l = !0), oe(i, d));
		};
		!n && t.mixins.length && t.mixins.forEach(c),
			e.extends && c(e.extends),
			e.mixins && e.mixins.forEach(c);
	}
	return !o && !l
		? (Z(e) && s.set(e, null), null)
		: (B(o) ? o.forEach((c) => (i[c] = null)) : oe(i, o),
			Z(e) && s.set(e, i),
			i);
}
function An(e, t) {
	return !e || !kt(t)
		? !1
		: ((t = t.slice(2).replace(/Once$/, "")),
			X(e, t[0].toLowerCase() + t.slice(1)) || X(e, at(t)) || X(e, t));
}
let fe = null,
	Rn = null;
function hn(e) {
	const t = fe;
	return (fe = e), (Rn = (e && e.type.__scopeId) || null), t;
}
function $a(e) {
	Rn = e;
}
function Ha() {
	Rn = null;
}
function rl(e, t = fe, n) {
	if (!t || e._n) return e;
	const s = (...r) => {
		s._d && cr(-1);
		const o = hn(t);
		let i;
		try {
			i = e(...r);
		} finally {
			hn(o), s._d && cr(1);
		}
		return i;
	};
	return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Bn(e) {
	const {
		type: t,
		vnode: n,
		proxy: s,
		withProxy: r,
		props: o,
		propsOptions: [i],
		slots: l,
		attrs: c,
		emit: u,
		render: d,
		renderCache: h,
		data: m,
		setupState: w,
		ctx: L,
		inheritAttrs: M,
	} = e;
	let D, W;
	const J = hn(e);
	try {
		if (n.shapeFlag & 4) {
			const _ = r || s,
				N = _;
			(D = Ae(d.call(N, _, h, o, w, m, L))), (W = c);
		} else {
			const _ = t;
			(D = Ae(
				_.length > 1 ? _(o, { attrs: c, slots: l, emit: u }) : _(o, null),
			)),
				(W = t.props ? c : ol(c));
		}
	} catch (_) {
		(Ft.length = 0), Sn(_, e, 1), (D = ae(ve));
	}
	let p = D;
	if (W && M !== !1) {
		const _ = Object.keys(W),
			{ shapeFlag: N } = p;
		_.length && N & 7 && (i && _.some(ms) && (W = il(W, i)), (p = Ze(p, W)));
	}
	return (
		n.dirs && ((p = Ze(p)), (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
		n.transition && (p.transition = n.transition),
		(D = p),
		hn(J),
		D
	);
}
const ol = (e) => {
		let t;
		for (const n in e)
			(n === "class" || n === "style" || kt(n)) && ((t || (t = {}))[n] = e[n]);
		return t;
	},
	il = (e, t) => {
		const n = {};
		for (const s in e) (!ms(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
		return n;
	};
function ll(e, t, n) {
	const { props: s, children: r, component: o } = e,
		{ props: i, children: l, patchFlag: c } = t,
		u = o.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return s ? Js(s, i, u) : !!i;
		if (c & 8) {
			const d = t.dynamicProps;
			for (let h = 0; h < d.length; h++) {
				const m = d[h];
				if (i[m] !== s[m] && !An(u, m)) return !0;
			}
		}
	} else
		return (r || l) && (!l || !l.$stable)
			? !0
			: s === i
				? !1
				: s
					? i
						? Js(s, i, u)
						: !0
					: !!i;
	return !1;
}
function Js(e, t, n) {
	const s = Object.keys(t);
	if (s.length !== Object.keys(e).length) return !0;
	for (let r = 0; r < s.length; r++) {
		const o = s[r];
		if (t[o] !== e[o] && !An(n, o)) return !0;
	}
	return !1;
}
function cl({ vnode: e, parent: t }, n) {
	for (; t; ) {
		const s = t.subTree;
		if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
			((e = t.vnode).el = n), (t = t.parent);
		else break;
	}
}
const Is = "components";
function ja(e, t) {
	return fo(Is, e, !0, t) || e;
}
const uo = Symbol.for("v-ndc");
function Da(e) {
	return ne(e) ? fo(Is, e, !1) || e : e || uo;
}
function fo(e, t, n = !0, s = !1) {
	const r = fe || ce;
	if (r) {
		const o = r.type;
		if (e === Is) {
			const l = rc(o, !1);
			if (l && (l === t || l === Me(t) || l === wn(Me(t)))) return o;
		}
		const i = Qs(r[e] || o[e], t) || Qs(r.appContext[e], t);
		return !i && s ? o : i;
	}
}
function Qs(e, t) {
	return e && (e[t] || e[Me(t)] || e[wn(Me(t))]);
}
const al = (e) => e.__isSuspense;
function ho(e, t) {
	t && t.pendingBranch
		? B(e)
			? t.effects.push(...e)
			: t.effects.push(e)
		: tl(e);
}
const ul = Symbol.for("v-scx"),
	fl = () => Et(ul);
function po(e, t) {
	return On(e, null, t);
}
function Va(e, t) {
	return On(e, null, { flush: "post" });
}
const Jt = {};
function Xe(e, t, n) {
	return On(e, t, n);
}
function On(
	e,
	t,
	{ immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: l } = te,
) {
	if (t && o) {
		const I = t;
		t = (...V) => {
			I(...V), N();
		};
	}
	const c = ce,
		u = (I) => (s === !0 ? I : pt(I, s === !1 ? 1 : void 0));
	let d,
		h = !1,
		m = !1;
	if (
		(de(e)
			? ((d = () => e.value), (h = fn(e)))
			: bt(e)
				? ((d = () => u(e)), (h = !0))
				: B(e)
					? ((m = !0),
						(h = e.some((I) => bt(I) || fn(I))),
						(d = () =>
							e.map((I) => {
								if (de(I)) return I.value;
								if (bt(I)) return u(I);
								if (U(I)) return ze(I, c, 2);
							})))
					: U(e)
						? t
							? (d = () => ze(e, c, 2))
							: (d = () => (w && w(), Se(e, c, 3, [L])))
						: (d = xe),
		t && s)
	) {
		const I = d;
		d = () => pt(I());
	}
	let w,
		L = (I) => {
			w = p.onStop = () => {
				ze(I, c, 4), (w = p.onStop = void 0);
			};
		},
		M;
	if (Fn)
		if (
			((L = xe),
			t ? n && Se(t, c, 3, [d(), m ? [] : void 0, L]) : d(),
			r === "sync")
		) {
			const I = fl();
			M = I.__watcherHandles || (I.__watcherHandles = []);
		} else return xe;
	let D = m ? new Array(e.length).fill(Jt) : Jt;
	const W = () => {
		if (!(!p.active || !p.dirty))
			if (t) {
				const I = p.run();
				(s || h || (m ? I.some((V, R) => Qe(V, D[R])) : Qe(I, D))) &&
					(w && w(),
					Se(t, c, 3, [I, D === Jt ? void 0 : m && D[0] === Jt ? [] : D, L]),
					(D = I));
			} else p.run();
	};
	W.allowRecurse = !!t;
	let J;
	r === "sync"
		? (J = W)
		: r === "post"
			? (J = () => pe(W, c && c.suspense))
			: ((W.pre = !0), c && (W.id = c.uid), (J = () => Ls(W)));
	const p = new ws(d, xe, J),
		_ = kr(),
		N = () => {
			p.stop(), _ && _s(_.effects, p);
		};
	return (
		t
			? n
				? W()
				: (D = p.run())
			: r === "post"
				? pe(p.run.bind(p), c && c.suspense)
				: p.run(),
		M && M.push(N),
		N
	);
}
function dl(e, t, n) {
	const s = this.proxy,
		r = ne(e) ? (e.includes(".") ? go(s, e) : () => s[e]) : e.bind(s, s);
	let o;
	U(t) ? (o = t) : ((o = t.handler), (n = t));
	const i = Ut(this),
		l = On(r, o.bind(s), n);
	return i(), l;
}
function go(e, t) {
	const n = t.split(".");
	return () => {
		let s = e;
		for (let r = 0; r < n.length && s; r++) s = s[n[r]];
		return s;
	};
}
function pt(e, t, n = 0, s) {
	if (!Z(e) || e.__v_skip) return e;
	if (t && t > 0) {
		if (n >= t) return e;
		n++;
	}
	if (((s = s || new Set()), s.has(e))) return e;
	if ((s.add(e), de(e))) pt(e.value, t, n, s);
	else if (B(e)) for (let r = 0; r < e.length; r++) pt(e[r], t, n, s);
	else if (Fr(e) || _t(e))
		e.forEach((r) => {
			pt(r, t, n, s);
		});
	else if (jr(e)) for (const r in e) pt(e[r], t, n, s);
	return e;
}
function Ie(e, t, n, s) {
	const r = e.dirs,
		o = t && t.dirs;
	for (let i = 0; i < r.length; i++) {
		const l = r[i];
		o && (l.oldValue = o[i].value);
		let c = l.dir[s];
		c && (ut(), Se(c, n, 8, [e.el, l, e, t]), ft());
	}
}
const Ke = Symbol("_leaveCb"),
	Qt = Symbol("_enterCb");
function hl() {
	const e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: new Map(),
	};
	return (
		Tt(() => {
			e.isMounted = !0;
		}),
		wo(() => {
			e.isUnmounting = !0;
		}),
		e
	);
}
const we = [Function, Array],
	mo = {
		mode: String,
		appear: Boolean,
		persisted: Boolean,
		onBeforeEnter: we,
		onEnter: we,
		onAfterEnter: we,
		onEnterCancelled: we,
		onBeforeLeave: we,
		onLeave: we,
		onAfterLeave: we,
		onLeaveCancelled: we,
		onBeforeAppear: we,
		onAppear: we,
		onAfterAppear: we,
		onAppearCancelled: we,
	},
	pl = {
		name: "BaseTransition",
		props: mo,
		setup(e, { slots: t }) {
			const n = Nn(),
				s = hl();
			let r;
			return () => {
				const o = t.default && yo(t.default(), !0);
				if (!o || !o.length) return;
				let i = o[0];
				if (o.length > 1) {
					for (const M of o)
						if (M.type !== ve) {
							i = M;
							break;
						}
				}
				const l = Y(e),
					{ mode: c } = l;
				if (s.isLeaving) return kn(i);
				const u = Zs(i);
				if (!u) return kn(i);
				const d = os(u, l, s, n);
				is(u, d);
				const h = n.subTree,
					m = h && Zs(h);
				let w = !1;
				const { getTransitionKey: L } = u.type;
				if (L) {
					const M = L();
					r === void 0 ? (r = M) : M !== r && ((r = M), (w = !0));
				}
				if (m && m.type !== ve && (!ot(u, m) || w)) {
					const M = os(m, l, s, n);
					if ((is(m, M), c === "out-in"))
						return (
							(s.isLeaving = !0),
							(M.afterLeave = () => {
								(s.isLeaving = !1),
									n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
							}),
							kn(i)
						);
					c === "in-out" &&
						u.type !== ve &&
						(M.delayLeave = (D, W, J) => {
							const p = _o(s, m);
							(p[String(m.key)] = m),
								(D[Ke] = () => {
									W(), (D[Ke] = void 0), delete d.delayedLeave;
								}),
								(d.delayedLeave = J);
						});
				}
				return i;
			};
		},
	},
	gl = pl;
function _o(e, t) {
	const { leavingVNodes: n } = e;
	let s = n.get(t.type);
	return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function os(e, t, n, s) {
	const {
			appear: r,
			mode: o,
			persisted: i = !1,
			onBeforeEnter: l,
			onEnter: c,
			onAfterEnter: u,
			onEnterCancelled: d,
			onBeforeLeave: h,
			onLeave: m,
			onAfterLeave: w,
			onLeaveCancelled: L,
			onBeforeAppear: M,
			onAppear: D,
			onAfterAppear: W,
			onAppearCancelled: J,
		} = t,
		p = String(e.key),
		_ = _o(n, e),
		N = (R, T) => {
			R && Se(R, s, 9, T);
		},
		I = (R, T) => {
			const S = T[1];
			N(R, T),
				B(R) ? R.every((K) => K.length <= 1) && S() : R.length <= 1 && S();
		},
		V = {
			mode: o,
			persisted: i,
			beforeEnter(R) {
				let T = l;
				if (!n.isMounted)
					if (r) T = M || l;
					else return;
				R[Ke] && R[Ke](!0);
				const S = _[p];
				S && ot(e, S) && S.el[Ke] && S.el[Ke](), N(T, [R]);
			},
			enter(R) {
				let T = c,
					S = u,
					K = d;
				if (!n.isMounted)
					if (r) (T = D || c), (S = W || u), (K = J || d);
					else return;
				let O = !1;
				const q = (R[Qt] = (re) => {
					O ||
						((O = !0),
						re ? N(K, [R]) : N(S, [R]),
						V.delayedLeave && V.delayedLeave(),
						(R[Qt] = void 0));
				});
				T ? I(T, [R, q]) : q();
			},
			leave(R, T) {
				const S = String(e.key);
				if ((R[Qt] && R[Qt](!0), n.isUnmounting)) return T();
				N(h, [R]);
				let K = !1;
				const O = (R[Ke] = (q) => {
					K ||
						((K = !0),
						T(),
						q ? N(L, [R]) : N(w, [R]),
						(R[Ke] = void 0),
						_[S] === e && delete _[S]);
				});
				(_[S] = e), m ? I(m, [R, O]) : O();
			},
			clone(R) {
				return os(R, t, n, s);
			},
		};
	return V;
}
function kn(e) {
	if (Ln(e)) return (e = Ze(e)), (e.children = null), e;
}
function Zs(e) {
	return Ln(e) ? (e.children ? e.children[0] : void 0) : e;
}
function is(e, t) {
	e.shapeFlag & 6 && e.component
		? is(e.component.subTree, t)
		: e.shapeFlag & 128
			? ((e.ssContent.transition = t.clone(e.ssContent)),
				(e.ssFallback.transition = t.clone(e.ssFallback)))
			: (e.transition = t);
}
function yo(e, t = !1, n) {
	let s = [],
		r = 0;
	for (let o = 0; o < e.length; o++) {
		let i = e[o];
		const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
		i.type === ge
			? (i.patchFlag & 128 && r++, (s = s.concat(yo(i.children, t, l))))
			: (t || i.type !== ve) && s.push(l != null ? Ze(i, { key: l }) : i);
	}
	if (r > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2;
	return s;
} /*! #__NO_SIDE_EFFECTS__ */
function bo(e, t) {
	return U(e) ? oe({ name: e.name }, t, { setup: e }) : e;
}
const wt = (e) => !!e.type.__asyncLoader,
	Ln = (e) => e.type.__isKeepAlive;
function ml(e, t) {
	vo(e, "a", t);
}
function _l(e, t) {
	vo(e, "da", t);
}
function vo(e, t, n = ce) {
	const s =
		e.__wdc ||
		(e.__wdc = () => {
			let r = n;
			for (; r; ) {
				if (r.isDeactivated) return;
				r = r.parent;
			}
			return e();
		});
	if ((In(t, s, n), n)) {
		let r = n.parent;
		for (; r && r.parent; )
			Ln(r.parent.vnode) && yl(s, t, n, r), (r = r.parent);
	}
}
function yl(e, t, n, s) {
	const r = In(t, e, s, !0);
	Pn(() => {
		_s(s[t], r);
	}, n);
}
function In(e, t, n = ce, s = !1) {
	if (n) {
		const r = n[e] || (n[e] = []),
			o =
				t.__weh ||
				(t.__weh = (...i) => {
					if (n.isUnmounted) return;
					ut();
					const l = Ut(n),
						c = Se(t, n, e, i);
					return l(), ft(), c;
				});
		return s ? r.unshift(o) : r.push(o), o;
	}
}
const je =
		(e) =>
		(t, n = ce) =>
			(!Fn || e === "sp") && In(e, (...s) => t(...s), n),
	bl = je("bm"),
	Tt = je("m"),
	vl = je("bu"),
	wl = je("u"),
	wo = je("bum"),
	Pn = je("um"),
	El = je("sp"),
	Cl = je("rtg"),
	xl = je("rtc");
function Sl(e, t = ce) {
	In("ec", e, t);
}
function Ba(e, t, n, s) {
	let r;
	const o = n && n[s];
	if (B(e) || ne(e)) {
		r = new Array(e.length);
		for (let i = 0, l = e.length; i < l; i++)
			r[i] = t(e[i], i, void 0, o && o[i]);
	} else if (typeof e == "number") {
		r = new Array(e);
		for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
	} else if (Z(e))
		if (e[Symbol.iterator])
			r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
		else {
			const i = Object.keys(e);
			r = new Array(i.length);
			for (let l = 0, c = i.length; l < c; l++) {
				const u = i[l];
				r[l] = t(e[u], u, l, o && o[l]);
			}
		}
	else r = [];
	return n && (n[s] = r), r;
}
function ka(e, t, n = {}, s, r) {
	if (fe.isCE || (fe.parent && wt(fe.parent) && fe.parent.isCE))
		return t !== "default" && (n.name = t), ae("slot", n, s && s());
	let o = e[t];
	o && o._c && (o._d = !1), Mo();
	const i = o && Eo(o(n)),
		l = Fo(
			ge,
			{ key: n.key || (i && i.key) || `_${t}` },
			i || (s ? s() : []),
			i && e._ === 1 ? 64 : -2,
		);
	return (
		!r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
		o && o._c && (o._d = !0),
		l
	);
}
function Eo(e) {
	return e.some((t) =>
		mn(t) ? !(t.type === ve || (t.type === ge && !Eo(t.children))) : !0,
	)
		? e
		: null;
}
function Ua(e, t) {
	const n = {};
	for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : on(s)] = e[s];
	return n;
}
const ls = (e) => (e ? (Do(e) ? Fs(e) || e.proxy : ls(e.parent)) : null),
	Pt = oe(Object.create(null), {
		$: (e) => e,
		$el: (e) => e.vnode.el,
		$data: (e) => e.data,
		$props: (e) => e.props,
		$attrs: (e) => e.attrs,
		$slots: (e) => e.slots,
		$refs: (e) => e.refs,
		$parent: (e) => ls(e.parent),
		$root: (e) => ls(e.root),
		$emit: (e) => e.emit,
		$options: (e) => Ps(e),
		$forceUpdate: (e) =>
			e.f ||
			(e.f = () => {
				(e.effect.dirty = !0), Ls(e.update);
			}),
		$nextTick: (e) => e.n || (e.n = Tn.bind(e.proxy)),
		$watch: (e) => dl.bind(e),
	}),
	Un = (e, t) => e !== te && !e.__isScriptSetup && X(e, t),
	Tl = {
		get({ _: e }, t) {
			const {
				ctx: n,
				setupState: s,
				data: r,
				props: o,
				accessCache: i,
				type: l,
				appContext: c,
			} = e;
			let u;
			if (t[0] !== "$") {
				const w = i[t];
				if (w !== void 0)
					switch (w) {
						case 1:
							return s[t];
						case 2:
							return r[t];
						case 4:
							return n[t];
						case 3:
							return o[t];
					}
				else {
					if (Un(s, t)) return (i[t] = 1), s[t];
					if (r !== te && X(r, t)) return (i[t] = 2), r[t];
					if ((u = e.propsOptions[0]) && X(u, t)) return (i[t] = 3), o[t];
					if (n !== te && X(n, t)) return (i[t] = 4), n[t];
					cs && (i[t] = 0);
				}
			}
			const d = Pt[t];
			let h, m;
			if (d) return t === "$attrs" && _e(e, "get", t), d(e);
			if ((h = l.__cssModules) && (h = h[t])) return h;
			if (n !== te && X(n, t)) return (i[t] = 4), n[t];
			if (((m = c.config.globalProperties), X(m, t))) return m[t];
		},
		set({ _: e }, t, n) {
			const { data: s, setupState: r, ctx: o } = e;
			return Un(r, t)
				? ((r[t] = n), !0)
				: s !== te && X(s, t)
					? ((s[t] = n), !0)
					: X(e.props, t) || (t[0] === "$" && t.slice(1) in e)
						? !1
						: ((o[t] = n), !0);
		},
		has(
			{
				_: {
					data: e,
					setupState: t,
					accessCache: n,
					ctx: s,
					appContext: r,
					propsOptions: o,
				},
			},
			i,
		) {
			let l;
			return (
				!!n[i] ||
				(e !== te && X(e, i)) ||
				Un(t, i) ||
				((l = o[0]) && X(l, i)) ||
				X(s, i) ||
				X(Pt, i) ||
				X(r.config.globalProperties, i)
			);
		},
		defineProperty(e, t, n) {
			return (
				n.get != null
					? (e._.accessCache[t] = 0)
					: X(n, "value") && this.set(e, t, n.value, null),
				Reflect.defineProperty(e, t, n)
			);
		},
	};
function Ka() {
	return Al().slots;
}
function Al() {
	const e = Nn();
	return e.setupContext || (e.setupContext = Bo(e));
}
function er(e) {
	return B(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let cs = !0;
function Rl(e) {
	const t = Ps(e),
		n = e.proxy,
		s = e.ctx;
	(cs = !1), t.beforeCreate && tr(t.beforeCreate, e, "bc");
	const {
		data: r,
		computed: o,
		methods: i,
		watch: l,
		provide: c,
		inject: u,
		created: d,
		beforeMount: h,
		mounted: m,
		beforeUpdate: w,
		updated: L,
		activated: M,
		deactivated: D,
		beforeDestroy: W,
		beforeUnmount: J,
		destroyed: p,
		unmounted: _,
		render: N,
		renderTracked: I,
		renderTriggered: V,
		errorCaptured: R,
		serverPrefetch: T,
		expose: S,
		inheritAttrs: K,
		components: O,
		directives: q,
		filters: re,
	} = t;
	if ((u && Ol(u, s, null), i))
		for (const z in i) {
			const $ = i[z];
			U($) && (s[z] = $.bind(n));
		}
	if (r) {
		const z = r.call(n, n);
		Z(z) && (e.data = Cn(z));
	}
	if (((cs = !0), o))
		for (const z in o) {
			const $ = o[z],
				Ne = U($) ? $.bind(n, n) : U($.get) ? $.get.bind(n, n) : xe,
				Kt = !U($) && U($.set) ? $.set.bind(n) : xe,
				et = se({ get: Ne, set: Kt });
			Object.defineProperty(s, z, {
				enumerable: !0,
				configurable: !0,
				get: () => et.value,
				set: (Oe) => (et.value = Oe),
			});
		}
	if (l) for (const z in l) Co(l[z], s, n, z);
	if (c) {
		const z = U(c) ? c.call(n) : c;
		Reflect.ownKeys(z).forEach(($) => {
			Fl($, z[$]);
		});
	}
	d && tr(d, e, "c");
	function H(z, $) {
		B($) ? $.forEach((Ne) => z(Ne.bind(n))) : $ && z($.bind(n));
	}
	if (
		(H(bl, h),
		H(Tt, m),
		H(vl, w),
		H(wl, L),
		H(ml, M),
		H(_l, D),
		H(Sl, R),
		H(xl, I),
		H(Cl, V),
		H(wo, J),
		H(Pn, _),
		H(El, T),
		B(S))
	)
		if (S.length) {
			const z = e.exposed || (e.exposed = {});
			S.forEach(($) => {
				Object.defineProperty(z, $, {
					get: () => n[$],
					set: (Ne) => (n[$] = Ne),
				});
			});
		} else e.exposed || (e.exposed = {});
	N && e.render === xe && (e.render = N),
		K != null && (e.inheritAttrs = K),
		O && (e.components = O),
		q && (e.directives = q);
}
function Ol(e, t, n = xe) {
	B(e) && (e = as(e));
	for (const s in e) {
		const r = e[s];
		let o;
		Z(r)
			? "default" in r
				? (o = Et(r.from || s, r.default, !0))
				: (o = Et(r.from || s))
			: (o = Et(r)),
			de(o)
				? Object.defineProperty(t, s, {
						enumerable: !0,
						configurable: !0,
						get: () => o.value,
						set: (i) => (o.value = i),
					})
				: (t[s] = o);
	}
}
function tr(e, t, n) {
	Se(B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Co(e, t, n, s) {
	const r = s.includes(".") ? go(n, s) : () => n[s];
	if (ne(e)) {
		const o = t[e];
		U(o) && Xe(r, o);
	} else if (U(e)) Xe(r, e.bind(n));
	else if (Z(e))
		if (B(e)) e.forEach((o) => Co(o, t, n, s));
		else {
			const o = U(e.handler) ? e.handler.bind(n) : t[e.handler];
			U(o) && Xe(r, o, e);
		}
}
function Ps(e) {
	const t = e.type,
		{ mixins: n, extends: s } = t,
		{
			mixins: r,
			optionsCache: o,
			config: { optionMergeStrategies: i },
		} = e.appContext,
		l = o.get(t);
	let c;
	return (
		l
			? (c = l)
			: !r.length && !n && !s
				? (c = t)
				: ((c = {}),
					r.length && r.forEach((u) => pn(c, u, i, !0)),
					pn(c, t, i)),
		Z(t) && o.set(t, c),
		c
	);
}
function pn(e, t, n, s = !1) {
	const { mixins: r, extends: o } = t;
	o && pn(e, o, n, !0), r && r.forEach((i) => pn(e, i, n, !0));
	for (const i in t)
		if (!(s && i === "expose")) {
			const l = Ll[i] || (n && n[i]);
			e[i] = l ? l(e[i], t[i]) : t[i];
		}
	return e;
}
const Ll = {
	data: nr,
	props: sr,
	emits: sr,
	methods: Ot,
	computed: Ot,
	beforeCreate: he,
	created: he,
	beforeMount: he,
	mounted: he,
	beforeUpdate: he,
	updated: he,
	beforeDestroy: he,
	beforeUnmount: he,
	destroyed: he,
	unmounted: he,
	activated: he,
	deactivated: he,
	errorCaptured: he,
	serverPrefetch: he,
	components: Ot,
	directives: Ot,
	watch: Pl,
	provide: nr,
	inject: Il,
};
function nr(e, t) {
	return t
		? e
			? function () {
					return oe(
						U(e) ? e.call(this, this) : e,
						U(t) ? t.call(this, this) : t,
					);
				}
			: t
		: e;
}
function Il(e, t) {
	return Ot(as(e), as(t));
}
function as(e) {
	if (B(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function he(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Ot(e, t) {
	return e ? oe(Object.create(null), e, t) : t;
}
function sr(e, t) {
	return e
		? B(e) && B(t)
			? [...new Set([...e, ...t])]
			: oe(Object.create(null), er(e), er(t ?? {}))
		: t;
}
function Pl(e, t) {
	if (!e) return t;
	if (!t) return e;
	const n = oe(Object.create(null), e);
	for (const s in t) n[s] = he(e[s], t[s]);
	return n;
}
function xo() {
	return {
		app: null,
		config: {
			isNativeTag: ii,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {},
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap(),
		propsCache: new WeakMap(),
		emitsCache: new WeakMap(),
	};
}
let Ml = 0;
function Nl(e, t) {
	return function (s, r = null) {
		U(s) || (s = oe({}, s)), r != null && !Z(r) && (r = null);
		const o = xo(),
			i = new WeakSet();
		let l = !1;
		const c = (o.app = {
			_uid: Ml++,
			_component: s,
			_props: r,
			_container: null,
			_context: o,
			_instance: null,
			version: ic,
			get config() {
				return o.config;
			},
			set config(u) {},
			use(u, ...d) {
				return (
					i.has(u) ||
						(u && U(u.install)
							? (i.add(u), u.install(c, ...d))
							: U(u) && (i.add(u), u(c, ...d))),
					c
				);
			},
			mixin(u) {
				return o.mixins.includes(u) || o.mixins.push(u), c;
			},
			component(u, d) {
				return d ? ((o.components[u] = d), c) : o.components[u];
			},
			directive(u, d) {
				return d ? ((o.directives[u] = d), c) : o.directives[u];
			},
			mount(u, d, h) {
				if (!l) {
					const m = ae(s, r);
					return (
						(m.appContext = o),
						h === !0 ? (h = "svg") : h === !1 && (h = void 0),
						d && t ? t(m, u) : e(m, u, h),
						(l = !0),
						(c._container = u),
						(u.__vue_app__ = c),
						Fs(m.component) || m.component.proxy
					);
				}
			},
			unmount() {
				l && (e(null, c._container), delete c._container.__vue_app__);
			},
			provide(u, d) {
				return (o.provides[u] = d), c;
			},
			runWithContext(u) {
				const d = Mt;
				Mt = c;
				try {
					return u();
				} finally {
					Mt = d;
				}
			},
		});
		return c;
	};
}
let Mt = null;
function Fl(e, t) {
	if (ce) {
		let n = ce.provides;
		const s = ce.parent && ce.parent.provides;
		s === n && (n = ce.provides = Object.create(s)), (n[e] = t);
	}
}
function Et(e, t, n = !1) {
	const s = ce || fe;
	if (s || Mt) {
		const r = s
			? s.parent == null
				? s.vnode.appContext && s.vnode.appContext.provides
				: s.parent.provides
			: Mt._context.provides;
		if (r && e in r) return r[e];
		if (arguments.length > 1) return n && U(t) ? t.call(s && s.proxy) : t;
	}
}
function $l(e, t, n, s = !1) {
	const r = {},
		o = {};
	an(o, Mn, 1), (e.propsDefaults = Object.create(null)), So(e, t, r, o);
	for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
	n ? (e.props = s ? r : ki(r)) : e.type.props ? (e.props = r) : (e.props = o),
		(e.attrs = o);
}
function Hl(e, t, n, s) {
	const {
			props: r,
			attrs: o,
			vnode: { patchFlag: i },
		} = e,
		l = Y(r),
		[c] = e.propsOptions;
	let u = !1;
	if ((s || i > 0) && !(i & 16)) {
		if (i & 8) {
			const d = e.vnode.dynamicProps;
			for (let h = 0; h < d.length; h++) {
				let m = d[h];
				if (An(e.emitsOptions, m)) continue;
				const w = t[m];
				if (c)
					if (X(o, m)) w !== o[m] && ((o[m] = w), (u = !0));
					else {
						const L = Me(m);
						r[L] = us(c, l, L, w, e, !1);
					}
				else w !== o[m] && ((o[m] = w), (u = !0));
			}
		}
	} else {
		So(e, t, r, o) && (u = !0);
		let d;
		for (const h in l)
			(!t || (!X(t, h) && ((d = at(h)) === h || !X(t, d)))) &&
				(c
					? n &&
						(n[h] !== void 0 || n[d] !== void 0) &&
						(r[h] = us(c, l, h, void 0, e, !0))
					: delete r[h]);
		if (o !== l) for (const h in o) (!t || !X(t, h)) && (delete o[h], (u = !0));
	}
	u && $e(e, "set", "$attrs");
}
function So(e, t, n, s) {
	const [r, o] = e.propsOptions;
	let i = !1,
		l;
	if (t)
		for (let c in t) {
			if (yt(c)) continue;
			const u = t[c];
			let d;
			r && X(r, (d = Me(c)))
				? !o || !o.includes(d)
					? (n[d] = u)
					: ((l || (l = {}))[d] = u)
				: An(e.emitsOptions, c) ||
					((!(c in s) || u !== s[c]) && ((s[c] = u), (i = !0)));
		}
	if (o) {
		const c = Y(n),
			u = l || te;
		for (let d = 0; d < o.length; d++) {
			const h = o[d];
			n[h] = us(r, c, h, u[h], e, !X(u, h));
		}
	}
	return i;
}
function us(e, t, n, s, r, o) {
	const i = e[n];
	if (i != null) {
		const l = X(i, "default");
		if (l && s === void 0) {
			const c = i.default;
			if (i.type !== Function && !i.skipFactory && U(c)) {
				const { propsDefaults: u } = r;
				if (n in u) s = u[n];
				else {
					const d = Ut(r);
					(s = u[n] = c.call(null, t)), d();
				}
			} else s = c;
		}
		i[0] &&
			(o && !l ? (s = !1) : i[1] && (s === "" || s === at(n)) && (s = !0));
	}
	return s;
}
function To(e, t, n = !1) {
	const s = t.propsCache,
		r = s.get(e);
	if (r) return r;
	const o = e.props,
		i = {},
		l = [];
	let c = !1;
	if (!U(e)) {
		const d = (h) => {
			c = !0;
			const [m, w] = To(h, t, !0);
			oe(i, m), w && l.push(...w);
		};
		!n && t.mixins.length && t.mixins.forEach(d),
			e.extends && d(e.extends),
			e.mixins && e.mixins.forEach(d);
	}
	if (!o && !c) return Z(e) && s.set(e, mt), mt;
	if (B(o))
		for (let d = 0; d < o.length; d++) {
			const h = Me(o[d]);
			rr(h) && (i[h] = te);
		}
	else if (o)
		for (const d in o) {
			const h = Me(d);
			if (rr(h)) {
				const m = o[d],
					w = (i[h] = B(m) || U(m) ? { type: m } : oe({}, m));
				if (w) {
					const L = lr(Boolean, w.type),
						M = lr(String, w.type);
					(w[0] = L > -1),
						(w[1] = M < 0 || L < M),
						(L > -1 || X(w, "default")) && l.push(h);
				}
			}
		}
	const u = [i, l];
	return Z(e) && s.set(e, u), u;
}
function rr(e) {
	return e[0] !== "$" && !yt(e);
}
function or(e) {
	const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
	return t ? t[2] : e === null ? "null" : "";
}
function ir(e, t) {
	return or(e) === or(t);
}
function lr(e, t) {
	return B(t) ? t.findIndex((n) => ir(n, e)) : U(t) && ir(t, e) ? 0 : -1;
}
const Ao = (e) => e[0] === "_" || e === "$stable",
	Ms = (e) => (B(e) ? e.map(Ae) : [Ae(e)]),
	jl = (e, t, n) => {
		if (t._n) return t;
		const s = rl((...r) => Ms(t(...r)), n);
		return (s._c = !1), s;
	},
	Ro = (e, t, n) => {
		const s = e._ctx;
		for (const r in e) {
			if (Ao(r)) continue;
			const o = e[r];
			if (U(o)) t[r] = jl(r, o, s);
			else if (o != null) {
				const i = Ms(o);
				t[r] = () => i;
			}
		}
	},
	Oo = (e, t) => {
		const n = Ms(t);
		e.slots.default = () => n;
	},
	Dl = (e, t) => {
		if (e.vnode.shapeFlag & 32) {
			const n = t._;
			n ? ((e.slots = Y(t)), an(t, "_", n)) : Ro(t, (e.slots = {}));
		} else (e.slots = {}), t && Oo(e, t);
		an(e.slots, Mn, 1);
	},
	Vl = (e, t, n) => {
		const { vnode: s, slots: r } = e;
		let o = !0,
			i = te;
		if (s.shapeFlag & 32) {
			const l = t._;
			l
				? n && l === 1
					? (o = !1)
					: (oe(r, t), !n && l === 1 && delete r._)
				: ((o = !t.$stable), Ro(t, r)),
				(i = t);
		} else t && (Oo(e, t), (i = { default: 1 }));
		if (o) for (const l in r) !Ao(l) && i[l] == null && delete r[l];
	};
function gn(e, t, n, s, r = !1) {
	if (B(e)) {
		e.forEach((m, w) => gn(m, t && (B(t) ? t[w] : t), n, s, r));
		return;
	}
	if (wt(s) && !r) return;
	const o = s.shapeFlag & 4 ? Fs(s.component) || s.component.proxy : s.el,
		i = r ? null : o,
		{ i: l, r: c } = e,
		u = t && t.r,
		d = l.refs === te ? (l.refs = {}) : l.refs,
		h = l.setupState;
	if (
		(u != null &&
			u !== c &&
			(ne(u)
				? ((d[u] = null), X(h, u) && (h[u] = null))
				: de(u) && (u.value = null)),
		U(c))
	)
		ze(c, l, 12, [i, d]);
	else {
		const m = ne(c),
			w = de(c);
		if (m || w) {
			const L = () => {
				if (e.f) {
					const M = m ? (X(h, c) ? h[c] : d[c]) : c.value;
					r
						? B(M) && _s(M, o)
						: B(M)
							? M.includes(o) || M.push(o)
							: m
								? ((d[c] = [o]), X(h, c) && (h[c] = d[c]))
								: ((c.value = [o]), e.k && (d[e.k] = c.value));
				} else
					m
						? ((d[c] = i), X(h, c) && (h[c] = i))
						: w && ((c.value = i), e.k && (d[e.k] = i));
			};
			i ? ((L.id = -1), pe(L, n)) : L();
		}
	}
}
let Ve = !1;
const Bl = (e) =>
		e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
	kl = (e) => e.namespaceURI.includes("MathML"),
	Zt = (e) => {
		if (Bl(e)) return "svg";
		if (kl(e)) return "mathml";
	},
	en = (e) => e.nodeType === 8;
function Ul(e) {
	const {
			mt: t,
			p: n,
			o: {
				patchProp: s,
				createText: r,
				nextSibling: o,
				parentNode: i,
				remove: l,
				insert: c,
				createComment: u,
			},
		} = e,
		d = (p, _) => {
			if (!_.hasChildNodes()) {
				n(null, p, _), dn(), (_._vnode = p);
				return;
			}
			(Ve = !1),
				h(_.firstChild, p, null, null, null),
				dn(),
				(_._vnode = p),
				Ve && console.error("Hydration completed but contains mismatches.");
		},
		h = (p, _, N, I, V, R = !1) => {
			const T = en(p) && p.data === "[",
				S = () => M(p, _, N, I, V, T),
				{ type: K, ref: O, shapeFlag: q, patchFlag: re } = _;
			let le = p.nodeType;
			(_.el = p), re === -2 && ((R = !1), (_.dynamicChildren = null));
			let H = null;
			switch (K) {
				case xt:
					le !== 3
						? _.children === ""
							? (c((_.el = r("")), i(p), p), (H = p))
							: (H = S())
						: (p.data !== _.children && ((Ve = !0), (p.data = _.children)),
							(H = o(p)));
					break;
				case ve:
					J(p)
						? ((H = o(p)), W((_.el = p.content.firstChild), p, N))
						: le !== 8 || T
							? (H = S())
							: (H = o(p));
					break;
				case Nt:
					if ((T && ((p = o(p)), (le = p.nodeType)), le === 1 || le === 3)) {
						H = p;
						const z = !_.children.length;
						for (let $ = 0; $ < _.staticCount; $++)
							z && (_.children += H.nodeType === 1 ? H.outerHTML : H.data),
								$ === _.staticCount - 1 && (_.anchor = H),
								(H = o(H));
						return T ? o(H) : H;
					} else S();
					break;
				case ge:
					T ? (H = L(p, _, N, I, V, R)) : (H = S());
					break;
				default:
					if (q & 1)
						(le !== 1 || _.type.toLowerCase() !== p.tagName.toLowerCase()) &&
						!J(p)
							? (H = S())
							: (H = m(p, _, N, I, V, R));
					else if (q & 6) {
						_.slotScopeIds = V;
						const z = i(p);
						if (
							(T
								? (H = D(p))
								: en(p) && p.data === "teleport start"
									? (H = D(p, p.data, "teleport end"))
									: (H = o(p)),
							t(_, z, null, N, I, Zt(z), R),
							wt(_))
						) {
							let $;
							T
								? (($ = ae(ge)),
									($.anchor = H ? H.previousSibling : z.lastChild))
								: ($ = p.nodeType === 3 ? jo("") : ae("div")),
								($.el = p),
								(_.component.subTree = $);
						}
					} else
						q & 64
							? le !== 8
								? (H = S())
								: (H = _.type.hydrate(p, _, N, I, V, R, e, w))
							: q & 128 &&
								(H = _.type.hydrate(p, _, N, I, Zt(i(p)), V, R, e, h));
			}
			return O != null && gn(O, null, I, _), H;
		},
		m = (p, _, N, I, V, R) => {
			R = R || !!_.dynamicChildren;
			const {
					type: T,
					props: S,
					patchFlag: K,
					shapeFlag: O,
					dirs: q,
					transition: re,
				} = _,
				le = T === "input" || T === "option";
			if (le || K !== -1) {
				q && Ie(_, null, N, "created");
				let H = !1;
				if (J(p)) {
					H = Lo(I, re) && N && N.vnode.props && N.vnode.props.appear;
					const $ = p.content.firstChild;
					H && re.beforeEnter($), W($, p, N), (_.el = p = $);
				}
				if (O & 16 && !(S && (S.innerHTML || S.textContent))) {
					let $ = w(p.firstChild, _, p, N, I, V, R);
					for (; $; ) {
						Ve = !0;
						const Ne = $;
						($ = $.nextSibling), l(Ne);
					}
				} else
					O & 8 &&
						p.textContent !== _.children &&
						((Ve = !0), (p.textContent = _.children));
				if (S)
					if (le || !R || K & 48)
						for (const $ in S)
							((le && ($.endsWith("value") || $ === "indeterminate")) ||
								(kt($) && !yt($)) ||
								$[0] === ".") &&
								s(p, $, null, S[$], void 0, void 0, N);
					else S.onClick && s(p, "onClick", null, S.onClick, void 0, void 0, N);
				let z;
				(z = S && S.onVnodeBeforeMount) && Ee(z, N, _),
					q && Ie(_, null, N, "beforeMount"),
					((z = S && S.onVnodeMounted) || q || H) &&
						ho(() => {
							z && Ee(z, N, _),
								H && re.enter(p),
								q && Ie(_, null, N, "mounted");
						}, I);
			}
			return p.nextSibling;
		},
		w = (p, _, N, I, V, R, T) => {
			T = T || !!_.dynamicChildren;
			const S = _.children,
				K = S.length;
			for (let O = 0; O < K; O++) {
				const q = T ? S[O] : (S[O] = Ae(S[O]));
				if (p) p = h(p, q, I, V, R, T);
				else {
					if (q.type === xt && !q.children) continue;
					(Ve = !0), n(null, q, N, null, I, V, Zt(N), R);
				}
			}
			return p;
		},
		L = (p, _, N, I, V, R) => {
			const { slotScopeIds: T } = _;
			T && (V = V ? V.concat(T) : T);
			const S = i(p),
				K = w(o(p), _, S, N, I, V, R);
			return K && en(K) && K.data === "]"
				? o((_.anchor = K))
				: ((Ve = !0), c((_.anchor = u("]")), S, K), K);
		},
		M = (p, _, N, I, V, R) => {
			if (((Ve = !0), (_.el = null), R)) {
				const K = D(p);
				for (;;) {
					const O = o(p);
					if (O && O !== K) l(O);
					else break;
				}
			}
			const T = o(p),
				S = i(p);
			return l(p), n(null, _, S, T, N, I, Zt(S), V), T;
		},
		D = (p, _ = "[", N = "]") => {
			let I = 0;
			for (; p; )
				if (((p = o(p)), p && en(p) && (p.data === _ && I++, p.data === N))) {
					if (I === 0) return o(p);
					I--;
				}
			return p;
		},
		W = (p, _, N) => {
			const I = _.parentNode;
			I && I.replaceChild(p, _);
			let V = N;
			for (; V; )
				V.vnode.el === _ && (V.vnode.el = V.subTree.el = p), (V = V.parent);
		},
		J = (p) => p.nodeType === 1 && p.tagName.toLowerCase() === "template";
	return [d, h];
}
const pe = ho;
function Kl(e) {
	return Wl(e, Ul);
}
function Wl(e, t) {
	const n = Dr();
	n.__VUE__ = !0;
	const {
			insert: s,
			remove: r,
			patchProp: o,
			createElement: i,
			createText: l,
			createComment: c,
			setText: u,
			setElementText: d,
			parentNode: h,
			nextSibling: m,
			setScopeId: w = xe,
			insertStaticContent: L,
		} = e,
		M = (
			a,
			f,
			g,
			y = null,
			b = null,
			C = null,
			A = void 0,
			E = null,
			x = !!f.dynamicChildren,
		) => {
			if (a === f) return;
			a && !ot(a, f) && ((y = Wt(a)), Oe(a, b, C, !0), (a = null)),
				f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null));
			const { type: v, ref: P, shapeFlag: j } = f;
			switch (v) {
				case xt:
					D(a, f, g, y);
					break;
				case ve:
					W(a, f, g, y);
					break;
				case Nt:
					a == null && J(f, g, y, A);
					break;
				case ge:
					O(a, f, g, y, b, C, A, E, x);
					break;
				default:
					j & 1
						? N(a, f, g, y, b, C, A, E, x)
						: j & 6
							? q(a, f, g, y, b, C, A, E, x)
							: (j & 64 || j & 128) && v.process(a, f, g, y, b, C, A, E, x, dt);
			}
			P != null && b && gn(P, a && a.ref, C, f || a, !f);
		},
		D = (a, f, g, y) => {
			if (a == null) s((f.el = l(f.children)), g, y);
			else {
				const b = (f.el = a.el);
				f.children !== a.children && u(b, f.children);
			}
		},
		W = (a, f, g, y) => {
			a == null ? s((f.el = c(f.children || "")), g, y) : (f.el = a.el);
		},
		J = (a, f, g, y) => {
			[a.el, a.anchor] = L(a.children, f, g, y, a.el, a.anchor);
		},
		p = ({ el: a, anchor: f }, g, y) => {
			let b;
			for (; a && a !== f; ) (b = m(a)), s(a, g, y), (a = b);
			s(f, g, y);
		},
		_ = ({ el: a, anchor: f }) => {
			let g;
			for (; a && a !== f; ) (g = m(a)), r(a), (a = g);
			r(f);
		},
		N = (a, f, g, y, b, C, A, E, x) => {
			f.type === "svg" ? (A = "svg") : f.type === "math" && (A = "mathml"),
				a == null ? I(f, g, y, b, C, A, E, x) : T(a, f, b, C, A, E, x);
		},
		I = (a, f, g, y, b, C, A, E) => {
			let x, v;
			const { props: P, shapeFlag: j, transition: F, dirs: k } = a;
			if (
				((x = a.el = i(a.type, C, P && P.is, P)),
				j & 8
					? d(x, a.children)
					: j & 16 && R(a.children, x, null, y, b, Kn(a, C), A, E),
				k && Ie(a, null, y, "created"),
				V(x, a, a.scopeId, A, y),
				P)
			) {
				for (const Q in P)
					Q !== "value" &&
						!yt(Q) &&
						o(x, Q, null, P[Q], C, a.children, y, b, Fe);
				"value" in P && o(x, "value", null, P.value, C),
					(v = P.onVnodeBeforeMount) && Ee(v, y, a);
			}
			k && Ie(a, null, y, "beforeMount");
			const G = Lo(b, F);
			G && F.beforeEnter(x),
				s(x, f, g),
				((v = P && P.onVnodeMounted) || G || k) &&
					pe(() => {
						v && Ee(v, y, a), G && F.enter(x), k && Ie(a, null, y, "mounted");
					}, b);
		},
		V = (a, f, g, y, b) => {
			if ((g && w(a, g), y)) for (let C = 0; C < y.length; C++) w(a, y[C]);
			if (b) {
				let C = b.subTree;
				if (f === C) {
					const A = b.vnode;
					V(a, A, A.scopeId, A.slotScopeIds, b.parent);
				}
			}
		},
		R = (a, f, g, y, b, C, A, E, x = 0) => {
			for (let v = x; v < a.length; v++) {
				const P = (a[v] = E ? We(a[v]) : Ae(a[v]));
				M(null, P, f, g, y, b, C, A, E);
			}
		},
		T = (a, f, g, y, b, C, A) => {
			const E = (f.el = a.el);
			let { patchFlag: x, dynamicChildren: v, dirs: P } = f;
			x |= a.patchFlag & 16;
			const j = a.props || te,
				F = f.props || te;
			let k;
			if (
				(g && tt(g, !1),
				(k = F.onVnodeBeforeUpdate) && Ee(k, g, f, a),
				P && Ie(f, a, g, "beforeUpdate"),
				g && tt(g, !0),
				v
					? S(a.dynamicChildren, v, E, g, y, Kn(f, b), C)
					: A || $(a, f, E, null, g, y, Kn(f, b), C, !1),
				x > 0)
			) {
				if (x & 16) K(E, f, j, F, g, y, b);
				else if (
					(x & 2 && j.class !== F.class && o(E, "class", null, F.class, b),
					x & 4 && o(E, "style", j.style, F.style, b),
					x & 8)
				) {
					const G = f.dynamicProps;
					for (let Q = 0; Q < G.length; Q++) {
						const ee = G[Q],
							ie = j[ee],
							Te = F[ee];
						(Te !== ie || ee === "value") &&
							o(E, ee, ie, Te, b, a.children, g, y, Fe);
					}
				}
				x & 1 && a.children !== f.children && d(E, f.children);
			} else !A && v == null && K(E, f, j, F, g, y, b);
			((k = F.onVnodeUpdated) || P) &&
				pe(() => {
					k && Ee(k, g, f, a), P && Ie(f, a, g, "updated");
				}, y);
		},
		S = (a, f, g, y, b, C, A) => {
			for (let E = 0; E < f.length; E++) {
				const x = a[E],
					v = f[E],
					P =
						x.el && (x.type === ge || !ot(x, v) || x.shapeFlag & 70)
							? h(x.el)
							: g;
				M(x, v, P, null, y, b, C, A, !0);
			}
		},
		K = (a, f, g, y, b, C, A) => {
			if (g !== y) {
				if (g !== te)
					for (const E in g)
						!yt(E) && !(E in y) && o(a, E, g[E], null, A, f.children, b, C, Fe);
				for (const E in y) {
					if (yt(E)) continue;
					const x = y[E],
						v = g[E];
					x !== v && E !== "value" && o(a, E, v, x, A, f.children, b, C, Fe);
				}
				"value" in y && o(a, "value", g.value, y.value, A);
			}
		},
		O = (a, f, g, y, b, C, A, E, x) => {
			const v = (f.el = a ? a.el : l("")),
				P = (f.anchor = a ? a.anchor : l(""));
			let { patchFlag: j, dynamicChildren: F, slotScopeIds: k } = f;
			k && (E = E ? E.concat(k) : k),
				a == null
					? (s(v, g, y), s(P, g, y), R(f.children || [], g, P, b, C, A, E, x))
					: j > 0 && j & 64 && F && a.dynamicChildren
						? (S(a.dynamicChildren, F, g, b, C, A, E),
							(f.key != null || (b && f === b.subTree)) && Io(a, f, !0))
						: $(a, f, g, P, b, C, A, E, x);
		},
		q = (a, f, g, y, b, C, A, E, x) => {
			(f.slotScopeIds = E),
				a == null
					? f.shapeFlag & 512
						? b.ctx.activate(f, g, y, A, x)
						: re(f, g, y, b, C, A, x)
					: le(a, f, x);
		},
		re = (a, f, g, y, b, C, A) => {
			const E = (a.component = ec(a, y, b));
			if ((Ln(a) && (E.ctx.renderer = dt), tc(E), E.asyncDep)) {
				if ((b && b.registerDep(E, H), !a.el)) {
					const x = (E.subTree = ae(ve));
					W(null, x, f, g);
				}
			} else H(E, a, f, g, b, C, A);
		},
		le = (a, f, g) => {
			const y = (f.component = a.component);
			if (ll(a, f, g))
				if (y.asyncDep && !y.asyncResolved) {
					z(y, f, g);
					return;
				} else (y.next = f), el(y.update), (y.effect.dirty = !0), y.update();
			else (f.el = a.el), (y.vnode = f);
		},
		H = (a, f, g, y, b, C, A) => {
			const E = () => {
					if (a.isMounted) {
						let { next: P, bu: j, u: F, parent: k, vnode: G } = a;
						{
							const ht = Po(a);
							if (ht) {
								P && ((P.el = G.el), z(a, P, A)),
									ht.asyncDep.then(() => {
										a.isUnmounted || E();
									});
								return;
							}
						}
						let Q = P,
							ee;
						tt(a, !1),
							P ? ((P.el = G.el), z(a, P, A)) : (P = G),
							j && Dn(j),
							(ee = P.props && P.props.onVnodeBeforeUpdate) && Ee(ee, k, P, G),
							tt(a, !0);
						const ie = Bn(a),
							Te = a.subTree;
						(a.subTree = ie),
							M(Te, ie, h(Te.el), Wt(Te), a, b, C),
							(P.el = ie.el),
							Q === null && cl(a, ie.el),
							F && pe(F, b),
							(ee = P.props && P.props.onVnodeUpdated) &&
								pe(() => Ee(ee, k, P, G), b);
					} else {
						let P;
						const { el: j, props: F } = f,
							{ bm: k, m: G, parent: Q } = a,
							ee = wt(f);
						if (
							(tt(a, !1),
							k && Dn(k),
							!ee && (P = F && F.onVnodeBeforeMount) && Ee(P, Q, f),
							tt(a, !0),
							j && jn)
						) {
							const ie = () => {
								(a.subTree = Bn(a)), jn(j, a.subTree, a, b, null);
							};
							ee
								? f.type.__asyncLoader().then(() => !a.isUnmounted && ie())
								: ie();
						} else {
							const ie = (a.subTree = Bn(a));
							M(null, ie, g, y, a, b, C), (f.el = ie.el);
						}
						if ((G && pe(G, b), !ee && (P = F && F.onVnodeMounted))) {
							const ie = f;
							pe(() => Ee(P, Q, ie), b);
						}
						(f.shapeFlag & 256 ||
							(Q && wt(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
							a.a &&
							pe(a.a, b),
							(a.isMounted = !0),
							(f = g = y = null);
					}
				},
				x = (a.effect = new ws(E, xe, () => Ls(v), a.scope)),
				v = (a.update = () => {
					x.dirty && x.run();
				});
			(v.id = a.uid), tt(a, !0), v();
		},
		z = (a, f, g) => {
			f.component = a;
			const y = a.vnode.props;
			(a.vnode = f),
				(a.next = null),
				Hl(a, f.props, y, g),
				Vl(a, f.children, g),
				ut(),
				Ys(a),
				ft();
		},
		$ = (a, f, g, y, b, C, A, E, x = !1) => {
			const v = a && a.children,
				P = a ? a.shapeFlag : 0,
				j = f.children,
				{ patchFlag: F, shapeFlag: k } = f;
			if (F > 0) {
				if (F & 128) {
					Kt(v, j, g, y, b, C, A, E, x);
					return;
				} else if (F & 256) {
					Ne(v, j, g, y, b, C, A, E, x);
					return;
				}
			}
			k & 8
				? (P & 16 && Fe(v, b, C), j !== v && d(g, j))
				: P & 16
					? k & 16
						? Kt(v, j, g, y, b, C, A, E, x)
						: Fe(v, b, C, !0)
					: (P & 8 && d(g, ""), k & 16 && R(j, g, y, b, C, A, E, x));
		},
		Ne = (a, f, g, y, b, C, A, E, x) => {
			(a = a || mt), (f = f || mt);
			const v = a.length,
				P = f.length,
				j = Math.min(v, P);
			let F;
			for (F = 0; F < j; F++) {
				const k = (f[F] = x ? We(f[F]) : Ae(f[F]));
				M(a[F], k, g, null, b, C, A, E, x);
			}
			v > P ? Fe(a, b, C, !0, !1, j) : R(f, g, y, b, C, A, E, x, j);
		},
		Kt = (a, f, g, y, b, C, A, E, x) => {
			let v = 0;
			const P = f.length;
			let j = a.length - 1,
				F = P - 1;
			for (; v <= j && v <= F; ) {
				const k = a[v],
					G = (f[v] = x ? We(f[v]) : Ae(f[v]));
				if (ot(k, G)) M(k, G, g, null, b, C, A, E, x);
				else break;
				v++;
			}
			for (; v <= j && v <= F; ) {
				const k = a[j],
					G = (f[F] = x ? We(f[F]) : Ae(f[F]));
				if (ot(k, G)) M(k, G, g, null, b, C, A, E, x);
				else break;
				j--, F--;
			}
			if (v > j) {
				if (v <= F) {
					const k = F + 1,
						G = k < P ? f[k].el : y;
					for (; v <= F; )
						M(null, (f[v] = x ? We(f[v]) : Ae(f[v])), g, G, b, C, A, E, x), v++;
				}
			} else if (v > F) for (; v <= j; ) Oe(a[v], b, C, !0), v++;
			else {
				const k = v,
					G = v,
					Q = new Map();
				for (v = G; v <= F; v++) {
					const ye = (f[v] = x ? We(f[v]) : Ae(f[v]));
					ye.key != null && Q.set(ye.key, v);
				}
				let ee,
					ie = 0;
				const Te = F - G + 1;
				let ht = !1,
					Ds = 0;
				const At = new Array(Te);
				for (v = 0; v < Te; v++) At[v] = 0;
				for (v = k; v <= j; v++) {
					const ye = a[v];
					if (ie >= Te) {
						Oe(ye, b, C, !0);
						continue;
					}
					let Le;
					if (ye.key != null) Le = Q.get(ye.key);
					else
						for (ee = G; ee <= F; ee++)
							if (At[ee - G] === 0 && ot(ye, f[ee])) {
								Le = ee;
								break;
							}
					Le === void 0
						? Oe(ye, b, C, !0)
						: ((At[Le - G] = v + 1),
							Le >= Ds ? (Ds = Le) : (ht = !0),
							M(ye, f[Le], g, null, b, C, A, E, x),
							ie++);
				}
				const Vs = ht ? ql(At) : mt;
				for (ee = Vs.length - 1, v = Te - 1; v >= 0; v--) {
					const ye = G + v,
						Le = f[ye],
						Bs = ye + 1 < P ? f[ye + 1].el : y;
					At[v] === 0
						? M(null, Le, g, Bs, b, C, A, E, x)
						: ht && (ee < 0 || v !== Vs[ee] ? et(Le, g, Bs, 2) : ee--);
				}
			}
		},
		et = (a, f, g, y, b = null) => {
			const { el: C, type: A, transition: E, children: x, shapeFlag: v } = a;
			if (v & 6) {
				et(a.component.subTree, f, g, y);
				return;
			}
			if (v & 128) {
				a.suspense.move(f, g, y);
				return;
			}
			if (v & 64) {
				A.move(a, f, g, dt);
				return;
			}
			if (A === ge) {
				s(C, f, g);
				for (let j = 0; j < x.length; j++) et(x[j], f, g, y);
				s(a.anchor, f, g);
				return;
			}
			if (A === Nt) {
				p(a, f, g);
				return;
			}
			if (y !== 2 && v & 1 && E)
				if (y === 0) E.beforeEnter(C), s(C, f, g), pe(() => E.enter(C), b);
				else {
					const { leave: j, delayLeave: F, afterLeave: k } = E,
						G = () => s(C, f, g),
						Q = () => {
							j(C, () => {
								G(), k && k();
							});
						};
					F ? F(C, G, Q) : Q();
				}
			else s(C, f, g);
		},
		Oe = (a, f, g, y = !1, b = !1) => {
			const {
				type: C,
				props: A,
				ref: E,
				children: x,
				dynamicChildren: v,
				shapeFlag: P,
				patchFlag: j,
				dirs: F,
			} = a;
			if ((E != null && gn(E, null, g, a, !0), P & 256)) {
				f.ctx.deactivate(a);
				return;
			}
			const k = P & 1 && F,
				G = !wt(a);
			let Q;
			if ((G && (Q = A && A.onVnodeBeforeUnmount) && Ee(Q, f, a), P & 6))
				oi(a.component, g, y);
			else {
				if (P & 128) {
					a.suspense.unmount(g, y);
					return;
				}
				k && Ie(a, null, f, "beforeUnmount"),
					P & 64
						? a.type.remove(a, f, g, b, dt, y)
						: v && (C !== ge || (j > 0 && j & 64))
							? Fe(v, f, g, !1, !0)
							: ((C === ge && j & 384) || (!b && P & 16)) && Fe(x, f, g),
					y && Hs(a);
			}
			((G && (Q = A && A.onVnodeUnmounted)) || k) &&
				pe(() => {
					Q && Ee(Q, f, a), k && Ie(a, null, f, "unmounted");
				}, g);
		},
		Hs = (a) => {
			const { type: f, el: g, anchor: y, transition: b } = a;
			if (f === ge) {
				ri(g, y);
				return;
			}
			if (f === Nt) {
				_(a);
				return;
			}
			const C = () => {
				r(g), b && !b.persisted && b.afterLeave && b.afterLeave();
			};
			if (a.shapeFlag & 1 && b && !b.persisted) {
				const { leave: A, delayLeave: E } = b,
					x = () => A(g, C);
				E ? E(a.el, C, x) : x();
			} else C();
		},
		ri = (a, f) => {
			let g;
			for (; a !== f; ) (g = m(a)), r(a), (a = g);
			r(f);
		},
		oi = (a, f, g) => {
			const { bum: y, scope: b, update: C, subTree: A, um: E } = a;
			y && Dn(y),
				b.stop(),
				C && ((C.active = !1), Oe(A, a, f, g)),
				E && pe(E, f),
				pe(() => {
					a.isUnmounted = !0;
				}, f),
				f &&
					f.pendingBranch &&
					!f.isUnmounted &&
					a.asyncDep &&
					!a.asyncResolved &&
					a.suspenseId === f.pendingId &&
					(f.deps--, f.deps === 0 && f.resolve());
		},
		Fe = (a, f, g, y = !1, b = !1, C = 0) => {
			for (let A = C; A < a.length; A++) Oe(a[A], f, g, y, b);
		},
		Wt = (a) =>
			a.shapeFlag & 6
				? Wt(a.component.subTree)
				: a.shapeFlag & 128
					? a.suspense.next()
					: m(a.anchor || a.el);
	let $n = !1;
	const js = (a, f, g) => {
			a == null
				? f._vnode && Oe(f._vnode, null, null, !0)
				: M(f._vnode || null, a, f, null, null, null, g),
				$n || (($n = !0), Ys(), dn(), ($n = !1)),
				(f._vnode = a);
		},
		dt = {
			p: M,
			um: Oe,
			m: et,
			r: Hs,
			mt: re,
			mc: R,
			pc: $,
			pbc: S,
			n: Wt,
			o: e,
		};
	let Hn, jn;
	return (
		t && ([Hn, jn] = t(dt)), { render: js, hydrate: Hn, createApp: Nl(js, Hn) }
	);
}
function Kn({ type: e, props: t }, n) {
	return (n === "svg" && e === "foreignObject") ||
		(n === "mathml" &&
			e === "annotation-xml" &&
			t &&
			t.encoding &&
			t.encoding.includes("html"))
		? void 0
		: n;
}
function tt({ effect: e, update: t }, n) {
	e.allowRecurse = t.allowRecurse = n;
}
function Lo(e, t) {
	return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Io(e, t, n = !1) {
	const s = e.children,
		r = t.children;
	if (B(s) && B(r))
		for (let o = 0; o < s.length; o++) {
			const i = s[o];
			let l = r[o];
			l.shapeFlag & 1 &&
				!l.dynamicChildren &&
				((l.patchFlag <= 0 || l.patchFlag === 32) &&
					((l = r[o] = We(r[o])), (l.el = i.el)),
				n || Io(i, l)),
				l.type === xt && (l.el = i.el);
		}
}
function ql(e) {
	const t = e.slice(),
		n = [0];
	let s, r, o, i, l;
	const c = e.length;
	for (s = 0; s < c; s++) {
		const u = e[s];
		if (u !== 0) {
			if (((r = n[n.length - 1]), e[r] < u)) {
				(t[s] = r), n.push(s);
				continue;
			}
			for (o = 0, i = n.length - 1; o < i; )
				(l = (o + i) >> 1), e[n[l]] < u ? (o = l + 1) : (i = l);
			u < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
		}
	}
	for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
	return n;
}
function Po(e) {
	const t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Po(t);
}
const Gl = (e) => e.__isTeleport,
	ge = Symbol.for("v-fgt"),
	xt = Symbol.for("v-txt"),
	ve = Symbol.for("v-cmt"),
	Nt = Symbol.for("v-stc"),
	Ft = [];
let Re = null;
function Mo(e = !1) {
	Ft.push((Re = e ? null : []));
}
function zl() {
	Ft.pop(), (Re = Ft[Ft.length - 1] || null);
}
let Vt = 1;
function cr(e) {
	Vt += e;
}
function No(e) {
	return (
		(e.dynamicChildren = Vt > 0 ? Re || mt : null),
		zl(),
		Vt > 0 && Re && Re.push(e),
		e
	);
}
function Wa(e, t, n, s, r, o) {
	return No(Ho(e, t, n, s, r, o, !0));
}
function Fo(e, t, n, s, r) {
	return No(ae(e, t, n, s, r, !0));
}
function mn(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ot(e, t) {
	return e.type === t.type && e.key === t.key;
}
const Mn = "__vInternal",
	$o = ({ key: e }) => e ?? null,
	ln = ({ ref: e, ref_key: t, ref_for: n }) => (
		typeof e == "number" && (e = "" + e),
		e != null
			? ne(e) || de(e) || U(e)
				? { i: fe, r: e, k: t, f: !!n }
				: e
			: null
	);
function Ho(
	e,
	t = null,
	n = null,
	s = 0,
	r = null,
	o = e === ge ? 0 : 1,
	i = !1,
	l = !1,
) {
	const c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && $o(t),
		ref: t && ln(t),
		scopeId: Rn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: o,
		patchFlag: s,
		dynamicProps: r,
		dynamicChildren: null,
		appContext: null,
		ctx: fe,
	};
	return (
		l
			? (Ns(c, n), o & 128 && e.normalize(c))
			: n && (c.shapeFlag |= ne(n) ? 8 : 16),
		Vt > 0 &&
			!i &&
			Re &&
			(c.patchFlag > 0 || o & 6) &&
			c.patchFlag !== 32 &&
			Re.push(c),
		c
	);
}
const ae = Xl;
function Xl(e, t = null, n = null, s = 0, r = null, o = !1) {
	if (((!e || e === uo) && (e = ve), mn(e))) {
		const l = Ze(e, t, !0);
		return (
			n && Ns(l, n),
			Vt > 0 &&
				!o &&
				Re &&
				(l.shapeFlag & 6 ? (Re[Re.indexOf(e)] = l) : Re.push(l)),
			(l.patchFlag |= -2),
			l
		);
	}
	if ((oc(e) && (e = e.__vccOpts), t)) {
		t = Yl(t);
		let { class: l, style: c } = t;
		l && !ne(l) && (t.class = vs(l)),
			Z(c) && (eo(c) && !B(c) && (c = oe({}, c)), (t.style = bs(c)));
	}
	const i = ne(e) ? 1 : al(e) ? 128 : Gl(e) ? 64 : Z(e) ? 4 : U(e) ? 2 : 0;
	return Ho(e, t, n, s, r, i, o, !0);
}
function Yl(e) {
	return e ? (eo(e) || Mn in e ? oe({}, e) : e) : null;
}
function Ze(e, t, n = !1) {
	const { props: s, ref: r, patchFlag: o, children: i } = e,
		l = t ? Jl(s || {}, t) : s;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && $o(l),
		ref:
			t && t.ref ? (n && r ? (B(r) ? r.concat(ln(t)) : [r, ln(t)]) : ln(t)) : r,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: i,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== ge ? (o === -1 ? 16 : o | 16) : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: e.transition,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ze(e.ssContent),
		ssFallback: e.ssFallback && Ze(e.ssFallback),
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
	};
}
function jo(e = " ", t = 0) {
	return ae(xt, null, e, t);
}
function qa(e, t) {
	const n = ae(Nt, null, e);
	return (n.staticCount = t), n;
}
function Ga(e = "", t = !1) {
	return t ? (Mo(), Fo(ve, null, e)) : ae(ve, null, e);
}
function Ae(e) {
	return e == null || typeof e == "boolean"
		? ae(ve)
		: B(e)
			? ae(ge, null, e.slice())
			: typeof e == "object"
				? We(e)
				: ae(xt, null, String(e));
}
function We(e) {
	return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ze(e);
}
function Ns(e, t) {
	let n = 0;
	const { shapeFlag: s } = e;
	if (t == null) t = null;
	else if (B(t)) n = 16;
	else if (typeof t == "object")
		if (s & 65) {
			const r = t.default;
			r && (r._c && (r._d = !1), Ns(e, r()), r._c && (r._d = !0));
			return;
		} else {
			n = 32;
			const r = t._;
			!r && !(Mn in t)
				? (t._ctx = fe)
				: r === 3 &&
					fe &&
					(fe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
		}
	else
		U(t)
			? ((t = { default: t, _ctx: fe }), (n = 32))
			: ((t = String(t)), s & 64 ? ((n = 16), (t = [jo(t)])) : (n = 8));
	(e.children = t), (e.shapeFlag |= n);
}
function Jl(...e) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const s = e[n];
		for (const r in s)
			if (r === "class")
				t.class !== s.class && (t.class = vs([t.class, s.class]));
			else if (r === "style") t.style = bs([t.style, s.style]);
			else if (kt(r)) {
				const o = t[r],
					i = s[r];
				i &&
					o !== i &&
					!(B(o) && o.includes(i)) &&
					(t[r] = o ? [].concat(o, i) : i);
			} else r !== "" && (t[r] = s[r]);
	}
	return t;
}
function Ee(e, t, n, s = null) {
	Se(e, t, 7, [n, s]);
}
const Ql = xo();
let Zl = 0;
function ec(e, t, n) {
	const s = e.type,
		r = (t ? t.appContext : e.appContext) || Ql,
		o = {
			uid: Zl++,
			vnode: e,
			type: s,
			parent: t,
			appContext: r,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new bi(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: t ? t.provides : Object.create(r.provides),
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: To(s, r),
			emitsOptions: ao(s, r),
			emit: null,
			emitted: null,
			propsDefaults: te,
			inheritAttrs: s.inheritAttrs,
			ctx: te,
			data: te,
			props: te,
			attrs: te,
			slots: te,
			refs: te,
			setupState: te,
			setupContext: null,
			attrsProxy: null,
			slotsProxy: null,
			suspense: n,
			suspenseId: n ? n.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null,
		};
	return (
		(o.ctx = { _: o }),
		(o.root = t ? t.root : o),
		(o.emit = sl.bind(null, o)),
		e.ce && e.ce(o),
		o
	);
}
let ce = null;
const Nn = () => ce || fe;
let _n, fs;
{
	const e = Dr(),
		t = (n, s) => {
			let r;
			return (
				(r = e[n]) || (r = e[n] = []),
				r.push(s),
				(o) => {
					r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
				}
			);
		};
	(_n = t("__VUE_INSTANCE_SETTERS__", (n) => (ce = n))),
		(fs = t("__VUE_SSR_SETTERS__", (n) => (Fn = n)));
}
const Ut = (e) => {
		const t = ce;
		return (
			_n(e),
			e.scope.on(),
			() => {
				e.scope.off(), _n(t);
			}
		);
	},
	ar = () => {
		ce && ce.scope.off(), _n(null);
	};
function Do(e) {
	return e.vnode.shapeFlag & 4;
}
let Fn = !1;
function tc(e, t = !1) {
	t && fs(t);
	const { props: n, children: s } = e.vnode,
		r = Do(e);
	$l(e, n, r, t), Dl(e, s);
	const o = r ? nc(e, t) : void 0;
	return t && fs(!1), o;
}
function nc(e, t) {
	const n = e.type;
	(e.accessCache = Object.create(null)), (e.proxy = Lt(new Proxy(e.ctx, Tl)));
	const { setup: s } = n;
	if (s) {
		const r = (e.setupContext = s.length > 1 ? Bo(e) : null),
			o = Ut(e);
		ut();
		const i = ze(s, e, 0, [e.props, r]);
		if ((ft(), o(), $r(i))) {
			if ((i.then(ar, ar), t))
				return i
					.then((l) => {
						ur(e, l, t);
					})
					.catch((l) => {
						Sn(l, e, 0);
					});
			e.asyncDep = i;
		} else ur(e, i, t);
	} else Vo(e, t);
}
function ur(e, t, n) {
	U(t)
		? e.type.__ssrInlineRender
			? (e.ssrRender = t)
			: (e.render = t)
		: Z(t) && (e.setupState = oo(t)),
		Vo(e, n);
}
let fr;
function Vo(e, t, n) {
	const s = e.type;
	if (!e.render) {
		if (!t && fr && !s.render) {
			const r = s.template || Ps(e).template;
			if (r) {
				const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
					{ delimiters: l, compilerOptions: c } = s,
					u = oe(oe({ isCustomElement: o, delimiters: l }, i), c);
				s.render = fr(r, u);
			}
		}
		e.render = s.render || xe;
	}
	{
		const r = Ut(e);
		ut();
		try {
			Rl(e);
		} finally {
			ft(), r();
		}
	}
}
function sc(e) {
	return (
		e.attrsProxy ||
		(e.attrsProxy = new Proxy(e.attrs, {
			get(t, n) {
				return _e(e, "get", "$attrs"), t[n];
			},
		}))
	);
}
function Bo(e) {
	const t = (n) => {
		e.exposed = n || {};
	};
	return {
		get attrs() {
			return sc(e);
		},
		slots: e.slots,
		emit: e.emit,
		expose: t,
	};
}
function Fs(e) {
	if (e.exposed)
		return (
			e.exposeProxy ||
			(e.exposeProxy = new Proxy(oo(Lt(e.exposed)), {
				get(t, n) {
					if (n in t) return t[n];
					if (n in Pt) return Pt[n](e);
				},
				has(t, n) {
					return n in t || n in Pt;
				},
			}))
		);
}
function rc(e, t = !0) {
	return U(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function oc(e) {
	return U(e) && "__vccOpts" in e;
}
const se = (e, t) => Ui(e, t, Fn);
function ds(e, t, n) {
	const s = arguments.length;
	return s === 2
		? Z(t) && !B(t)
			? mn(t)
				? ae(e, null, [t])
				: ae(e, t)
			: ae(e, null, t)
		: (s > 3
				? (n = Array.prototype.slice.call(arguments, 2))
				: s === 3 && mn(n) && (n = [n]),
			ae(e, t, n));
}
const ic = "3.4.18"; /**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const lc = "http://www.w3.org/2000/svg",
	cc = "http://www.w3.org/1998/Math/MathML",
	qe = typeof document < "u" ? document : null,
	dr = qe && qe.createElement("template"),
	ac = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null);
		},
		remove: (e) => {
			const t = e.parentNode;
			t && t.removeChild(e);
		},
		createElement: (e, t, n, s) => {
			const r =
				t === "svg"
					? qe.createElementNS(lc, e)
					: t === "mathml"
						? qe.createElementNS(cc, e)
						: qe.createElement(e, n ? { is: n } : void 0);
			return (
				e === "select" &&
					s &&
					s.multiple != null &&
					r.setAttribute("multiple", s.multiple),
				r
			);
		},
		createText: (e) => qe.createTextNode(e),
		createComment: (e) => qe.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: (e) => e.parentNode,
		nextSibling: (e) => e.nextSibling,
		querySelector: (e) => qe.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, "");
		},
		insertStaticContent(e, t, n, s, r, o) {
			const i = n ? n.previousSibling : t.lastChild;
			if (r && (r === o || r.nextSibling))
				for (
					;
					t.insertBefore(r.cloneNode(!0), n),
						!(r === o || !(r = r.nextSibling));
				);
			else {
				dr.innerHTML =
					s === "svg"
						? `<svg>${e}</svg>`
						: s === "mathml"
							? `<math>${e}</math>`
							: e;
				const l = dr.content;
				if (s === "svg" || s === "mathml") {
					const c = l.firstChild;
					for (; c.firstChild; ) l.appendChild(c.firstChild);
					l.removeChild(c);
				}
				t.insertBefore(l, n);
			}
			return [
				i ? i.nextSibling : t.firstChild,
				n ? n.previousSibling : t.lastChild,
			];
		},
	},
	Be = "transition",
	Rt = "animation",
	Bt = Symbol("_vtc"),
	ko = (e, { slots: t }) => ds(gl, uc(e), t);
ko.displayName = "Transition";
const Uo = {
	name: String,
	type: String,
	css: { type: Boolean, default: !0 },
	duration: [String, Number, Object],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String,
};
ko.props = oe({}, mo, Uo);
const nt = (e, t = []) => {
		B(e) ? e.forEach((n) => n(...t)) : e && e(...t);
	},
	hr = (e) => (e ? (B(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function uc(e) {
	const t = {};
	for (const O in e) O in Uo || (t[O] = e[O]);
	if (e.css === !1) return t;
	const {
			name: n = "v",
			type: s,
			duration: r,
			enterFromClass: o = `${n}-enter-from`,
			enterActiveClass: i = `${n}-enter-active`,
			enterToClass: l = `${n}-enter-to`,
			appearFromClass: c = o,
			appearActiveClass: u = i,
			appearToClass: d = l,
			leaveFromClass: h = `${n}-leave-from`,
			leaveActiveClass: m = `${n}-leave-active`,
			leaveToClass: w = `${n}-leave-to`,
		} = e,
		L = fc(r),
		M = L && L[0],
		D = L && L[1],
		{
			onBeforeEnter: W,
			onEnter: J,
			onEnterCancelled: p,
			onLeave: _,
			onLeaveCancelled: N,
			onBeforeAppear: I = W,
			onAppear: V = J,
			onAppearCancelled: R = p,
		} = t,
		T = (O, q, re) => {
			st(O, q ? d : l), st(O, q ? u : i), re && re();
		},
		S = (O, q) => {
			(O._isLeaving = !1), st(O, h), st(O, w), st(O, m), q && q();
		},
		K = (O) => (q, re) => {
			const le = O ? V : J,
				H = () => T(q, O, re);
			nt(le, [q, H]),
				pr(() => {
					st(q, O ? c : o), ke(q, O ? d : l), hr(le) || gr(q, s, M, H);
				});
		};
	return oe(t, {
		onBeforeEnter(O) {
			nt(W, [O]), ke(O, o), ke(O, i);
		},
		onBeforeAppear(O) {
			nt(I, [O]), ke(O, c), ke(O, u);
		},
		onEnter: K(!1),
		onAppear: K(!0),
		onLeave(O, q) {
			O._isLeaving = !0;
			const re = () => S(O, q);
			ke(O, h),
				pc(),
				ke(O, m),
				pr(() => {
					O._isLeaving && (st(O, h), ke(O, w), hr(_) || gr(O, s, D, re));
				}),
				nt(_, [O, re]);
		},
		onEnterCancelled(O) {
			T(O, !1), nt(p, [O]);
		},
		onAppearCancelled(O) {
			T(O, !0), nt(R, [O]);
		},
		onLeaveCancelled(O) {
			S(O), nt(N, [O]);
		},
	});
}
function fc(e) {
	if (e == null) return null;
	if (Z(e)) return [Wn(e.enter), Wn(e.leave)];
	{
		const t = Wn(e);
		return [t, t];
	}
}
function Wn(e) {
	return di(e);
}
function ke(e, t) {
	t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
		(e[Bt] || (e[Bt] = new Set())).add(t);
}
function st(e, t) {
	t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
	const n = e[Bt];
	n && (n.delete(t), n.size || (e[Bt] = void 0));
}
function pr(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
let dc = 0;
function gr(e, t, n, s) {
	const r = (e._endId = ++dc),
		o = () => {
			r === e._endId && s();
		};
	if (n) return setTimeout(o, n);
	const { type: i, timeout: l, propCount: c } = hc(e, t);
	if (!i) return s();
	const u = i + "end";
	let d = 0;
	const h = () => {
			e.removeEventListener(u, m), o();
		},
		m = (w) => {
			w.target === e && ++d >= c && h();
		};
	setTimeout(() => {
		d < c && h();
	}, l + 1),
		e.addEventListener(u, m);
}
function hc(e, t) {
	const n = window.getComputedStyle(e),
		s = (L) => (n[L] || "").split(", "),
		r = s(`${Be}Delay`),
		o = s(`${Be}Duration`),
		i = mr(r, o),
		l = s(`${Rt}Delay`),
		c = s(`${Rt}Duration`),
		u = mr(l, c);
	let d = null,
		h = 0,
		m = 0;
	t === Be
		? i > 0 && ((d = Be), (h = i), (m = o.length))
		: t === Rt
			? u > 0 && ((d = Rt), (h = u), (m = c.length))
			: ((h = Math.max(i, u)),
				(d = h > 0 ? (i > u ? Be : Rt) : null),
				(m = d ? (d === Be ? o.length : c.length) : 0));
	const w =
		d === Be && /\b(transform|all)(,|$)/.test(s(`${Be}Property`).toString());
	return { type: d, timeout: h, propCount: m, hasTransform: w };
}
function mr(e, t) {
	for (; e.length < t.length; ) e = e.concat(e);
	return Math.max(...t.map((n, s) => _r(n) + _r(e[s])));
}
function _r(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function pc() {
	return document.body.offsetHeight;
}
function gc(e, t, n) {
	const s = e[Bt];
	s && (t = (t ? [t, ...s] : [...s]).join(" ")),
		t == null
			? e.removeAttribute("class")
			: n
				? e.setAttribute("class", t)
				: (e.className = t);
}
const yr = Symbol("_vod"),
	mc = Symbol(""),
	_c = /(^|;)\s*display\s*:/;
function yc(e, t, n) {
	const s = e.style,
		r = ne(n),
		o = s.display;
	let i = !1;
	if (n && !r) {
		if (t && !ne(t)) for (const l in t) n[l] == null && hs(s, l, "");
		for (const l in n) l === "display" && (i = !0), hs(s, l, n[l]);
	} else if (r) {
		if (t !== n) {
			const l = s[mc];
			l && (n += ";" + l), (s.cssText = n), (i = _c.test(n));
		}
	} else t && e.removeAttribute("style");
	yr in e && ((e[yr] = i ? s.display : ""), (s.display = o));
}
const br = /\s*!important$/;
function hs(e, t, n) {
	if (B(n)) n.forEach((s) => hs(e, t, s));
	else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
	else {
		const s = bc(e, t);
		br.test(n)
			? e.setProperty(at(s), n.replace(br, ""), "important")
			: (e[s] = n);
	}
}
const vr = ["Webkit", "Moz", "ms"],
	qn = {};
function bc(e, t) {
	const n = qn[t];
	if (n) return n;
	let s = Me(t);
	if (s !== "filter" && s in e) return (qn[t] = s);
	s = wn(s);
	for (let r = 0; r < vr.length; r++) {
		const o = vr[r] + s;
		if (o in e) return (qn[t] = o);
	}
	return t;
}
const wr = "http://www.w3.org/1999/xlink";
function vc(e, t, n, s, r) {
	if (s && t.startsWith("xlink:"))
		n == null
			? e.removeAttributeNS(wr, t.slice(6, t.length))
			: e.setAttributeNS(wr, t, n);
	else {
		const o = yi(t);
		n == null || (o && !Vr(n))
			? e.removeAttribute(t)
			: e.setAttribute(t, o ? "" : n);
	}
}
function wc(e, t, n, s, r, o, i) {
	if (t === "innerHTML" || t === "textContent") {
		s && i(s, r, o), (e[t] = n ?? "");
		return;
	}
	const l = e.tagName;
	if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
		e._value = n;
		const u = l === "OPTION" ? e.getAttribute("value") : e.value,
			d = n ?? "";
		u !== d && (e.value = d), n == null && e.removeAttribute(t);
		return;
	}
	let c = !1;
	if (n === "" || n == null) {
		const u = typeof e[t];
		u === "boolean"
			? (n = Vr(n))
			: n == null && u === "string"
				? ((n = ""), (c = !0))
				: u === "number" && ((n = 0), (c = !0));
	}
	try {
		e[t] = n;
	} catch {}
	c && e.removeAttribute(t);
}
function Ec(e, t, n, s) {
	e.addEventListener(t, n, s);
}
function Cc(e, t, n, s) {
	e.removeEventListener(t, n, s);
}
const Er = Symbol("_vei");
function xc(e, t, n, s, r = null) {
	const o = e[Er] || (e[Er] = {}),
		i = o[t];
	if (s && i) i.value = s;
	else {
		const [l, c] = Sc(t);
		if (s) {
			const u = (o[t] = Rc(s, r));
			Ec(e, l, u, c);
		} else i && (Cc(e, l, i, c), (o[t] = void 0));
	}
}
const Cr = /(?:Once|Passive|Capture)$/;
function Sc(e) {
	let t;
	if (Cr.test(e)) {
		t = {};
		let s;
		for (; (s = e.match(Cr)); )
			(e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
	}
	return [e[2] === ":" ? e.slice(3) : at(e.slice(2)), t];
}
let Gn = 0;
const Tc = Promise.resolve(),
	Ac = () => Gn || (Tc.then(() => (Gn = 0)), (Gn = Date.now()));
function Rc(e, t) {
	const n = (s) => {
		if (!s._vts) s._vts = Date.now();
		else if (s._vts <= n.attached) return;
		Se(Oc(s, n.value), t, 5, [s]);
	};
	return (n.value = e), (n.attached = Ac()), n;
}
function Oc(e, t) {
	if (B(t)) {
		const n = e.stopImmediatePropagation;
		return (
			(e.stopImmediatePropagation = () => {
				n.call(e), (e._stopped = !0);
			}),
			t.map((s) => (r) => !r._stopped && s && s(r))
		);
	} else return t;
}
const xr = (e) =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		e.charCodeAt(2) > 96 &&
		e.charCodeAt(2) < 123,
	Lc = (e, t, n, s, r, o, i, l, c) => {
		const u = r === "svg";
		t === "class"
			? gc(e, s, u)
			: t === "style"
				? yc(e, n, s)
				: kt(t)
					? ms(t) || xc(e, t, n, s, i)
					: (
								t[0] === "."
									? ((t = t.slice(1)), !0)
									: t[0] === "^"
										? ((t = t.slice(1)), !1)
										: Ic(e, t, s, u)
							)
						? wc(e, t, s, o, i, l, c)
						: (t === "true-value"
								? (e._trueValue = s)
								: t === "false-value" && (e._falseValue = s),
							vc(e, t, s, u));
	};
function Ic(e, t, n, s) {
	if (s)
		return !!(
			t === "innerHTML" ||
			t === "textContent" ||
			(t in e && xr(t) && U(n))
		);
	if (
		t === "spellcheck" ||
		t === "draggable" ||
		t === "translate" ||
		t === "form" ||
		(t === "list" && e.tagName === "INPUT") ||
		(t === "type" && e.tagName === "TEXTAREA")
	)
		return !1;
	if (t === "width" || t === "height") {
		const r = e.tagName;
		if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
			return !1;
	}
	return xr(t) && ne(n) ? !1 : t in e;
}
const Pc = ["ctrl", "shift", "alt", "meta"],
	Mc = {
		stop: (e) => e.stopPropagation(),
		prevent: (e) => e.preventDefault(),
		self: (e) => e.target !== e.currentTarget,
		ctrl: (e) => !e.ctrlKey,
		shift: (e) => !e.shiftKey,
		alt: (e) => !e.altKey,
		meta: (e) => !e.metaKey,
		left: (e) => "button" in e && e.button !== 0,
		middle: (e) => "button" in e && e.button !== 1,
		right: (e) => "button" in e && e.button !== 2,
		exact: (e, t) => Pc.some((n) => e[`${n}Key`] && !t.includes(n)),
	},
	za = (e, t) => {
		const n = e._withMods || (e._withMods = {}),
			s = t.join(".");
		return (
			n[s] ||
			(n[s] = (r, ...o) => {
				for (let i = 0; i < t.length; i++) {
					const l = Mc[t[i]];
					if (l && l(r, t)) return;
				}
				return e(r, ...o);
			})
		);
	},
	Nc = {
		esc: "escape",
		space: " ",
		up: "arrow-up",
		left: "arrow-left",
		right: "arrow-right",
		down: "arrow-down",
		delete: "backspace",
	},
	Xa = (e, t) => {
		const n = e._withKeys || (e._withKeys = {}),
			s = t.join(".");
		return (
			n[s] ||
			(n[s] = (r) => {
				if (!("key" in r)) return;
				const o = at(r.key);
				if (t.some((i) => i === o || Nc[i] === o)) return e(r);
			})
		);
	},
	Fc = oe({ patchProp: Lc }, ac);
let zn,
	Sr = !1;
function $c() {
	return (zn = Sr ? zn : Kl(Fc)), (Sr = !0), zn;
}
const Ya = (...e) => {
	const t = $c().createApp(...e),
		{ mount: n } = t;
	return (
		(t.mount = (s) => {
			const r = jc(s);
			if (r) return n(r, !0, Hc(r));
		}),
		t
	);
};
function Hc(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement)
		return "mathml";
}
function jc(e) {
	return ne(e) ? document.querySelector(e) : e;
}
const Ja = (e, t) => {
		const n = e.__vccOpts || e;
		for (const [s, r] of t) n[s] = r;
		return n;
	},
	Qa = "/assets/img/gnome-shell-run-dialog.png",
	Za = "/assets/img/gnome-extensions-example-prefs.png",
	eu = "/assets/img/gnome-shell-library-architecture.png",
	tu = "/assets/img/builder-01.png",
	nu = "/assets/img/builder-02.png",
	su = "/assets/img/builder-03.png",
	ru = "/assets/img/glade-tutorial-step-00.png",
	ou = "/assets/img/glade-tutorial-step-01.png",
	iu = "/assets/img/glade-tutorial-step-02.png",
	lu = "/assets/img/glade-tutorial-step-04.png",
	cu = "/assets/img/glade-tutorial-step-06.png",
	au = "/assets/img/glade-tutorial-step-07.png",
	uu = "/assets/img/glade-tutorial-step-08.png",
	fu = "/assets/img/glade-tutorial-step-09.png",
	du = "/assets/img/glade-tutorial-step-10.png",
	hu = "/assets/img/glade-tutorial-step-11.png",
	pu = "/assets/img/glade-tutorial-step-12.png",
	gu = "/assets/img/glade-tutorial-step-13.png",
	mu = "/assets/img/glade-tutorial-step-15.png",
	_u = "/assets/img/glade-tutorial-step-16.png",
	yu = "/assets/img/glade-tutorial-step-17.png",
	bu = "/assets/img/glade-tutorial-step-18.png",
	vu = "/assets/img/glade-tutorial-step-19.png",
	wu = "/assets/img/glade-tutorial-step-20.png",
	Eu = "/assets/img/glade-tutorial-step-21.png",
	Cu = "/assets/img/glade-tutorial-step-22.png",
	xu = "/assets/img/glade-tutorial-step-24.png",
	Su = "/assets/img/glade-tutorial-step-30.png",
	Tu = "/assets/img/glade-tutorial-step-31.png",
	Au = "/assets/img/glade-tutorial-step-32.png",
	Ru = "/assets/img/glade-tutorial-step-33.png",
	Ou = "/assets/img/glade-tutorial-step-34.png",
	Lu = "/assets/img/glade-tutorial-step-35.png",
	Iu = "/showcase/workbench.png",
	Pu = "/showcase/gnome-weather.png",
	Mu = "/showcase/gnome-maps.png",
	Nu = "/showcase/gnome-sound-recorder.png",
	Dc = "modulepreload",
	Vc = function (e) {
		return "/" + e;
	},
	Tr = {},
	Fu = function (t, n, s) {
		let r = Promise.resolve();
		if (n && n.length > 0) {
			const o = document.getElementsByTagName("link");
			r = Promise.all(
				n.map((i) => {
					if (((i = Vc(i)), i in Tr)) return;
					Tr[i] = !0;
					const l = i.endsWith(".css"),
						c = l ? '[rel="stylesheet"]' : "";
					if (!!s)
						for (let h = o.length - 1; h >= 0; h--) {
							const m = o[h];
							if (m.href === i && (!l || m.rel === "stylesheet")) return;
						}
					else if (document.querySelector(`link[href="${i}"]${c}`)) return;
					const d = document.createElement("link");
					if (
						((d.rel = l ? "stylesheet" : Dc),
						l || ((d.as = "script"), (d.crossOrigin = "")),
						(d.href = i),
						document.head.appendChild(d),
						l)
					)
						return new Promise((h, m) => {
							d.addEventListener("load", h),
								d.addEventListener("error", () =>
									m(new Error(`Unable to preload CSS for ${i}`)),
								);
						});
				}),
			);
		}
		return r
			.then(() => t())
			.catch((o) => {
				const i = new Event("vite:preloadError", { cancelable: !0 });
				if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
					throw o;
			});
	},
	Bc = window.__VP_SITE_DATA__;
function $s(e) {
	return kr() ? (wi(e), !0) : !1;
}
function Ye(e) {
	return typeof e == "function" ? e() : ro(e);
}
const Ko = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const kc = Object.prototype.toString,
	Uc = (e) => kc.call(e) === "[object Object]",
	$t = () => {},
	ps = Kc();
function Kc() {
	var e, t;
	return (
		Ko &&
		((e = window == null ? void 0 : window.navigator) == null
			? void 0
			: e.userAgent) &&
		(/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
			(((t = window == null ? void 0 : window.navigator) == null
				? void 0
				: t.maxTouchPoints) > 2 &&
				/iPad|Macintosh/.test(
					window == null ? void 0 : window.navigator.userAgent,
				)))
	);
}
function Wc(e, t) {
	function n(...s) {
		return new Promise((r, o) => {
			Promise.resolve(
				e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }),
			)
				.then(r)
				.catch(o);
		});
	}
	return n;
}
const Wo = (e) => e();
function qc(e = Wo) {
	const t = me(!0);
	function n() {
		t.value = !1;
	}
	function s() {
		t.value = !0;
	}
	const r = (...o) => {
		t.value && e(...o);
	};
	return { isActive: xn(t), pause: n, resume: s, eventFilter: r };
}
function Gc(e) {
	return e || Nn();
}
function qo(...e) {
	if (e.length !== 1) return Yi(...e);
	const t = e[0];
	return typeof t == "function" ? xn(Gi(() => ({ get: t, set: $t }))) : me(t);
}
function zc(e, t, n = {}) {
	const { eventFilter: s = Wo, ...r } = n;
	return Xe(e, Wc(s, t), r);
}
function Xc(e, t, n = {}) {
	const { eventFilter: s, ...r } = n,
		{ eventFilter: o, pause: i, resume: l, isActive: c } = qc(s);
	return {
		stop: zc(e, t, { ...r, eventFilter: o }),
		pause: i,
		resume: l,
		isActive: c,
	};
}
function Go(e, t = !0, n) {
	Gc() ? Tt(e, n) : t ? e() : Tn(e);
}
function gt(e) {
	var t;
	const n = Ye(e);
	return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const He = Ko ? window : void 0;
function Je(...e) {
	let t, n, s, r;
	if (
		(typeof e[0] == "string" || Array.isArray(e[0])
			? (([n, s, r] = e), (t = He))
			: ([t, n, s, r] = e),
		!t)
	)
		return $t;
	Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
	const o = [],
		i = () => {
			o.forEach((d) => d()), (o.length = 0);
		},
		l = (d, h, m, w) => (
			d.addEventListener(h, m, w), () => d.removeEventListener(h, m, w)
		),
		c = Xe(
			() => [gt(t), Ye(r)],
			([d, h]) => {
				if ((i(), !d)) return;
				const m = Uc(h) ? { ...h } : h;
				o.push(...n.flatMap((w) => s.map((L) => l(d, w, L, m))));
			},
			{ immediate: !0, flush: "post" },
		),
		u = () => {
			c(), i();
		};
	return $s(u), u;
}
let Ar = !1;
function $u(e, t, n = {}) {
	const {
		window: s = He,
		ignore: r = [],
		capture: o = !0,
		detectIframe: i = !1,
	} = n;
	if (!s) return $t;
	ps &&
		!Ar &&
		((Ar = !0),
		Array.from(s.document.body.children).forEach((m) =>
			m.addEventListener("click", $t),
		),
		s.document.documentElement.addEventListener("click", $t));
	let l = !0;
	const c = (m) =>
			r.some((w) => {
				if (typeof w == "string")
					return Array.from(s.document.querySelectorAll(w)).some(
						(L) => L === m.target || m.composedPath().includes(L),
					);
				{
					const L = gt(w);
					return L && (m.target === L || m.composedPath().includes(L));
				}
			}),
		d = [
			Je(
				s,
				"click",
				(m) => {
					const w = gt(e);
					if (!(!w || w === m.target || m.composedPath().includes(w))) {
						if ((m.detail === 0 && (l = !c(m)), !l)) {
							l = !0;
							return;
						}
						t(m);
					}
				},
				{ passive: !0, capture: o },
			),
			Je(
				s,
				"pointerdown",
				(m) => {
					const w = gt(e);
					l = !c(m) && !!(w && !m.composedPath().includes(w));
				},
				{ passive: !0 },
			),
			i &&
				Je(s, "blur", (m) => {
					setTimeout(() => {
						var w;
						const L = gt(e);
						((w = s.document.activeElement) == null ? void 0 : w.tagName) ===
							"IFRAME" &&
							!(L != null && L.contains(s.document.activeElement)) &&
							t(m);
					}, 0);
				}),
		].filter(Boolean);
	return () => d.forEach((m) => m());
}
function Yc(e) {
	return typeof e == "function"
		? e
		: typeof e == "string"
			? (t) => t.key === e
			: Array.isArray(e)
				? (t) => e.includes(t.key)
				: () => !0;
}
function Hu(...e) {
	let t,
		n,
		s = {};
	e.length === 3
		? ((t = e[0]), (n = e[1]), (s = e[2]))
		: e.length === 2
			? typeof e[1] == "object"
				? ((t = !0), (n = e[0]), (s = e[1]))
				: ((t = e[0]), (n = e[1]))
			: ((t = !0), (n = e[0]));
	const {
			target: r = He,
			eventName: o = "keydown",
			passive: i = !1,
			dedupe: l = !1,
		} = s,
		c = Yc(t);
	return Je(
		r,
		o,
		(d) => {
			(d.repeat && Ye(l)) || (c(d) && n(d));
		},
		i,
	);
}
function Jc() {
	const e = me(!1);
	return (
		Nn() &&
			Tt(() => {
				e.value = !0;
			}),
		e
	);
}
function Qc(e) {
	const t = Jc();
	return se(() => (t.value, !!e()));
}
function Zc(e, t = {}) {
	const { window: n = He } = t,
		s = Qc(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
	let r;
	const o = me(!1),
		i = (u) => {
			o.value = u.matches;
		},
		l = () => {
			r &&
				("removeEventListener" in r
					? r.removeEventListener("change", i)
					: r.removeListener(i));
		},
		c = po(() => {
			s.value &&
				(l(),
				(r = n.matchMedia(Ye(e))),
				"addEventListener" in r
					? r.addEventListener("change", i)
					: r.addListener(i),
				(o.value = r.matches));
		});
	return (
		$s(() => {
			c(), l(), (r = void 0);
		}),
		o
	);
}
const tn =
		typeof globalThis < "u"
			? globalThis
			: typeof window < "u"
				? window
				: typeof global < "u"
					? global
					: typeof self < "u"
						? self
						: {},
	nn = "__vueuse_ssr_handlers__",
	ea = ta();
function ta() {
	return nn in tn || (tn[nn] = tn[nn] || {}), tn[nn];
}
function zo(e, t) {
	return ea[e] || t;
}
function na(e) {
	return e == null
		? "any"
		: e instanceof Set
			? "set"
			: e instanceof Map
				? "map"
				: e instanceof Date
					? "date"
					: typeof e == "boolean"
						? "boolean"
						: typeof e == "string"
							? "string"
							: typeof e == "object"
								? "object"
								: Number.isNaN(e)
									? "any"
									: "number";
}
const sa = {
		boolean: { read: (e) => e === "true", write: (e) => String(e) },
		object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
		number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
		any: { read: (e) => e, write: (e) => String(e) },
		string: { read: (e) => e, write: (e) => String(e) },
		map: {
			read: (e) => new Map(JSON.parse(e)),
			write: (e) => JSON.stringify(Array.from(e.entries())),
		},
		set: {
			read: (e) => new Set(JSON.parse(e)),
			write: (e) => JSON.stringify(Array.from(e)),
		},
		date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
	},
	Rr = "vueuse-storage";
function ra(e, t, n, s = {}) {
	var r;
	const {
			flush: o = "pre",
			deep: i = !0,
			listenToStorageChanges: l = !0,
			writeDefaults: c = !0,
			mergeDefaults: u = !1,
			shallow: d,
			window: h = He,
			eventFilter: m,
			onError: w = (T) => {
				console.error(T);
			},
			initOnMounted: L,
		} = s,
		M = (d ? no : me)(typeof t == "function" ? t() : t);
	if (!n)
		try {
			n = zo("getDefaultStorage", () => {
				var T;
				return (T = He) == null ? void 0 : T.localStorage;
			})();
		} catch (T) {
			w(T);
		}
	if (!n) return M;
	const D = Ye(t),
		W = na(D),
		J = (r = s.serializer) != null ? r : sa[W],
		{ pause: p, resume: _ } = Xc(M, () => N(M.value), {
			flush: o,
			deep: i,
			eventFilter: m,
		});
	return (
		h &&
			l &&
			Go(() => {
				Je(h, "storage", R), Je(h, Rr, V), L && R();
			}),
		L || R(),
		M
	);
	function N(T) {
		try {
			if (T == null) n.removeItem(e);
			else {
				const S = J.write(T),
					K = n.getItem(e);
				K !== S &&
					(n.setItem(e, S),
					h &&
						h.dispatchEvent(
							new CustomEvent(Rr, {
								detail: { key: e, oldValue: K, newValue: S, storageArea: n },
							}),
						));
			}
		} catch (S) {
			w(S);
		}
	}
	function I(T) {
		const S = T ? T.newValue : n.getItem(e);
		if (S == null) return c && D != null && n.setItem(e, J.write(D)), D;
		if (!T && u) {
			const K = J.read(S);
			return typeof u == "function"
				? u(K, D)
				: W === "object" && !Array.isArray(K)
					? { ...D, ...K }
					: K;
		} else return typeof S != "string" ? S : J.read(S);
	}
	function V(T) {
		R(T.detail);
	}
	function R(T) {
		if (!(T && T.storageArea !== n)) {
			if (T && T.key == null) {
				M.value = D;
				return;
			}
			if (!(T && T.key !== e)) {
				p();
				try {
					(T == null ? void 0 : T.newValue) !== J.write(M.value) &&
						(M.value = I(T));
				} catch (S) {
					w(S);
				} finally {
					T ? Tn(_) : _();
				}
			}
		}
	}
}
function Xo(e) {
	return Zc("(prefers-color-scheme: dark)", e);
}
function oa(e = {}) {
	const {
			selector: t = "html",
			attribute: n = "class",
			initialValue: s = "auto",
			window: r = He,
			storage: o,
			storageKey: i = "vueuse-color-scheme",
			listenToStorageChanges: l = !0,
			storageRef: c,
			emitAuto: u,
			disableTransition: d = !0,
		} = e,
		h = { auto: "", light: "light", dark: "dark", ...(e.modes || {}) },
		m = Xo({ window: r }),
		w = se(() => (m.value ? "dark" : "light")),
		L =
			c ||
			(i == null
				? qo(s)
				: ra(i, s, o, { window: r, listenToStorageChanges: l })),
		M = se(() => (L.value === "auto" ? w.value : L.value)),
		D = zo("updateHTMLAttrs", (_, N, I) => {
			const V =
				typeof _ == "string"
					? r == null
						? void 0
						: r.document.querySelector(_)
					: gt(_);
			if (!V) return;
			let R;
			if (
				(d &&
					((R = r.document.createElement("style")),
					R.appendChild(
						document.createTextNode(
							"*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
						),
					),
					r.document.head.appendChild(R)),
				N === "class")
			) {
				const T = I.split(/\s/g);
				Object.values(h)
					.flatMap((S) => (S || "").split(/\s/g))
					.filter(Boolean)
					.forEach((S) => {
						T.includes(S) ? V.classList.add(S) : V.classList.remove(S);
					});
			} else V.setAttribute(N, I);
			d && (r.getComputedStyle(R).opacity, document.head.removeChild(R));
		});
	function W(_) {
		var N;
		D(t, n, (N = h[_]) != null ? N : _);
	}
	function J(_) {
		e.onChanged ? e.onChanged(_, W) : W(_);
	}
	Xe(M, J, { flush: "post", immediate: !0 }), Go(() => J(M.value));
	const p = se({
		get() {
			return u ? L.value : M.value;
		},
		set(_) {
			L.value = _;
		},
	});
	try {
		return Object.assign(p, { store: L, system: w, state: M });
	} catch {
		return p;
	}
}
function ia(e = {}) {
	const { valueDark: t = "dark", valueLight: n = "", window: s = He } = e,
		r = oa({
			...e,
			onChanged: (l, c) => {
				var u;
				e.onChanged
					? (u = e.onChanged) == null || u.call(e, l === "dark", c, l)
					: c(l);
			},
			modes: { dark: t, light: n },
		}),
		o = se(() =>
			r.system ? r.system.value : Xo({ window: s }).value ? "dark" : "light",
		);
	return se({
		get() {
			return r.value === "dark";
		},
		set(l) {
			const c = l ? "dark" : "light";
			o.value === c ? (r.value = "auto") : (r.value = c);
		},
	});
}
function Xn(e) {
	return typeof Window < "u" && e instanceof Window
		? e.document.documentElement
		: typeof Document < "u" && e instanceof Document
			? e.documentElement
			: e;
}
function Yo(e) {
	const t = window.getComputedStyle(e);
	if (
		t.overflowX === "scroll" ||
		t.overflowY === "scroll" ||
		(t.overflowX === "auto" && e.clientWidth < e.scrollWidth) ||
		(t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
	)
		return !0;
	{
		const n = e.parentNode;
		return !n || n.tagName === "BODY" ? !1 : Yo(n);
	}
}
function la(e) {
	const t = e || window.event,
		n = t.target;
	return Yo(n)
		? !1
		: t.touches.length > 1
			? !0
			: (t.preventDefault && t.preventDefault(), !1);
}
const sn = new WeakMap();
function ju(e, t = !1) {
	const n = me(t);
	let s = null,
		r;
	Xe(
		qo(e),
		(l) => {
			const c = Xn(Ye(l));
			if (c) {
				const u = c;
				sn.get(u) || sn.set(u, r), n.value && (u.style.overflow = "hidden");
			}
		},
		{ immediate: !0 },
	);
	const o = () => {
			const l = Xn(Ye(e));
			!l ||
				n.value ||
				(ps &&
					(s = Je(
						l,
						"touchmove",
						(c) => {
							la(c);
						},
						{ passive: !1 },
					)),
				(l.style.overflow = "hidden"),
				(n.value = !0));
		},
		i = () => {
			var l;
			const c = Xn(Ye(e));
			!c ||
				!n.value ||
				(ps && (s == null || s()),
				(c.style.overflow = (l = sn.get(c)) != null ? l : ""),
				sn.delete(c),
				(n.value = !1));
		};
	return (
		$s(i),
		se({
			get() {
				return n.value;
			},
			set(l) {
				l ? o() : i();
			},
		})
	);
}
function Du(e = {}) {
	const { window: t = He, behavior: n = "auto" } = e;
	if (!t) return { x: me(0), y: me(0) };
	const s = me(t.scrollX),
		r = me(t.scrollY),
		o = se({
			get() {
				return s.value;
			},
			set(l) {
				scrollTo({ left: l, behavior: n });
			},
		}),
		i = se({
			get() {
				return r.value;
			},
			set(l) {
				scrollTo({ top: l, behavior: n });
			},
		});
	return (
		Je(
			t,
			"scroll",
			() => {
				(s.value = t.scrollX), (r.value = t.scrollY);
			},
			{ capture: !1, passive: !0 },
		),
		{ x: o, y: i }
	);
}
var Yn = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 },
	ca = {};
const Jo = /^(?:[a-z]+:|\/\/)/i,
	aa = "vitepress-theme-appearance",
	ua = /#.*$/,
	fa = /[?#].*$/,
	da = /(?:(^|\/)index)?\.(?:md|html)$/,
	Ce = typeof document < "u",
	Qo = {
		relativePath: "",
		filePath: "",
		title: "404",
		description: "Not Found",
		headers: [],
		frontmatter: { sidebar: !1, layout: "page" },
		lastUpdated: 0,
		isNotFound: !0,
	};
function ha(e, t, n = !1) {
	if (t === void 0) return !1;
	if (((e = Or(`/${e}`)), n)) return new RegExp(t).test(e);
	if (Or(t) !== e) return !1;
	const s = t.match(ua);
	return s ? (Ce ? location.hash : "") === s[0] : !0;
}
function Or(e) {
	return decodeURI(e).replace(fa, "").replace(da, "$1");
}
function pa(e) {
	return Jo.test(e);
}
function ga(e, t) {
	var s, r, o, i, l, c, u;
	const n =
		Object.keys(e.locales).find(
			(d) => d !== "root" && !pa(d) && ha(t, `/${d}/`, !0),
		) || "root";
	return Object.assign({}, e, {
		localeIndex: n,
		lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
		dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
		title: ((o = e.locales[n]) == null ? void 0 : o.title) ?? e.title,
		titleTemplate:
			((i = e.locales[n]) == null ? void 0 : i.titleTemplate) ??
			e.titleTemplate,
		description:
			((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
		head: ei(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
		themeConfig: {
			...e.themeConfig,
			...((u = e.locales[n]) == null ? void 0 : u.themeConfig),
		},
	});
}
function Zo(e, t) {
	const n = t.title || e.title,
		s = t.titleTemplate ?? e.titleTemplate;
	if (typeof s == "string" && s.includes(":title"))
		return s.replace(/:title/g, n);
	const r = ma(e.title, s);
	return n === r.slice(3) ? n : `${n}${r}`;
}
function ma(e, t) {
	return t === !1
		? ""
		: t === !0 || t === void 0
			? ` | ${e}`
			: e === t
				? ""
				: ` | ${t}`;
}
function _a(e, t) {
	const [n, s] = t;
	if (n !== "meta") return !1;
	const r = Object.entries(s)[0];
	return r == null ? !1 : e.some(([o, i]) => o === n && i[r[0]] === r[1]);
}
function ei(e, t) {
	return [...e.filter((n) => !_a(t, n)), ...t];
}
const ya = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
	ba = /^[a-z]:/i;
function Lr(e) {
	const t = ba.exec(e),
		n = t ? t[0] : "";
	return (
		n +
		e
			.slice(n.length)
			.replace(ya, "_")
			.replace(/(^|\/)_+(?=[^/]*$)/, "$1")
	);
}
const Jn = new Set();
function va(e) {
	if (Jn.size === 0) {
		const n =
			(typeof process == "object" && ca.VITE_EXTRA_EXTENSIONS) ||
			(Yn == null ? void 0 : Yn.VITE_EXTRA_EXTENSIONS) ||
			"";
		(
			"3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" +
			(n && typeof n == "string" ? "," + n : "")
		)
			.split(",")
			.forEach((s) => Jn.add(s));
	}
	const t = e.split(".").pop();
	return t == null || !Jn.has(t.toLowerCase());
}
const wa = Symbol(),
	ct = no(Bc);
function Vu(e) {
	const t = se(() => ga(ct.value, e.data.relativePath)),
		n = t.value.appearance,
		s =
			n === "force-dark"
				? me(!0)
				: n
					? ia({
							storageKey: aa,
							initialValue: () => (typeof n == "string" ? n : "auto"),
							...(typeof n == "object" ? n : {}),
						})
					: me(!1);
	return {
		site: t,
		theme: se(() => t.value.themeConfig),
		page: se(() => e.data),
		frontmatter: se(() => e.data.frontmatter),
		params: se(() => e.data.params),
		lang: se(() => t.value.lang),
		dir: se(() => e.data.frontmatter.dir || t.value.dir),
		localeIndex: se(() => t.value.localeIndex || "root"),
		title: se(() => Zo(t.value, e.data)),
		description: se(() => e.data.description || t.value.description),
		isDark: s,
	};
}
function Ea() {
	const e = Et(wa);
	if (!e) throw new Error("vitepress data not properly injected in app");
	return e;
}
function Ca(e, t) {
	return `${e}${t}`.replace(/\/+/g, "/");
}
function Ir(e) {
	return Jo.test(e) || !e.startsWith("/") ? e : Ca(ct.value.base, e);
}
function xa(e) {
	let t = e.replace(/\.html$/, "");
	if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, "/index")), Ce)) {
		const n = "/";
		t = Lr(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
		let s = __VP_HASH_MAP__[t.toLowerCase()];
		if (
			(s ||
				((t = t.endsWith("_index.md")
					? t.slice(0, -9) + ".md"
					: t.slice(0, -3) + "_index.md"),
				(s = __VP_HASH_MAP__[t.toLowerCase()])),
			!s)
		)
			return null;
		t = `${n}assets/${t}.${s}.js`;
	} else t = `./${Lr(t.slice(1).replace(/\//g, "_"))}.md.js`;
	return t;
}
let cn = [];
function Bu(e) {
	cn.push(e),
		Pn(() => {
			cn = cn.filter((t) => t !== e);
		});
}
function Sa() {
	let e = ct.value.scrollOffset,
		t = 0,
		n = 24;
	if (
		(typeof e == "object" &&
			"padding" in e &&
			((n = e.padding), (e = e.selector)),
		typeof e == "number")
	)
		t = e;
	else if (typeof e == "string") t = Pr(e, n);
	else if (Array.isArray(e))
		for (const s of e) {
			const r = Pr(s, n);
			if (r) {
				t = r;
				break;
			}
		}
	return t;
}
function Pr(e, t) {
	const n = document.querySelector(e);
	if (!n) return 0;
	const s = n.getBoundingClientRect().bottom;
	return s < 0 ? 0 : s + t;
}
const Ta = Symbol(),
	ti = "http://a.com",
	Aa = () => ({ path: "/", component: null, data: Qo });
function ku(e, t) {
	const n = Cn(Aa()),
		s = { route: n, go: r };
	async function r(l = Ce ? location.href : "/") {
		var c, u;
		(l = yn(l)),
			(await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
				!1 &&
				(Nr(l),
				await i(l),
				await ((u = s.onAfterRouteChanged) == null ? void 0 : u.call(s, l)));
	}
	let o = null;
	async function i(l, c = 0, u = !1) {
		var m;
		if (
			(await ((m = s.onBeforePageLoad) == null ? void 0 : m.call(s, l))) === !1
		)
			return;
		const d = new URL(l, ti),
			h = (o = d.pathname);
		try {
			let w = await e(h);
			if (!w) throw new Error(`Page not found: ${h}`);
			if (o === h) {
				o = null;
				const { default: L, __pageData: M } = w;
				if (!L) throw new Error(`Invalid route component: ${L}`);
				(n.path = Ce ? h : Ir(h)),
					(n.component = Lt(L)),
					(n.data = Lt(M)),
					Ce &&
						Tn(() => {
							let D =
								ct.value.base +
								M.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
							if (
								(!ct.value.cleanUrls && !D.endsWith("/") && (D += ".html"),
								D !== d.pathname &&
									((d.pathname = D),
									(l = D + d.search + d.hash),
									history.replaceState(null, "", l)),
								d.hash && !c)
							) {
								let W = null;
								try {
									W = document.getElementById(
										decodeURIComponent(d.hash).slice(1),
									);
								} catch (J) {
									console.warn(J);
								}
								if (W) {
									Mr(W, d.hash);
									return;
								}
							}
							window.scrollTo(0, c);
						});
			}
		} catch (w) {
			if (
				(!/fetch|Page not found/.test(w.message) &&
					!/^\/404(\.html|\/)?$/.test(l) &&
					console.error(w),
				!u)
			)
				try {
					const L = await fetch(ct.value.base + "hashmap.json");
					(window.__VP_HASH_MAP__ = await L.json()), await i(l, c, !0);
					return;
				} catch {}
			o === h &&
				((o = null),
				(n.path = Ce ? h : Ir(h)),
				(n.component = t ? Lt(t) : null),
				(n.data = Qo));
		}
	}
	return (
		Ce &&
			(window.addEventListener(
				"click",
				(l) => {
					if (l.target.closest("button")) return;
					const u = l.target.closest("a");
					if (
						u &&
						!u.closest(".vp-raw") &&
						(u instanceof SVGElement || !u.download)
					) {
						const { target: d } = u,
							{
								href: h,
								origin: m,
								pathname: w,
								hash: L,
								search: M,
							} = new URL(
								u.href instanceof SVGAnimatedString ? u.href.animVal : u.href,
								u.baseURI,
							),
							D = window.location;
						!l.ctrlKey &&
							!l.shiftKey &&
							!l.altKey &&
							!l.metaKey &&
							!d &&
							m === D.origin &&
							va(w) &&
							(l.preventDefault(),
							w === D.pathname && M === D.search
								? (L !== D.hash &&
										(history.pushState(null, "", L),
										window.dispatchEvent(new Event("hashchange"))),
									L
										? Mr(u, L, u.classList.contains("header-anchor"))
										: (Nr(h), window.scrollTo(0, 0)))
								: r(h));
					}
				},
				{ capture: !0 },
			),
			window.addEventListener("popstate", async (l) => {
				var c;
				await i(yn(location.href), (l.state && l.state.scrollPosition) || 0),
					(c = s.onAfterRouteChanged) == null || c.call(s, location.href);
			}),
			window.addEventListener("hashchange", (l) => {
				l.preventDefault();
			})),
		s
	);
}
function Ra() {
	const e = Et(Ta);
	if (!e) throw new Error("useRouter() is called without provider.");
	return e;
}
function ni() {
	return Ra().route;
}
function Mr(e, t, n = !1) {
	let s = null;
	try {
		s = e.classList.contains("header-anchor")
			? e
			: document.getElementById(decodeURIComponent(t).slice(1));
	} catch (r) {
		console.warn(r);
	}
	if (s) {
		let r = function () {
			!n || Math.abs(i - window.scrollY) > window.innerHeight
				? window.scrollTo(0, i)
				: window.scrollTo({ left: 0, top: i, behavior: "smooth" });
		};
		const o = parseInt(window.getComputedStyle(s).paddingTop, 10),
			i = window.scrollY + s.getBoundingClientRect().top - Sa() + o;
		requestAnimationFrame(r);
	}
}
function Nr(e) {
	Ce &&
		yn(e) !== yn(location.href) &&
		(history.replaceState({ scrollPosition: window.scrollY }, document.title),
		history.pushState(null, "", e));
}
function yn(e) {
	const t = new URL(e, ti);
	return (
		(t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, "$1")),
		ct.value.cleanUrls
			? (t.pathname = t.pathname.replace(/\.html$/, ""))
			: !t.pathname.endsWith("/") &&
				!t.pathname.endsWith(".html") &&
				(t.pathname += ".html"),
		t.pathname + t.search + t.hash
	);
}
const Qn = () => cn.forEach((e) => e()),
	Uu = bo({
		name: "VitePressContent",
		props: { as: { type: [Object, String], default: "div" } },
		setup(e) {
			const t = ni(),
				{ site: n } = Ea();
			return () =>
				ds(e.as, n.value.contentProps ?? { style: { position: "relative" } }, [
					t.component
						? ds(t.component, {
								onVnodeMounted: Qn,
								onVnodeUpdated: Qn,
								onVnodeUnmounted: Qn,
							})
						: "404 Page Not Found",
				]);
		},
	}),
	Ku = bo({
		setup(e, { slots: t }) {
			const n = me(!1);
			return (
				Tt(() => {
					n.value = !0;
				}),
				() => (n.value && t.default ? t.default() : null)
			);
		},
	});
function Wu() {
	Ce &&
		window.addEventListener("click", (e) => {
			var n;
			const t = e.target;
			if (t.matches(".vp-code-group input")) {
				const s = (n = t.parentElement) == null ? void 0 : n.parentElement;
				if (!s) return;
				const r = Array.from(s.querySelectorAll("input")).indexOf(t);
				if (r < 0) return;
				const o = s.querySelector(".blocks");
				if (!o) return;
				const i = Array.from(o.children).find((u) =>
					u.classList.contains("active"),
				);
				if (!i) return;
				const l = o.children[r];
				if (!l || i === l) return;
				i.classList.remove("active"), l.classList.add("active");
				const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`);
				c == null || c.scrollIntoView({ block: "nearest" });
			}
		});
}
function qu() {
	if (Ce) {
		const e = new WeakMap();
		window.addEventListener("click", (t) => {
			var s;
			const n = t.target;
			if (n.matches('div[class*="language-"] > button.copy')) {
				const r = n.parentElement,
					o =
						(s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling;
				if (!r || !o) return;
				const i = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className),
					l = [".vp-copy-ignore", ".diff.remove"],
					c = o.cloneNode(!0);
				c.querySelectorAll(l.join(",")).forEach((d) => d.remove());
				let u = c.textContent || "";
				i && (u = u.replace(/^ *(\$|>) /gm, "").trim()),
					Oa(u).then(() => {
						n.classList.add("copied"), clearTimeout(e.get(n));
						const d = setTimeout(() => {
							n.classList.remove("copied"), n.blur(), e.delete(n);
						}, 2e3);
						e.set(n, d);
					});
			}
		});
	}
}
async function Oa(e) {
	try {
		return navigator.clipboard.writeText(e);
	} catch {
		const t = document.createElement("textarea"),
			n = document.activeElement;
		(t.value = e),
			t.setAttribute("readonly", ""),
			(t.style.contain = "strict"),
			(t.style.position = "absolute"),
			(t.style.left = "-9999px"),
			(t.style.fontSize = "12pt");
		const s = document.getSelection(),
			r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
		document.body.appendChild(t),
			t.select(),
			(t.selectionStart = 0),
			(t.selectionEnd = e.length),
			document.execCommand("copy"),
			document.body.removeChild(t),
			r && (s.removeAllRanges(), s.addRange(r)),
			n && n.focus();
	}
}
function Gu(e, t) {
	let n = !0,
		s = [];
	const r = (o) => {
		if (n) {
			(n = !1),
				o.forEach((l) => {
					const c = Zn(l);
					for (const u of document.head.children)
						if (u.isEqualNode(c)) {
							s.push(u);
							return;
						}
				});
			return;
		}
		const i = o.map(Zn);
		s.forEach((l, c) => {
			const u = i.findIndex((d) =>
				d == null ? void 0 : d.isEqualNode(l ?? null),
			);
			u !== -1 ? delete i[u] : (l == null || l.remove(), delete s[c]);
		}),
			i.forEach((l) => l && document.head.appendChild(l)),
			(s = [...s, ...i].filter(Boolean));
	};
	po(() => {
		const o = e.data,
			i = t.value,
			l = o && o.description,
			c = (o && o.frontmatter.head) || [],
			u = Zo(i, o);
		u !== document.title && (document.title = u);
		const d = l || i.description;
		let h = document.querySelector("meta[name=description]");
		h
			? h.getAttribute("content") !== d && h.setAttribute("content", d)
			: Zn(["meta", { name: "description", content: d }]),
			r(ei(i.head, Ia(c)));
	});
}
function Zn([e, t, n]) {
	const s = document.createElement(e);
	for (const r in t) s.setAttribute(r, t[r]);
	return (
		n && (s.innerHTML = n), e === "script" && !t.async && (s.async = !1), s
	);
}
function La(e) {
	return e[0] === "meta" && e[1] && e[1].name === "description";
}
function Ia(e) {
	return e.filter((t) => !La(t));
}
const es = new Set(),
	si = () => document.createElement("link"),
	Pa = (e) => {
		const t = si();
		(t.rel = "prefetch"), (t.href = e), document.head.appendChild(t);
	},
	Ma = (e) => {
		const t = new XMLHttpRequest();
		t.open("GET", e, (t.withCredentials = !0)), t.send();
	};
let rn;
const Na =
	Ce &&
	(rn = si()) &&
	rn.relList &&
	rn.relList.supports &&
	rn.relList.supports("prefetch")
		? Pa
		: Ma;
function zu() {
	if (!Ce || !window.IntersectionObserver) return;
	let e;
	if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
		return;
	const t = window.requestIdleCallback || setTimeout;
	let n = null;
	const s = () => {
		n && n.disconnect(),
			(n = new IntersectionObserver((o) => {
				o.forEach((i) => {
					if (i.isIntersecting) {
						const l = i.target;
						n.unobserve(l);
						const { pathname: c } = l;
						if (!es.has(c)) {
							es.add(c);
							const u = xa(c);
							u && Na(u);
						}
					}
				});
			})),
			t(() => {
				document.querySelectorAll("#app a").forEach((o) => {
					const { hostname: i, pathname: l } = new URL(
							o.href instanceof SVGAnimatedString ? o.href.animVal : o.href,
							o.baseURI,
						),
						c = l.match(/\.\w+$/);
					(c && c[0] !== ".html") ||
						(o.target !== "_blank" &&
							i === location.hostname &&
							(l !== location.pathname ? n.observe(o) : es.add(l)));
				});
			});
	};
	Tt(s);
	const r = ni();
	Xe(() => r.path, s),
		Pn(() => {
			n && n.disconnect();
		});
}
export {
	Xa as $,
	Pn as A,
	Va as B,
	wl as C,
	Sa as D,
	ja as E,
	ge as F,
	Ba as G,
	no as H,
	Bu as I,
	ae as J,
	Da as K,
	Jo as L,
	ni as M,
	Jl as N,
	Et as O,
	$u as P,
	Hu as Q,
	bs as R,
	Tn as S,
	ko as T,
	Du as U,
	qa as V,
	xn as W,
	Fu as X,
	ju as Y,
	Fl as Z,
	Ja as _,
	jo as a,
	Ua as a0,
	za as a1,
	Ka as a2,
	ds as a3,
	Qa as a4,
	Za as a5,
	eu as a6,
	tu as a7,
	nu as a8,
	su as a9,
	Lu as aA,
	Iu as aB,
	Pu as aC,
	Mu as aD,
	Nu as aE,
	Gu as aF,
	Ta as aG,
	Vu as aH,
	wa as aI,
	Uu as aJ,
	Ku as aK,
	ct as aL,
	Ya as aM,
	ku as aN,
	xa as aO,
	zu as aP,
	qu as aQ,
	Wu as aR,
	ru as aa,
	ou as ab,
	iu as ac,
	lu as ad,
	cu as ae,
	au as af,
	uu as ag,
	fu as ah,
	du as ai,
	hu as aj,
	pu as ak,
	gu as al,
	mu as am,
	_u as an,
	yu as ao,
	bu as ap,
	vu as aq,
	wu as ar,
	Eu as as,
	Cu as at,
	xu as au,
	Su as av,
	Tu as aw,
	Au as ax,
	Ru as ay,
	Ou as az,
	Fo as b,
	Wa as c,
	bo as d,
	Ga as e,
	va as f,
	Ir as g,
	me as h,
	pa as i,
	Ce as j,
	se as k,
	Tt as l,
	Ho as m,
	vs as n,
	Mo as o,
	ro as p,
	$a as q,
	ka as r,
	Ha as s,
	Fa as t,
	Ea as u,
	ha as v,
	rl as w,
	Zc as x,
	Xe as y,
	po as z,
};
