var Ll = Object.defineProperty;
var $l = (d, i, l) =>
	i in d
		? Ll(d, i, { enumerable: !0, configurable: !0, writable: !0, value: l })
		: (d[i] = l);
var ye = (d, i, l) => ($l(d, typeof i != "symbol" ? i + "" : i, l), l);
import {
	d as G,
	o as g,
	c as $,
	r as L,
	n as me,
	a as He,
	t as de,
	b as K,
	w as E,
	T as Fn,
	e as F,
	_ as z,
	u as zs,
	i as Il,
	f as Tl,
	g as zn,
	h as ve,
	j as yt,
	k as Y,
	l as lt,
	m as T,
	p as w,
	q as Ge,
	s as Ze,
	v as at,
	x as Bn,
	y as ct,
	z as rn,
	A as jn,
	B as js,
	C as Pl,
	D as Al,
	E as Xe,
	F as ge,
	G as Ae,
	H as Ws,
	I as an,
	J as U,
	K as it,
	L as Gs,
	M as ln,
	N as nn,
	O as cn,
	P as El,
	Q as Ml,
	R as Ol,
	S as Dl,
	U as Zs,
	V as Nl,
	W as xl,
	X as Vl,
	Y as Ks,
	Z as qs,
	$ as Bl,
	a0 as Hl,
	a1 as Ul,
	a2 as Rl,
	a3 as Fl,
} from "./framework.CWY0oj59.js";
const zl = G({
		__name: "VPBadge",
		props: { text: {}, type: { default: "tip" } },
		setup(d) {
			return (i, l) => (
				g(),
				$(
					"span",
					{ class: me(["VPBadge", i.type]) },
					[L(i.$slots, "default", {}, () => [He(de(i.text), 1)])],
					2,
				)
			);
		},
	}),
	jl = { key: 0, class: "VPBackdrop" },
	Wl = G({
		__name: "VPBackdrop",
		props: { show: { type: Boolean } },
		setup(d) {
			return (i, l) => (
				g(),
				K(
					Fn,
					{ name: "fade" },
					{
						default: E(() => [i.show ? (g(), $("div", jl)) : F("", !0)]),
						_: 1,
					},
				)
			);
		},
	}),
	Gl = z(Wl, [["__scopeId", "data-v-c79a1216"]]),
	se = zs;
function Zl(d, i) {
	let l,
		_ = !1;
	return () => {
		l && clearTimeout(l),
			_
				? (l = setTimeout(d, i))
				: (d(), (_ = !0) && setTimeout(() => (_ = !1), i));
	};
}
function Hn(d) {
	return /^\//.test(d) ? d : `/${d}`;
}
function Wn(d) {
	const {
		pathname: i,
		search: l,
		hash: _,
		protocol: p,
	} = new URL(d, "http://a.com");
	if (Il(d) || d.startsWith("#") || !p.startsWith("http") || !Tl(i)) return d;
	const { site: b } = se(),
		S =
			i.endsWith("/") || i.endsWith(".html")
				? d
				: d.replace(
						/(?:(^\.+)\/)?.*$/,
						`$1${i.replace(/(\.md)?$/, b.value.cleanUrls ? "" : ".html")}${l}${_}`,
					);
	return zn(S);
}
const Gn = ve(yt ? location.hash : "");
yt &&
	window.addEventListener("hashchange", () => {
		Gn.value = location.hash;
	});
function Ot({ removeCurrent: d = !0, correspondingLink: i = !1 } = {}) {
	const { site: l, localeIndex: _, page: p, theme: b } = se(),
		S = Y(() => {
			var I, D;
			return {
				label: (I = l.value.locales[_.value]) == null ? void 0 : I.label,
				link:
					((D = l.value.locales[_.value]) == null ? void 0 : D.link) ||
					(_.value === "root" ? "/" : `/${_.value}/`),
			};
		});
	return {
		localeLinks: Y(() =>
			Object.entries(l.value.locales).flatMap(([I, D]) =>
				d && S.value.label === D.label
					? []
					: {
							text: D.label,
							link:
								Kl(
									D.link || (I === "root" ? "/" : `/${I}/`),
									b.value.i18nRouting !== !1 && i,
									p.value.relativePath.slice(S.value.link.length - 1),
									!l.value.cleanUrls,
								) + Gn.value,
						},
			),
		),
		currentLang: S,
	};
}
function Kl(d, i, l, _) {
	return i
		? d.replace(/\/$/, "") +
				Hn(
					l
						.replace(/(^|\/)index\.md$/, "$1")
						.replace(/\.md$/, _ ? ".html" : ""),
				)
		: d;
}
const ql = (d) => (Ge("data-v-f87ff6e4"), (d = d()), Ze(), d),
	Yl = { class: "NotFound" },
	Xl = { class: "code" },
	Jl = { class: "title" },
	Ql = ql(() => T("div", { class: "divider" }, null, -1)),
	ec = { class: "quote" },
	tc = { class: "action" },
	nc = ["href", "aria-label"],
	oc = G({
		__name: "NotFound",
		setup(d) {
			const { site: i, theme: l } = se(),
				{ localeLinks: _ } = Ot({ removeCurrent: !1 }),
				p = ve("/");
			return (
				lt(() => {
					var S;
					const b = window.location.pathname
						.replace(i.value.base, "")
						.replace(/(^.*?\/).*$/, "/$1");
					_.value.length &&
						(p.value =
							((S = _.value.find(({ link: P }) => P.startsWith(b))) == null
								? void 0
								: S.link) || _.value[0].link);
				}),
				(b, S) => {
					var P, I, D, Z, ee;
					return (
						g(),
						$("div", Yl, [
							T(
								"p",
								Xl,
								de(((P = w(l).notFound) == null ? void 0 : P.code) ?? "404"),
								1,
							),
							T(
								"h1",
								Jl,
								de(
									((I = w(l).notFound) == null ? void 0 : I.title) ??
										"PAGE NOT FOUND",
								),
								1,
							),
							Ql,
							T(
								"blockquote",
								ec,
								de(
									((D = w(l).notFound) == null ? void 0 : D.quote) ??
										"But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
								),
								1,
							),
							T("div", tc, [
								T(
									"a",
									{
										class: "link",
										href: w(zn)(p.value),
										"aria-label":
											((Z = w(l).notFound) == null ? void 0 : Z.linkLabel) ??
											"go to home",
									},
									de(
										((ee = w(l).notFound) == null ? void 0 : ee.linkText) ??
											"Take me home",
									),
									9,
									nc,
								),
							]),
						])
					);
				}
			);
		},
	}),
	sc = z(oc, [["__scopeId", "data-v-f87ff6e4"]]);
function Ys(d, i) {
	if (Array.isArray(d)) return on(d);
	if (d == null) return [];
	i = Hn(i);
	const l = Object.keys(d)
			.sort((p, b) => b.split("/").length - p.split("/").length)
			.find((p) => i.startsWith(Hn(p))),
		_ = l ? d[l] : [];
	return Array.isArray(_) ? on(_) : on(_.items, _.base);
}
function rc(d) {
	const i = [];
	let l = 0;
	for (const _ in d) {
		const p = d[_];
		if (p.items) {
			l = i.push(p);
			continue;
		}
		i[l] || i.push({ items: [] }), i[l].items.push(p);
	}
	return i;
}
function ic(d) {
	const i = [];
	function l(_) {
		for (const p of _)
			p.text &&
				p.link &&
				i.push({ text: p.text, link: p.link, docFooterText: p.docFooterText }),
				p.items && l(p.items);
	}
	return l(d), i;
}
function Un(d, i) {
	return Array.isArray(i)
		? i.some((l) => Un(d, l))
		: at(d, i.link)
			? !0
			: i.items
				? Un(d, i.items)
				: !1;
}
function on(d, i) {
	return [...d].map((l) => {
		const _ = { ...l },
			p = _.base || i;
		return (
			p && _.link && (_.link = p + _.link),
			_.items && (_.items = on(_.items, p)),
			_
		);
	});
}
function Je() {
	const { frontmatter: d, page: i, theme: l } = se(),
		_ = Bn("(min-width: 960px)"),
		p = ve(!1),
		b = Y(() => {
			const ce = l.value.sidebar,
				te = i.value.relativePath;
			return ce ? Ys(ce, te) : [];
		}),
		S = ve(b.value);
	ct(b, (ce, te) => {
		JSON.stringify(ce) !== JSON.stringify(te) && (S.value = b.value);
	});
	const P = Y(
			() =>
				d.value.sidebar !== !1 &&
				S.value.length > 0 &&
				d.value.layout !== "home",
		),
		I = Y(() =>
			D
				? d.value.aside == null
					? l.value.aside === "left"
					: d.value.aside === "left"
				: !1,
		),
		D = Y(() =>
			d.value.layout === "home"
				? !1
				: d.value.aside != null
					? !!d.value.aside
					: l.value.aside !== !1,
		),
		Z = Y(() => P.value && _.value),
		ee = Y(() => (P.value ? rc(S.value) : []));
	function fe() {
		p.value = !0;
	}
	function le() {
		p.value = !1;
	}
	function ae() {
		p.value ? le() : fe();
	}
	return {
		isOpen: p,
		sidebar: S,
		sidebarGroups: ee,
		hasSidebar: P,
		hasAside: D,
		leftAside: I,
		isSidebarEnabled: Z,
		open: fe,
		close: le,
		toggle: ae,
	};
}
function ac(d, i) {
	let l;
	rn(() => {
		l = d.value ? document.activeElement : void 0;
	}),
		lt(() => {
			window.addEventListener("keyup", _);
		}),
		jn(() => {
			window.removeEventListener("keyup", _);
		});
	function _(p) {
		p.key === "Escape" && d.value && (i(), l == null || l.focus());
	}
}
function lc(d) {
	const { page: i } = se(),
		l = ve(!1),
		_ = Y(() => d.value.collapsed != null),
		p = Y(() => !!d.value.link),
		b = ve(!1),
		S = () => {
			b.value = at(i.value.relativePath, d.value.link);
		};
	ct([i, d, Gn], S), lt(S);
	const P = Y(() =>
			b.value
				? !0
				: d.value.items
					? Un(i.value.relativePath, d.value.items)
					: !1,
		),
		I = Y(() => !!(d.value.items && d.value.items.length));
	rn(() => {
		l.value = !!(_.value && d.value.collapsed);
	}),
		js(() => {
			(b.value || P.value) && (l.value = !1);
		});
	function D() {
		_.value && (l.value = !l.value);
	}
	return {
		collapsed: l,
		collapsible: _,
		isLink: p,
		isActiveLink: b,
		hasActiveLink: P,
		hasChildren: I,
		toggle: D,
	};
}
function cc() {
	const { hasSidebar: d } = Je(),
		i = Bn("(min-width: 960px)"),
		l = Bn("(min-width: 1280px)");
	return {
		isAsideEnabled: Y(() =>
			!l.value && !i.value ? !1 : d.value ? l.value : i.value,
		),
	};
}
const Rn = [];
function Xs(d) {
	return (
		(typeof d.outline == "object" &&
			!Array.isArray(d.outline) &&
			d.outline.label) ||
		d.outlineTitle ||
		"On this page"
	);
}
function Zn(d) {
	const i = [...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")]
		.filter((l) => l.id && l.hasChildNodes())
		.map((l) => {
			const _ = Number(l.tagName[1]);
			return { element: l, title: uc(l), link: "#" + l.id, level: _ };
		});
	return dc(i, d);
}
function uc(d) {
	let i = "";
	for (const l of d.childNodes)
		if (l.nodeType === 1) {
			if (
				l.classList.contains("VPBadge") ||
				l.classList.contains("header-anchor") ||
				l.classList.contains("ignore-header")
			)
				continue;
			i += l.textContent;
		} else l.nodeType === 3 && (i += l.textContent);
	return i.trim();
}
function dc(d, i) {
	if (i === !1) return [];
	const l = (typeof i == "object" && !Array.isArray(i) ? i.level : i) || 2,
		[_, p] = typeof l == "number" ? [l, l] : l === "deep" ? [2, 6] : l;
	(d = d.filter((S) => S.level >= _ && S.level <= p)), (Rn.length = 0);
	for (const { element: S, link: P } of d) Rn.push({ element: S, link: P });
	const b = [];
	e: for (let S = 0; S < d.length; S++) {
		const P = d[S];
		if (S === 0) b.push(P);
		else {
			for (let I = S - 1; I >= 0; I--) {
				const D = d[I];
				if (D.level < P.level) {
					(D.children || (D.children = [])).push(P);
					continue e;
				}
			}
			b.push(P);
		}
	}
	return b;
}
function fc(d, i) {
	const { isAsideEnabled: l } = cc(),
		_ = Zl(b, 100);
	let p = null;
	lt(() => {
		requestAnimationFrame(b), window.addEventListener("scroll", _);
	}),
		Pl(() => {
			S(location.hash);
		}),
		jn(() => {
			window.removeEventListener("scroll", _);
		});
	function b() {
		if (!l.value) return;
		const P = window.scrollY,
			I = window.innerHeight,
			D = document.body.offsetHeight,
			Z = Math.abs(P + I - D) < 1,
			ee = Rn.map(({ element: le, link: ae }) => ({ link: ae, top: hc(le) }))
				.filter(({ top: le }) => !Number.isNaN(le))
				.sort((le, ae) => le.top - ae.top);
		if (!ee.length) {
			S(null);
			return;
		}
		if (P < 1) {
			S(null);
			return;
		}
		if (Z) {
			S(ee[ee.length - 1].link);
			return;
		}
		let fe = null;
		for (const { link: le, top: ae } of ee) {
			if (ae > P + Al() + 4) break;
			fe = le;
		}
		S(fe);
	}
	function S(P) {
		p && p.classList.remove("active"),
			P == null
				? (p = null)
				: (p = d.value.querySelector(`a[href="${decodeURIComponent(P)}"]`));
		const I = p;
		I
			? (I.classList.add("active"),
				(i.value.style.top = I.offsetTop + 39 + "px"),
				(i.value.style.opacity = "1"))
			: ((i.value.style.top = "33px"), (i.value.style.opacity = "0"));
	}
}
function hc(d) {
	let i = 0;
	for (; d !== document.body; ) {
		if (d === null) return NaN;
		(i += d.offsetTop), (d = d.offsetParent);
	}
	return i;
}
const _c = ["href", "title"],
	pc = G({
		__name: "VPDocOutlineItem",
		props: { headers: {}, root: { type: Boolean } },
		setup(d) {
			function i({ target: l }) {
				const _ = l.href.split("#")[1],
					p = document.getElementById(decodeURIComponent(_));
				p == null || p.focus({ preventScroll: !0 });
			}
			return (l, _) => {
				const p = Xe("VPDocOutlineItem", !0);
				return (
					g(),
					$(
						"ul",
						{ class: me(["VPDocOutlineItem", l.root ? "root" : "nested"]) },
						[
							(g(!0),
							$(
								ge,
								null,
								Ae(
									l.headers,
									({ children: b, link: S, title: P }) => (
										g(),
										$("li", null, [
											T(
												"a",
												{
													class: "outline-link",
													href: S,
													onClick: i,
													title: P,
												},
												de(P),
												9,
												_c,
											),
											b != null && b.length
												? (g(),
													K(p, { key: 0, headers: b }, null, 8, ["headers"]))
												: F("", !0),
										])
									),
								),
								256,
							)),
						],
						2,
					)
				);
			};
		},
	}),
	Js = z(pc, [["__scopeId", "data-v-b933a997"]]),
	vc = (d) => (Ge("data-v-935f8a84"), (d = d()), Ze(), d),
	mc = { class: "content" },
	gc = { class: "outline-title", role: "heading", "aria-level": "2" },
	bc = { "aria-labelledby": "doc-outline-aria-label" },
	yc = vc(() =>
		T(
			"span",
			{ class: "visually-hidden", id: "doc-outline-aria-label" },
			" Table of Contents for current page ",
			-1,
		),
	),
	kc = G({
		__name: "VPDocAsideOutline",
		setup(d) {
			const { frontmatter: i, theme: l } = se(),
				_ = Ws([]);
			an(() => {
				_.value = Zn(i.value.outline ?? l.value.outline);
			});
			const p = ve(),
				b = ve();
			return (
				fc(p, b),
				(S, P) => (
					g(),
					$(
						"div",
						{
							class: me([
								"VPDocAsideOutline",
								{ "has-outline": _.value.length > 0 },
							]),
							ref_key: "container",
							ref: p,
							role: "navigation",
						},
						[
							T("div", mc, [
								T(
									"div",
									{ class: "outline-marker", ref_key: "marker", ref: b },
									null,
									512,
								),
								T("div", gc, de(w(Xs)(w(l))), 1),
								T("nav", bc, [
									yc,
									U(Js, { headers: _.value, root: !0 }, null, 8, ["headers"]),
								]),
							]),
						],
						2,
					)
				)
			);
		},
	}),
	wc = z(kc, [["__scopeId", "data-v-935f8a84"]]),
	Cc = { class: "VPDocAsideCarbonAds" },
	Sc = G({
		__name: "VPDocAsideCarbonAds",
		props: { carbonAds: {} },
		setup(d) {
			const i = () => null;
			return (l, _) => (
				g(),
				$("div", Cc, [
					U(w(i), { "carbon-ads": l.carbonAds }, null, 8, ["carbon-ads"]),
				])
			);
		},
	}),
	Lc = (d) => (Ge("data-v-3f215769"), (d = d()), Ze(), d),
	$c = { class: "VPDocAside" },
	Ic = Lc(() => T("div", { class: "spacer" }, null, -1)),
	Tc = G({
		__name: "VPDocAside",
		setup(d) {
			const { theme: i } = se();
			return (l, _) => (
				g(),
				$("div", $c, [
					L(l.$slots, "aside-top", {}, void 0, !0),
					L(l.$slots, "aside-outline-before", {}, void 0, !0),
					U(wc),
					L(l.$slots, "aside-outline-after", {}, void 0, !0),
					Ic,
					L(l.$slots, "aside-ads-before", {}, void 0, !0),
					w(i).carbonAds
						? (g(),
							K(Sc, { key: 0, "carbon-ads": w(i).carbonAds }, null, 8, [
								"carbon-ads",
							]))
						: F("", !0),
					L(l.$slots, "aside-ads-after", {}, void 0, !0),
					L(l.$slots, "aside-bottom", {}, void 0, !0),
				])
			);
		},
	}),
	Pc = z(Tc, [["__scopeId", "data-v-3f215769"]]);
function Ac() {
	const { theme: d, page: i } = se();
	return Y(() => {
		const { text: l = "Edit this page", pattern: _ = "" } =
			d.value.editLink || {};
		let p;
		return (
			typeof _ == "function"
				? (p = _(i.value))
				: (p = _.replace(/:path/g, i.value.filePath)),
			{ url: p, text: l }
		);
	});
}
function Ec() {
	const { page: d, theme: i, frontmatter: l } = se();
	return Y(() => {
		var I, D, Z, ee, fe, le, ae, ce;
		const _ = Ys(i.value.sidebar, d.value.relativePath),
			p = ic(_),
			b = p.findIndex((te) => at(d.value.relativePath, te.link)),
			S =
				(((I = i.value.docFooter) == null ? void 0 : I.prev) === !1 &&
					!l.value.prev) ||
				l.value.prev === !1,
			P =
				(((D = i.value.docFooter) == null ? void 0 : D.next) === !1 &&
					!l.value.next) ||
				l.value.next === !1;
		return {
			prev: S
				? void 0
				: {
						text:
							(typeof l.value.prev == "string"
								? l.value.prev
								: typeof l.value.prev == "object"
									? l.value.prev.text
									: void 0) ??
							((Z = p[b - 1]) == null ? void 0 : Z.docFooterText) ??
							((ee = p[b - 1]) == null ? void 0 : ee.text),
						link:
							(typeof l.value.prev == "object" ? l.value.prev.link : void 0) ??
							((fe = p[b - 1]) == null ? void 0 : fe.link),
					},
			next: P
				? void 0
				: {
						text:
							(typeof l.value.next == "string"
								? l.value.next
								: typeof l.value.next == "object"
									? l.value.next.text
									: void 0) ??
							((le = p[b + 1]) == null ? void 0 : le.docFooterText) ??
							((ae = p[b + 1]) == null ? void 0 : ae.text),
						link:
							(typeof l.value.next == "object" ? l.value.next.link : void 0) ??
							((ce = p[b + 1]) == null ? void 0 : ce.link),
					},
		};
	});
}
const Mc = {},
	Oc = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
	Dc = T(
		"path",
		{
			d: "M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z",
		},
		null,
		-1,
	),
	Nc = T(
		"path",
		{
			d: "M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z",
		},
		null,
		-1,
	),
	xc = [Dc, Nc];
function Vc(d, i) {
	return g(), $("svg", Oc, xc);
}
const Bc = z(Mc, [["render", Vc]]),
	We = G({
		__name: "VPLink",
		props: {
			tag: {},
			href: {},
			noIcon: { type: Boolean },
			target: {},
			rel: {},
		},
		setup(d) {
			const i = d,
				l = Y(() => i.tag ?? (i.href ? "a" : "span")),
				_ = Y(() => i.href && Gs.test(i.href));
			return (p, b) => (
				g(),
				K(
					it(l.value),
					{
						class: me([
							"VPLink",
							{
								link: p.href,
								"vp-external-link-icon": _.value,
								"no-icon": p.noIcon,
							},
						]),
						href: p.href ? w(Wn)(p.href) : void 0,
						target: p.target ?? (_.value ? "_blank" : void 0),
						rel: p.rel ?? (_.value ? "noreferrer" : void 0),
					},
					{ default: E(() => [L(p.$slots, "default")]), _: 3 },
					8,
					["class", "href", "target", "rel"],
				)
			);
		},
	}),
	Hc = { class: "VPLastUpdated" },
	Uc = ["datetime"],
	Rc = G({
		__name: "VPDocFooterLastUpdated",
		setup(d) {
			const { theme: i, page: l, frontmatter: _, lang: p } = se(),
				b = Y(() => new Date(_.value.lastUpdated ?? l.value.lastUpdated)),
				S = Y(() => b.value.toISOString()),
				P = ve("");
			return (
				lt(() => {
					rn(() => {
						var I, D, Z;
						P.value = new Intl.DateTimeFormat(
							(D =
								(I = i.value.lastUpdated) == null ? void 0 : I.formatOptions) !=
								null && D.forceLocale
								? p.value
								: void 0,
							((Z = i.value.lastUpdated) == null
								? void 0
								: Z.formatOptions) ?? {
								dateStyle: "short",
								timeStyle: "short",
							},
						).format(b.value);
					});
				}),
				(I, D) => {
					var Z;
					return (
						g(),
						$("p", Hc, [
							He(
								de(
									((Z = w(i).lastUpdated) == null ? void 0 : Z.text) ||
										w(i).lastUpdatedText ||
										"Last updated",
								) + ": ",
								1,
							),
							T("time", { datetime: S.value }, de(P.value), 9, Uc),
						])
					);
				}
			);
		},
	}),
	Fc = z(Rc, [["__scopeId", "data-v-7e05ebdb"]]),
	zc = { key: 0, class: "VPDocFooter" },
	jc = { key: 0, class: "edit-info" },
	Wc = { key: 0, class: "edit-link" },
	Gc = { key: 1, class: "last-updated" },
	Zc = { key: 1, class: "prev-next" },
	Kc = { class: "pager" },
	qc = ["innerHTML"],
	Yc = ["innerHTML"],
	Xc = { class: "pager" },
	Jc = ["innerHTML"],
	Qc = ["innerHTML"],
	eu = G({
		__name: "VPDocFooter",
		setup(d) {
			const { theme: i, page: l, frontmatter: _ } = se(),
				p = Ac(),
				b = Ec(),
				S = Y(() => i.value.editLink && _.value.editLink !== !1),
				P = Y(() => l.value.lastUpdated && _.value.lastUpdated !== !1),
				I = Y(() => S.value || P.value || b.value.prev || b.value.next);
			return (D, Z) => {
				var ee, fe, le, ae;
				return I.value
					? (g(),
						$("footer", zc, [
							L(D.$slots, "doc-footer-before", {}, void 0, !0),
							S.value || P.value
								? (g(),
									$("div", jc, [
										S.value
											? (g(),
												$("div", Wc, [
													U(
														We,
														{
															class: "edit-link-button",
															href: w(p).url,
															"no-icon": !0,
														},
														{
															default: E(() => [
																U(Bc, {
																	class: "edit-link-icon",
																	"aria-label": "edit icon",
																}),
																He(" " + de(w(p).text), 1),
															]),
															_: 1,
														},
														8,
														["href"],
													),
												]))
											: F("", !0),
										P.value ? (g(), $("div", Gc, [U(Fc)])) : F("", !0),
									]))
								: F("", !0),
							((ee = w(b).prev) != null && ee.link) ||
							((fe = w(b).next) != null && fe.link)
								? (g(),
									$("nav", Zc, [
										T("div", Kc, [
											(le = w(b).prev) != null && le.link
												? (g(),
													K(
														We,
														{
															key: 0,
															class: "pager-link prev",
															href: w(b).prev.link,
														},
														{
															default: E(() => {
																var ce;
																return [
																	T(
																		"span",
																		{
																			class: "desc",
																			innerHTML:
																				((ce = w(i).docFooter) == null
																					? void 0
																					: ce.prev) || "Previous page",
																		},
																		null,
																		8,
																		qc,
																	),
																	T(
																		"span",
																		{
																			class: "title",
																			innerHTML: w(b).prev.text,
																		},
																		null,
																		8,
																		Yc,
																	),
																];
															}),
															_: 1,
														},
														8,
														["href"],
													))
												: F("", !0),
										]),
										T("div", Xc, [
											(ae = w(b).next) != null && ae.link
												? (g(),
													K(
														We,
														{
															key: 0,
															class: "pager-link next",
															href: w(b).next.link,
														},
														{
															default: E(() => {
																var ce;
																return [
																	T(
																		"span",
																		{
																			class: "desc",
																			innerHTML:
																				((ce = w(i).docFooter) == null
																					? void 0
																					: ce.next) || "Next page",
																		},
																		null,
																		8,
																		Jc,
																	),
																	T(
																		"span",
																		{
																			class: "title",
																			innerHTML: w(b).next.text,
																		},
																		null,
																		8,
																		Qc,
																	),
																];
															}),
															_: 1,
														},
														8,
														["href"],
													))
												: F("", !0),
										]),
									]))
								: F("", !0),
						]))
					: F("", !0);
			};
		},
	}),
	tu = z(eu, [["__scopeId", "data-v-48f9bb55"]]),
	nu = (d) => (Ge("data-v-39a288b8"), (d = d()), Ze(), d),
	ou = { class: "container" },
	su = nu(() => T("div", { class: "aside-curtain" }, null, -1)),
	ru = { class: "aside-container" },
	iu = { class: "aside-content" },
	au = { class: "content" },
	lu = { class: "content-container" },
	cu = { class: "main" },
	uu = G({
		__name: "VPDoc",
		setup(d) {
			const { theme: i } = se(),
				l = ln(),
				{ hasSidebar: _, hasAside: p, leftAside: b } = Je(),
				S = Y(() => l.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
			return (P, I) => {
				const D = Xe("Content");
				return (
					g(),
					$(
						"div",
						{
							class: me(["VPDoc", { "has-sidebar": w(_), "has-aside": w(p) }]),
						},
						[
							L(P.$slots, "doc-top", {}, void 0, !0),
							T("div", ou, [
								w(p)
									? (g(),
										$(
											"div",
											{ key: 0, class: me(["aside", { "left-aside": w(b) }]) },
											[
												su,
												T("div", ru, [
													T("div", iu, [
														U(Pc, null, {
															"aside-top": E(() => [
																L(P.$slots, "aside-top", {}, void 0, !0),
															]),
															"aside-bottom": E(() => [
																L(P.$slots, "aside-bottom", {}, void 0, !0),
															]),
															"aside-outline-before": E(() => [
																L(
																	P.$slots,
																	"aside-outline-before",
																	{},
																	void 0,
																	!0,
																),
															]),
															"aside-outline-after": E(() => [
																L(
																	P.$slots,
																	"aside-outline-after",
																	{},
																	void 0,
																	!0,
																),
															]),
															"aside-ads-before": E(() => [
																L(P.$slots, "aside-ads-before", {}, void 0, !0),
															]),
															"aside-ads-after": E(() => [
																L(P.$slots, "aside-ads-after", {}, void 0, !0),
															]),
															_: 3,
														}),
													]),
												]),
											],
											2,
										))
									: F("", !0),
								T("div", au, [
									T("div", lu, [
										L(P.$slots, "doc-before", {}, void 0, !0),
										T("main", cu, [
											U(
												D,
												{
													class: me([
														"vp-doc",
														[
															S.value,
															w(i).externalLinkIcon &&
																"external-link-icon-enabled",
														],
													]),
												},
												null,
												8,
												["class"],
											),
										]),
										U(tu, null, {
											"doc-footer-before": E(() => [
												L(P.$slots, "doc-footer-before", {}, void 0, !0),
											]),
											_: 3,
										}),
										L(P.$slots, "doc-after", {}, void 0, !0),
									]),
								]),
							]),
							L(P.$slots, "doc-bottom", {}, void 0, !0),
						],
						2,
					)
				);
			};
		},
	}),
	du = z(uu, [["__scopeId", "data-v-39a288b8"]]),
	fu = G({
		__name: "VPButton",
		props: {
			tag: {},
			size: { default: "medium" },
			theme: { default: "brand" },
			text: {},
			href: {},
			target: {},
			rel: {},
		},
		setup(d) {
			const i = d,
				l = Y(() => i.href && Gs.test(i.href)),
				_ = Y(() => (i.tag || i.href ? "a" : "button"));
			return (p, b) => (
				g(),
				K(
					it(_.value),
					{
						class: me(["VPButton", [p.size, p.theme]]),
						href: p.href ? w(Wn)(p.href) : void 0,
						target: i.target ?? (l.value ? "_blank" : void 0),
						rel: i.rel ?? (l.value ? "noreferrer" : void 0),
					},
					{ default: E(() => [He(de(p.text), 1)]), _: 1 },
					8,
					["class", "href", "target", "rel"],
				)
			);
		},
	}),
	hu = z(fu, [["__scopeId", "data-v-cad61b99"]]),
	_u = ["src", "alt"],
	pu = G({
		inheritAttrs: !1,
		__name: "VPImage",
		props: { image: {}, alt: {} },
		setup(d) {
			return (i, l) => {
				const _ = Xe("VPImage", !0);
				return i.image
					? (g(),
						$(
							ge,
							{ key: 0 },
							[
								typeof i.image == "string" || "src" in i.image
									? (g(),
										$(
											"img",
											nn(
												{ key: 0, class: "VPImage" },
												typeof i.image == "string"
													? i.$attrs
													: { ...i.image, ...i.$attrs },
												{
													src: w(zn)(
														typeof i.image == "string" ? i.image : i.image.src,
													),
													alt:
														i.alt ??
														(typeof i.image == "string"
															? ""
															: i.image.alt || ""),
												},
											),
											null,
											16,
											_u,
										))
									: (g(),
										$(
											ge,
											{ key: 1 },
											[
												U(
													_,
													nn(
														{
															class: "dark",
															image: i.image.dark,
															alt: i.image.alt,
														},
														i.$attrs,
													),
													null,
													16,
													["image", "alt"],
												),
												U(
													_,
													nn(
														{
															class: "light",
															image: i.image.light,
															alt: i.image.alt,
														},
														i.$attrs,
													),
													null,
													16,
													["image", "alt"],
												),
											],
											64,
										)),
							],
							64,
						))
					: F("", !0);
			};
		},
	}),
	sn = z(pu, [["__scopeId", "data-v-8426fc1a"]]),
	vu = (d) => (Ge("data-v-303bb580"), (d = d()), Ze(), d),
	mu = { class: "container" },
	gu = { class: "main" },
	bu = { key: 0, class: "name" },
	yu = ["innerHTML"],
	ku = ["innerHTML"],
	wu = ["innerHTML"],
	Cu = { key: 0, class: "actions" },
	Su = { key: 0, class: "image" },
	Lu = { class: "image-container" },
	$u = vu(() => T("div", { class: "image-bg" }, null, -1)),
	Iu = G({
		__name: "VPHero",
		props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
		setup(d) {
			const i = cn("hero-image-slot-exists");
			return (l, _) => (
				g(),
				$(
					"div",
					{ class: me(["VPHero", { "has-image": l.image || w(i) }]) },
					[
						T("div", mu, [
							T("div", gu, [
								L(l.$slots, "home-hero-info-before", {}, void 0, !0),
								L(
									l.$slots,
									"home-hero-info",
									{},
									() => [
										l.name
											? (g(),
												$("h1", bu, [
													T(
														"span",
														{ innerHTML: l.name, class: "clip" },
														null,
														8,
														yu,
													),
												]))
											: F("", !0),
										l.text
											? (g(),
												$(
													"p",
													{ key: 1, innerHTML: l.text, class: "text" },
													null,
													8,
													ku,
												))
											: F("", !0),
										l.tagline
											? (g(),
												$(
													"p",
													{ key: 2, innerHTML: l.tagline, class: "tagline" },
													null,
													8,
													wu,
												))
											: F("", !0),
									],
									!0,
								),
								L(l.$slots, "home-hero-info-after", {}, void 0, !0),
								l.actions
									? (g(),
										$("div", Cu, [
											(g(!0),
											$(
												ge,
												null,
												Ae(
													l.actions,
													(p) => (
														g(),
														$("div", { key: p.link, class: "action" }, [
															U(
																hu,
																{
																	tag: "a",
																	size: "medium",
																	theme: p.theme,
																	text: p.text,
																	href: p.link,
																	target: p.target,
																	rel: p.rel,
																},
																null,
																8,
																["theme", "text", "href", "target", "rel"],
															),
														])
													),
												),
												128,
											)),
										]))
									: F("", !0),
								L(l.$slots, "home-hero-actions-after", {}, void 0, !0),
							]),
							l.image || w(i)
								? (g(),
									$("div", Su, [
										T("div", Lu, [
											$u,
											L(
												l.$slots,
												"home-hero-image",
												{},
												() => [
													l.image
														? (g(),
															K(
																sn,
																{ key: 0, class: "image-src", image: l.image },
																null,
																8,
																["image"],
															))
														: F("", !0),
												],
												!0,
											),
										]),
									]))
								: F("", !0),
						]),
					],
					2,
				)
			);
		},
	}),
	Tu = z(Iu, [["__scopeId", "data-v-303bb580"]]),
	Pu = G({
		__name: "VPHomeHero",
		setup(d) {
			const { frontmatter: i } = se();
			return (l, _) =>
				w(i).hero
					? (g(),
						K(
							Tu,
							{
								key: 0,
								class: "VPHomeHero",
								name: w(i).hero.name,
								text: w(i).hero.text,
								tagline: w(i).hero.tagline,
								image: w(i).hero.image,
								actions: w(i).hero.actions,
							},
							{
								"home-hero-info-before": E(() => [
									L(l.$slots, "home-hero-info-before"),
								]),
								"home-hero-info": E(() => [L(l.$slots, "home-hero-info")]),
								"home-hero-info-after": E(() => [
									L(l.$slots, "home-hero-info-after"),
								]),
								"home-hero-actions-after": E(() => [
									L(l.$slots, "home-hero-actions-after"),
								]),
								"home-hero-image": E(() => [L(l.$slots, "home-hero-image")]),
								_: 3,
							},
							8,
							["name", "text", "tagline", "image", "actions"],
						))
					: F("", !0);
		},
	}),
	Au = {},
	Eu = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
	Mu = T(
		"path",
		{
			d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z",
		},
		null,
		-1,
	),
	Ou = [Mu];
function Du(d, i) {
	return g(), $("svg", Eu, Ou);
}
const Nu = z(Au, [["render", Du]]),
	xu = { class: "box" },
	Vu = { key: 0, class: "icon" },
	Bu = ["innerHTML"],
	Hu = ["innerHTML"],
	Uu = ["innerHTML"],
	Ru = { key: 4, class: "link-text" },
	Fu = { class: "link-text-value" },
	zu = G({
		__name: "VPFeature",
		props: {
			icon: {},
			title: {},
			details: {},
			link: {},
			linkText: {},
			rel: {},
			target: {},
		},
		setup(d) {
			return (i, l) => (
				g(),
				K(
					We,
					{
						class: "VPFeature",
						href: i.link,
						rel: i.rel,
						target: i.target,
						"no-icon": !0,
						tag: i.link ? "a" : "div",
					},
					{
						default: E(() => [
							T("article", xu, [
								typeof i.icon == "object" && i.icon.wrap
									? (g(),
										$("div", Vu, [
											U(
												sn,
												{
													image: i.icon,
													alt: i.icon.alt,
													height: i.icon.height || 48,
													width: i.icon.width || 48,
												},
												null,
												8,
												["image", "alt", "height", "width"],
											),
										]))
									: typeof i.icon == "object"
										? (g(),
											K(
												sn,
												{
													key: 1,
													image: i.icon,
													alt: i.icon.alt,
													height: i.icon.height || 48,
													width: i.icon.width || 48,
												},
												null,
												8,
												["image", "alt", "height", "width"],
											))
										: i.icon
											? (g(),
												$(
													"div",
													{ key: 2, class: "icon", innerHTML: i.icon },
													null,
													8,
													Bu,
												))
											: F("", !0),
								T("h2", { class: "title", innerHTML: i.title }, null, 8, Hu),
								i.details
									? (g(),
										$(
											"p",
											{ key: 3, class: "details", innerHTML: i.details },
											null,
											8,
											Uu,
										))
									: F("", !0),
								i.linkText
									? (g(),
										$("div", Ru, [
											T("p", Fu, [
												He(de(i.linkText) + " ", 1),
												U(Nu, { class: "link-text-icon" }),
											]),
										]))
									: F("", !0),
							]),
						]),
						_: 1,
					},
					8,
					["href", "rel", "target", "tag"],
				)
			);
		},
	}),
	ju = z(zu, [["__scopeId", "data-v-33204567"]]),
	Wu = { key: 0, class: "VPFeatures" },
	Gu = { class: "container" },
	Zu = { class: "items" },
	Ku = G({
		__name: "VPFeatures",
		props: { features: {} },
		setup(d) {
			const i = d,
				l = Y(() => {
					const _ = i.features.length;
					if (_) {
						if (_ === 2) return "grid-2";
						if (_ === 3) return "grid-3";
						if (_ % 3 === 0) return "grid-6";
						if (_ > 3) return "grid-4";
					} else return;
				});
			return (_, p) =>
				_.features
					? (g(),
						$("div", Wu, [
							T("div", Gu, [
								T("div", Zu, [
									(g(!0),
									$(
										ge,
										null,
										Ae(
											_.features,
											(b) => (
												g(),
												$(
													"div",
													{ key: b.title, class: me(["item", [l.value]]) },
													[
														U(
															ju,
															{
																icon: b.icon,
																title: b.title,
																details: b.details,
																link: b.link,
																"link-text": b.linkText,
																rel: b.rel,
																target: b.target,
															},
															null,
															8,
															[
																"icon",
																"title",
																"details",
																"link",
																"link-text",
																"rel",
																"target",
															],
														),
													],
													2,
												)
											),
										),
										128,
									)),
								]),
							]),
						]))
					: F("", !0);
		},
	}),
	qu = z(Ku, [["__scopeId", "data-v-a6181336"]]),
	Yu = G({
		__name: "VPHomeFeatures",
		setup(d) {
			const { frontmatter: i } = se();
			return (l, _) =>
				w(i).features
					? (g(),
						K(
							qu,
							{ key: 0, class: "VPHomeFeatures", features: w(i).features },
							null,
							8,
							["features"],
						))
					: F("", !0);
		},
	}),
	Xu = { class: "VPHome" },
	Ju = G({
		__name: "VPHome",
		setup(d) {
			return (i, l) => {
				const _ = Xe("Content");
				return (
					g(),
					$("div", Xu, [
						L(i.$slots, "home-hero-before", {}, void 0, !0),
						U(Pu, null, {
							"home-hero-info-before": E(() => [
								L(i.$slots, "home-hero-info-before", {}, void 0, !0),
							]),
							"home-hero-info": E(() => [
								L(i.$slots, "home-hero-info", {}, void 0, !0),
							]),
							"home-hero-info-after": E(() => [
								L(i.$slots, "home-hero-info-after", {}, void 0, !0),
							]),
							"home-hero-actions-after": E(() => [
								L(i.$slots, "home-hero-actions-after", {}, void 0, !0),
							]),
							"home-hero-image": E(() => [
								L(i.$slots, "home-hero-image", {}, void 0, !0),
							]),
							_: 3,
						}),
						L(i.$slots, "home-hero-after", {}, void 0, !0),
						L(i.$slots, "home-features-before", {}, void 0, !0),
						U(Yu),
						L(i.$slots, "home-features-after", {}, void 0, !0),
						U(_),
					])
				);
			};
		},
	}),
	Qu = z(Ju, [["__scopeId", "data-v-c71b6826"]]),
	e1 = {},
	t1 = { class: "VPPage" };
function n1(d, i) {
	const l = Xe("Content");
	return (
		g(),
		$("div", t1, [L(d.$slots, "page-top"), U(l), L(d.$slots, "page-bottom")])
	);
}
const o1 = z(e1, [["render", n1]]),
	s1 = G({
		__name: "VPContent",
		setup(d) {
			const { page: i, frontmatter: l } = se(),
				{ hasSidebar: _ } = Je();
			return (p, b) => (
				g(),
				$(
					"div",
					{
						class: me([
							"VPContent",
							{ "has-sidebar": w(_), "is-home": w(l).layout === "home" },
						]),
						id: "VPContent",
					},
					[
						w(i).isNotFound
							? L(p.$slots, "not-found", { key: 0 }, () => [U(sc)], !0)
							: w(l).layout === "page"
								? (g(),
									K(
										o1,
										{ key: 1 },
										{
											"page-top": E(() => [
												L(p.$slots, "page-top", {}, void 0, !0),
											]),
											"page-bottom": E(() => [
												L(p.$slots, "page-bottom", {}, void 0, !0),
											]),
											_: 3,
										},
									))
								: w(l).layout === "home"
									? (g(),
										K(
											Qu,
											{ key: 2 },
											{
												"home-hero-before": E(() => [
													L(p.$slots, "home-hero-before", {}, void 0, !0),
												]),
												"home-hero-info-before": E(() => [
													L(p.$slots, "home-hero-info-before", {}, void 0, !0),
												]),
												"home-hero-info": E(() => [
													L(p.$slots, "home-hero-info", {}, void 0, !0),
												]),
												"home-hero-info-after": E(() => [
													L(p.$slots, "home-hero-info-after", {}, void 0, !0),
												]),
												"home-hero-actions-after": E(() => [
													L(
														p.$slots,
														"home-hero-actions-after",
														{},
														void 0,
														!0,
													),
												]),
												"home-hero-image": E(() => [
													L(p.$slots, "home-hero-image", {}, void 0, !0),
												]),
												"home-hero-after": E(() => [
													L(p.$slots, "home-hero-after", {}, void 0, !0),
												]),
												"home-features-before": E(() => [
													L(p.$slots, "home-features-before", {}, void 0, !0),
												]),
												"home-features-after": E(() => [
													L(p.$slots, "home-features-after", {}, void 0, !0),
												]),
												_: 3,
											},
										))
									: w(l).layout && w(l).layout !== "doc"
										? (g(), K(it(w(l).layout), { key: 3 }))
										: (g(),
											K(
												du,
												{ key: 4 },
												{
													"doc-top": E(() => [
														L(p.$slots, "doc-top", {}, void 0, !0),
													]),
													"doc-bottom": E(() => [
														L(p.$slots, "doc-bottom", {}, void 0, !0),
													]),
													"doc-footer-before": E(() => [
														L(p.$slots, "doc-footer-before", {}, void 0, !0),
													]),
													"doc-before": E(() => [
														L(p.$slots, "doc-before", {}, void 0, !0),
													]),
													"doc-after": E(() => [
														L(p.$slots, "doc-after", {}, void 0, !0),
													]),
													"aside-top": E(() => [
														L(p.$slots, "aside-top", {}, void 0, !0),
													]),
													"aside-outline-before": E(() => [
														L(p.$slots, "aside-outline-before", {}, void 0, !0),
													]),
													"aside-outline-after": E(() => [
														L(p.$slots, "aside-outline-after", {}, void 0, !0),
													]),
													"aside-ads-before": E(() => [
														L(p.$slots, "aside-ads-before", {}, void 0, !0),
													]),
													"aside-ads-after": E(() => [
														L(p.$slots, "aside-ads-after", {}, void 0, !0),
													]),
													"aside-bottom": E(() => [
														L(p.$slots, "aside-bottom", {}, void 0, !0),
													]),
													_: 3,
												},
											)),
					],
					2,
				)
			);
		},
	}),
	r1 = z(s1, [["__scopeId", "data-v-1428d186"]]),
	i1 = { class: "container" },
	a1 = ["innerHTML"],
	l1 = ["innerHTML"],
	c1 = G({
		__name: "VPFooter",
		setup(d) {
			const { theme: i, frontmatter: l } = se(),
				{ hasSidebar: _ } = Je();
			return (p, b) =>
				w(i).footer && w(l).footer !== !1
					? (g(),
						$(
							"footer",
							{ key: 0, class: me(["VPFooter", { "has-sidebar": w(_) }]) },
							[
								T("div", i1, [
									w(i).footer.message
										? (g(),
											$(
												"p",
												{
													key: 0,
													class: "message",
													innerHTML: w(i).footer.message,
												},
												null,
												8,
												a1,
											))
										: F("", !0),
									w(i).footer.copyright
										? (g(),
											$(
												"p",
												{
													key: 1,
													class: "copyright",
													innerHTML: w(i).footer.copyright,
												},
												null,
												8,
												l1,
											))
										: F("", !0),
								]),
							],
							2,
						))
					: F("", !0);
		},
	}),
	u1 = z(c1, [["__scopeId", "data-v-e315a0ad"]]);
function Qs() {
	const { theme: d, frontmatter: i } = se(),
		l = Ws([]),
		_ = Y(() => l.value.length > 0);
	return (
		an(() => {
			l.value = Zn(i.value.outline ?? d.value.outline);
		}),
		{ headers: l, hasLocalNav: _ }
	);
}
const d1 = {},
	f1 = {
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		focusable: "false",
		viewBox: "0 0 24 24",
	},
	h1 = T(
		"path",
		{
			d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z",
		},
		null,
		-1,
	),
	_1 = [h1];
function p1(d, i) {
	return g(), $("svg", f1, _1);
}
const er = z(d1, [["render", p1]]),
	v1 = { class: "header" },
	m1 = { class: "outline" },
	g1 = G({
		__name: "VPLocalNavOutlineDropdown",
		props: { headers: {}, navHeight: {} },
		setup(d) {
			const i = d,
				{ theme: l } = se(),
				_ = ve(!1),
				p = ve(0),
				b = ve(),
				S = ve();
			El(b, () => {
				_.value = !1;
			}),
				Ml("Escape", () => {
					_.value = !1;
				}),
				an(() => {
					_.value = !1;
				});
			function P() {
				(_.value = !_.value),
					(p.value =
						window.innerHeight + Math.min(window.scrollY - i.navHeight, 0));
			}
			function I(Z) {
				Z.target.classList.contains("outline-link") &&
					(S.value && (S.value.style.transition = "none"),
					Dl(() => {
						_.value = !1;
					}));
			}
			function D() {
				(_.value = !1),
					window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			}
			return (Z, ee) => (
				g(),
				$(
					"div",
					{
						class: "VPLocalNavOutlineDropdown",
						style: Ol({ "--vp-vh": p.value + "px" }),
						ref_key: "main",
						ref: b,
					},
					[
						Z.headers.length > 0
							? (g(),
								$(
									"button",
									{ key: 0, onClick: P, class: me({ open: _.value }) },
									[He(de(w(Xs)(w(l))) + " ", 1), U(er, { class: "icon" })],
									2,
								))
							: (g(),
								$(
									"button",
									{ key: 1, onClick: D },
									de(w(l).returnToTopLabel || "Return to top"),
									1,
								)),
						U(
							Fn,
							{ name: "flyout" },
							{
								default: E(() => [
									_.value
										? (g(),
											$(
												"div",
												{
													key: 0,
													ref_key: "items",
													ref: S,
													class: "items",
													onClick: I,
												},
												[
													T("div", v1, [
														T(
															"a",
															{ class: "top-link", href: "#", onClick: D },
															de(w(l).returnToTopLabel || "Return to top"),
															1,
														),
													]),
													T("div", m1, [
														U(Js, { headers: Z.headers }, null, 8, ["headers"]),
													]),
												],
												512,
											))
										: F("", !0),
								]),
								_: 1,
							},
						),
					],
					4,
				)
			);
		},
	}),
	b1 = z(g1, [["__scopeId", "data-v-af18c0d5"]]),
	y1 = {},
	k1 = {
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		focusable: "false",
		viewBox: "0 0 24 24",
	},
	w1 = T(
		"path",
		{
			d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z",
		},
		null,
		-1,
	),
	C1 = T(
		"path",
		{ d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" },
		null,
		-1,
	),
	S1 = T(
		"path",
		{
			d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z",
		},
		null,
		-1,
	),
	L1 = T(
		"path",
		{
			d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z",
		},
		null,
		-1,
	),
	$1 = [w1, C1, S1, L1];
function I1(d, i) {
	return g(), $("svg", k1, $1);
}
const T1 = z(y1, [["render", I1]]),
	P1 = { class: "container" },
	A1 = ["aria-expanded"],
	E1 = { class: "menu-text" },
	M1 = G({
		__name: "VPLocalNav",
		props: { open: { type: Boolean } },
		emits: ["open-menu"],
		setup(d) {
			const { theme: i, frontmatter: l } = se(),
				{ hasSidebar: _ } = Je(),
				{ headers: p } = Qs(),
				{ y: b } = Zs(),
				S = ve(0);
			lt(() => {
				S.value = parseInt(
					getComputedStyle(document.documentElement).getPropertyValue(
						"--vp-nav-height",
					),
				);
			}),
				an(() => {
					p.value = Zn(l.value.outline ?? i.value.outline);
				});
			const P = Y(() => p.value.length === 0),
				I = Y(() => P.value && !_.value),
				D = Y(() => ({
					VPLocalNav: !0,
					"has-sidebar": _.value,
					empty: P.value,
					fixed: I.value,
				}));
			return (Z, ee) =>
				w(l).layout !== "home" && (!I.value || w(b) >= S.value)
					? (g(),
						$(
							"div",
							{ key: 0, class: me(D.value) },
							[
								T("div", P1, [
									w(_)
										? (g(),
											$(
												"button",
												{
													key: 0,
													class: "menu",
													"aria-expanded": Z.open,
													"aria-controls": "VPSidebarNav",
													onClick:
														ee[0] || (ee[0] = (fe) => Z.$emit("open-menu")),
												},
												[
													U(T1, { class: "menu-icon" }),
													T("span", E1, de(w(i).sidebarMenuLabel || "Menu"), 1),
												],
												8,
												A1,
											))
										: F("", !0),
									U(b1, { headers: w(p), navHeight: S.value }, null, 8, [
										"headers",
										"navHeight",
									]),
								]),
							],
							2,
						))
					: F("", !0);
		},
	}),
	O1 = z(M1, [["__scopeId", "data-v-0282ae07"]]);
function D1() {
	const d = ve(!1);
	function i() {
		(d.value = !0), window.addEventListener("resize", p);
	}
	function l() {
		(d.value = !1), window.removeEventListener("resize", p);
	}
	function _() {
		d.value ? l() : i();
	}
	function p() {
		window.outerWidth >= 768 && l();
	}
	const b = ln();
	return (
		ct(() => b.path, l),
		{ isScreenOpen: d, openScreen: i, closeScreen: l, toggleScreen: _ }
	);
}
const N1 = {},
	x1 = { class: "VPSwitch", type: "button", role: "switch" },
	V1 = { class: "check" },
	B1 = { key: 0, class: "icon" };
function H1(d, i) {
	return (
		g(),
		$("button", x1, [
			T("span", V1, [
				d.$slots.default
					? (g(), $("span", B1, [L(d.$slots, "default", {}, void 0, !0)]))
					: F("", !0),
			]),
		])
	);
}
const U1 = z(N1, [
		["render", H1],
		["__scopeId", "data-v-b1685198"],
	]),
	R1 = {},
	F1 = {
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		focusable: "false",
		viewBox: "0 0 24 24",
	},
	z1 = T(
		"path",
		{
			d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z",
		},
		null,
		-1,
	),
	j1 = [z1];
function W1(d, i) {
	return g(), $("svg", F1, j1);
}
const G1 = z(R1, [["render", W1]]),
	Z1 = {},
	K1 = {
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		focusable: "false",
		viewBox: "0 0 24 24",
	},
	q1 = Nl(
		'<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
		9,
	),
	Y1 = [q1];
function X1(d, i) {
	return g(), $("svg", K1, Y1);
}
const J1 = z(Z1, [["render", X1]]),
	Q1 = G({
		__name: "VPSwitchAppearance",
		setup(d) {
			const { isDark: i, theme: l } = se(),
				_ = cn("toggle-appearance", () => {
					i.value = !i.value;
				}),
				p = Y(() =>
					i.value
						? l.value.lightModeSwitchTitle || "Switch to light theme"
						: l.value.darkModeSwitchTitle || "Switch to dark theme",
				);
			return (b, S) => (
				g(),
				K(
					U1,
					{
						title: p.value,
						class: "VPSwitchAppearance",
						"aria-checked": w(i),
						onClick: w(_),
					},
					{
						default: E(() => [
							U(J1, { class: "sun" }),
							U(G1, { class: "moon" }),
						]),
						_: 1,
					},
					8,
					["title", "aria-checked", "onClick"],
				)
			);
		},
	}),
	Kn = z(Q1, [["__scopeId", "data-v-1736f215"]]),
	e0 = { key: 0, class: "VPNavBarAppearance" },
	t0 = G({
		__name: "VPNavBarAppearance",
		setup(d) {
			const { site: i } = se();
			return (l, _) =>
				w(i).appearance && w(i).appearance !== "force-dark"
					? (g(), $("div", e0, [U(Kn)]))
					: F("", !0);
		},
	}),
	n0 = z(t0, [["__scopeId", "data-v-e6aabb21"]]),
	qn = ve();
let tr = !1,
	Vn = 0;
function o0(d) {
	const i = ve(!1);
	if (yt) {
		!tr && s0(), Vn++;
		const l = ct(qn, (_) => {
			var p, b, S;
			_ === d.el.value || ((p = d.el.value) != null && p.contains(_))
				? ((i.value = !0), (b = d.onFocus) == null || b.call(d))
				: ((i.value = !1), (S = d.onBlur) == null || S.call(d));
		});
		jn(() => {
			l(), Vn--, Vn || r0();
		});
	}
	return xl(i);
}
function s0() {
	document.addEventListener("focusin", nr),
		(tr = !0),
		(qn.value = document.activeElement);
}
function r0() {
	document.removeEventListener("focusin", nr);
}
function nr() {
	qn.value = document.activeElement;
}
const i0 = {},
	a0 = {
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		focusable: "false",
		viewBox: "0 0 24 24",
	},
	l0 = T(
		"path",
		{
			d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z",
		},
		null,
		-1,
	),
	c0 = [l0];
function u0(d, i) {
	return g(), $("svg", a0, c0);
}
const or = z(i0, [["render", u0]]),
	d0 = {},
	f0 = {
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		focusable: "false",
		viewBox: "0 0 24 24",
	},
	h0 = T("circle", { cx: "12", cy: "12", r: "2" }, null, -1),
	_0 = T("circle", { cx: "19", cy: "12", r: "2" }, null, -1),
	p0 = T("circle", { cx: "5", cy: "12", r: "2" }, null, -1),
	v0 = [h0, _0, p0];
function m0(d, i) {
	return g(), $("svg", f0, v0);
}
const g0 = z(d0, [["render", m0]]),
	b0 = { class: "VPMenuLink" },
	y0 = G({
		__name: "VPMenuLink",
		props: { item: {} },
		setup(d) {
			const { page: i } = se();
			return (l, _) => (
				g(),
				$("div", b0, [
					U(
						We,
						{
							class: me({
								active: w(at)(
									w(i).relativePath,
									l.item.activeMatch || l.item.link,
									!!l.item.activeMatch,
								),
							}),
							href: l.item.link,
							target: l.item.target,
							rel: l.item.rel,
						},
						{ default: E(() => [He(de(l.item.text), 1)]), _: 1 },
						8,
						["class", "href", "target", "rel"],
					),
				])
			);
		},
	}),
	un = z(y0, [["__scopeId", "data-v-43f1e123"]]),
	k0 = { class: "VPMenuGroup" },
	w0 = { key: 0, class: "title" },
	C0 = G({
		__name: "VPMenuGroup",
		props: { text: {}, items: {} },
		setup(d) {
			return (i, l) => (
				g(),
				$("div", k0, [
					i.text ? (g(), $("p", w0, de(i.text), 1)) : F("", !0),
					(g(!0),
					$(
						ge,
						null,
						Ae(
							i.items,
							(_) => (
								g(),
								$(
									ge,
									null,
									[
										"link" in _
											? (g(), K(un, { key: 0, item: _ }, null, 8, ["item"]))
											: F("", !0),
									],
									64,
								)
							),
						),
						256,
					)),
				])
			);
		},
	}),
	S0 = z(C0, [["__scopeId", "data-v-69e747b5"]]),
	L0 = { class: "VPMenu" },
	$0 = { key: 0, class: "items" },
	I0 = G({
		__name: "VPMenu",
		props: { items: {} },
		setup(d) {
			return (i, l) => (
				g(),
				$("div", L0, [
					i.items
						? (g(),
							$("div", $0, [
								(g(!0),
								$(
									ge,
									null,
									Ae(
										i.items,
										(_) => (
											g(),
											$(
												ge,
												{ key: _.text },
												[
													"link" in _
														? (g(),
															K(un, { key: 0, item: _ }, null, 8, ["item"]))
														: (g(),
															K(
																S0,
																{ key: 1, text: _.text, items: _.items },
																null,
																8,
																["text", "items"],
															)),
												],
												64,
											)
										),
									),
									128,
								)),
							]))
						: F("", !0),
					L(i.$slots, "default", {}, void 0, !0),
				])
			);
		},
	}),
	T0 = z(I0, [["__scopeId", "data-v-e7ea1737"]]),
	P0 = ["aria-expanded", "aria-label"],
	A0 = { key: 0, class: "text" },
	E0 = ["innerHTML"],
	M0 = { class: "menu" },
	O0 = G({
		__name: "VPFlyout",
		props: { icon: {}, button: {}, label: {}, items: {} },
		setup(d) {
			const i = ve(!1),
				l = ve();
			o0({ el: l, onBlur: _ });
			function _() {
				i.value = !1;
			}
			return (p, b) => (
				g(),
				$(
					"div",
					{
						class: "VPFlyout",
						ref_key: "el",
						ref: l,
						onMouseenter: b[1] || (b[1] = (S) => (i.value = !0)),
						onMouseleave: b[2] || (b[2] = (S) => (i.value = !1)),
					},
					[
						T(
							"button",
							{
								type: "button",
								class: "button",
								"aria-haspopup": "true",
								"aria-expanded": i.value,
								"aria-label": p.label,
								onClick: b[0] || (b[0] = (S) => (i.value = !i.value)),
							},
							[
								p.button || p.icon
									? (g(),
										$("span", A0, [
											p.icon
												? (g(), K(it(p.icon), { key: 0, class: "option-icon" }))
												: F("", !0),
											p.button
												? (g(),
													$(
														"span",
														{ key: 1, innerHTML: p.button },
														null,
														8,
														E0,
													))
												: F("", !0),
											U(or, { class: "text-icon" }),
										]))
									: (g(), K(g0, { key: 1, class: "icon" })),
							],
							8,
							P0,
						),
						T("div", M0, [
							U(
								T0,
								{ items: p.items },
								{
									default: E(() => [L(p.$slots, "default", {}, void 0, !0)]),
									_: 3,
								},
								8,
								["items"],
							),
						]),
					],
					544,
				)
			);
		},
	}),
	Yn = z(O0, [["__scopeId", "data-v-9c007e85"]]),
	D0 = {
		discord:
			'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
		facebook:
			'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
		github:
			'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
		instagram:
			'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
		linkedin:
			'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
		mastodon:
			'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
		npm: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>',
		slack:
			'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
		twitter:
			'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',
		x: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
		youtube:
			'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
	},
	N0 = ["href", "aria-label", "innerHTML"],
	x0 = G({
		__name: "VPSocialLink",
		props: { icon: {}, link: {}, ariaLabel: {} },
		setup(d) {
			const i = d,
				l = Y(() => (typeof i.icon == "object" ? i.icon.svg : D0[i.icon]));
			return (_, p) => (
				g(),
				$(
					"a",
					{
						class: "VPSocialLink no-icon",
						href: _.link,
						"aria-label":
							_.ariaLabel ?? (typeof _.icon == "string" ? _.icon : ""),
						target: "_blank",
						rel: "noopener",
						innerHTML: l.value,
					},
					null,
					8,
					N0,
				)
			);
		},
	}),
	V0 = z(x0, [["__scopeId", "data-v-f80f8133"]]),
	B0 = { class: "VPSocialLinks" },
	H0 = G({
		__name: "VPSocialLinks",
		props: { links: {} },
		setup(d) {
			return (i, l) => (
				g(),
				$("div", B0, [
					(g(!0),
					$(
						ge,
						null,
						Ae(
							i.links,
							({ link: _, icon: p, ariaLabel: b }) => (
								g(),
								K(V0, { key: _, icon: p, link: _, ariaLabel: b }, null, 8, [
									"icon",
									"link",
									"ariaLabel",
								])
							),
						),
						128,
					)),
				])
			);
		},
	}),
	Xn = z(H0, [["__scopeId", "data-v-7bc22406"]]),
	U0 = { key: 0, class: "group translations" },
	R0 = { class: "trans-title" },
	F0 = { key: 1, class: "group" },
	z0 = { class: "item appearance" },
	j0 = { class: "label" },
	W0 = { class: "appearance-action" },
	G0 = { key: 2, class: "group" },
	Z0 = { class: "item social-links" },
	K0 = G({
		__name: "VPNavBarExtra",
		setup(d) {
			const { site: i, theme: l } = se(),
				{ localeLinks: _, currentLang: p } = Ot({ correspondingLink: !0 }),
				b = Y(
					() =>
						(_.value.length && p.value.label) ||
						i.value.appearance ||
						l.value.socialLinks,
				);
			return (S, P) =>
				b.value
					? (g(),
						K(
							Yn,
							{ key: 0, class: "VPNavBarExtra", label: "extra navigation" },
							{
								default: E(() => [
									w(_).length && w(p).label
										? (g(),
											$("div", U0, [
												T("p", R0, de(w(p).label), 1),
												(g(!0),
												$(
													ge,
													null,
													Ae(
														w(_),
														(I) => (
															g(),
															K(un, { key: I.link, item: I }, null, 8, ["item"])
														),
													),
													128,
												)),
											]))
										: F("", !0),
									w(i).appearance && w(i).appearance !== "force-dark"
										? (g(),
											$("div", F0, [
												T("div", z0, [
													T(
														"p",
														j0,
														de(w(l).darkModeSwitchLabel || "Appearance"),
														1,
													),
													T("div", W0, [U(Kn)]),
												]),
											]))
										: F("", !0),
									w(l).socialLinks
										? (g(),
											$("div", G0, [
												T("div", Z0, [
													U(
														Xn,
														{
															class: "social-links-list",
															links: w(l).socialLinks,
														},
														null,
														8,
														["links"],
													),
												]),
											]))
										: F("", !0),
								]),
								_: 1,
							},
						))
					: F("", !0);
		},
	}),
	q0 = z(K0, [["__scopeId", "data-v-d0bd9dde"]]),
	Y0 = (d) => (Ge("data-v-e5dd9c1c"), (d = d()), Ze(), d),
	X0 = ["aria-expanded"],
	J0 = Y0(() =>
		T(
			"span",
			{ class: "container" },
			[
				T("span", { class: "top" }),
				T("span", { class: "middle" }),
				T("span", { class: "bottom" }),
			],
			-1,
		),
	),
	Q0 = [J0],
	ed = G({
		__name: "VPNavBarHamburger",
		props: { active: { type: Boolean } },
		emits: ["click"],
		setup(d) {
			return (i, l) => (
				g(),
				$(
					"button",
					{
						type: "button",
						class: me(["VPNavBarHamburger", { active: i.active }]),
						"aria-label": "mobile navigation",
						"aria-expanded": i.active,
						"aria-controls": "VPNavScreen",
						onClick: l[0] || (l[0] = (_) => i.$emit("click")),
					},
					Q0,
					10,
					X0,
				)
			);
		},
	}),
	td = z(ed, [["__scopeId", "data-v-e5dd9c1c"]]),
	nd = ["innerHTML"],
	od = G({
		__name: "VPNavBarMenuLink",
		props: { item: {} },
		setup(d) {
			const { page: i } = se();
			return (l, _) => (
				g(),
				K(
					We,
					{
						class: me({
							VPNavBarMenuLink: !0,
							active: w(at)(
								w(i).relativePath,
								l.item.activeMatch || l.item.link,
								!!l.item.activeMatch,
							),
						}),
						href: l.item.link,
						target: l.item.target,
						rel: l.item.rel,
						tabindex: "0",
					},
					{
						default: E(() => [
							T("span", { innerHTML: l.item.text }, null, 8, nd),
						]),
						_: 1,
					},
					8,
					["class", "href", "target", "rel"],
				)
			);
		},
	}),
	sd = z(od, [["__scopeId", "data-v-42ef59de"]]),
	rd = G({
		__name: "VPNavBarMenuGroup",
		props: { item: {} },
		setup(d) {
			const i = d,
				{ page: l } = se(),
				_ = (b) =>
					"link" in b
						? at(l.value.relativePath, b.link, !!i.item.activeMatch)
						: b.items.some(_),
				p = Y(() => _(i.item));
			return (b, S) => (
				g(),
				K(
					Yn,
					{
						class: me({
							VPNavBarMenuGroup: !0,
							active:
								w(at)(
									w(l).relativePath,
									b.item.activeMatch,
									!!b.item.activeMatch,
								) || p.value,
						}),
						button: b.item.text,
						items: b.item.items,
					},
					null,
					8,
					["class", "button", "items"],
				)
			);
		},
	}),
	id = (d) => (Ge("data-v-7f418b0f"), (d = d()), Ze(), d),
	ad = {
		key: 0,
		"aria-labelledby": "main-nav-aria-label",
		class: "VPNavBarMenu",
	},
	ld = id(() =>
		T(
			"span",
			{ id: "main-nav-aria-label", class: "visually-hidden" },
			"Main Navigation",
			-1,
		),
	),
	cd = G({
		__name: "VPNavBarMenu",
		setup(d) {
			const { theme: i } = se();
			return (l, _) =>
				w(i).nav
					? (g(),
						$("nav", ad, [
							ld,
							(g(!0),
							$(
								ge,
								null,
								Ae(
									w(i).nav,
									(p) => (
										g(),
										$(
											ge,
											{ key: p.text },
											[
												"link" in p
													? (g(), K(sd, { key: 0, item: p }, null, 8, ["item"]))
													: (g(),
														K(rd, { key: 1, item: p }, null, 8, ["item"])),
											],
											64,
										)
									),
								),
								128,
							)),
						]))
					: F("", !0);
		},
	}),
	ud = z(cd, [["__scopeId", "data-v-7f418b0f"]]);
var dd = {
		893: (d, i) => {
			Object.defineProperty(i, "__esModule", { value: !0 }),
				(i.output = i.exists = i.hash = i.bytes = i.bool = i.number = void 0);
			function l(D) {
				if (!Number.isSafeInteger(D) || D < 0)
					throw new Error(`Wrong positive integer: ${D}`);
			}
			i.number = l;
			function _(D) {
				if (typeof D != "boolean")
					throw new Error(`Expected boolean, not ${D}`);
			}
			i.bool = _;
			function p(D, ...Z) {
				if (!(D instanceof Uint8Array)) throw new Error("Expected Uint8Array");
				if (Z.length > 0 && !Z.includes(D.length))
					throw new Error(
						`Expected Uint8Array of length ${Z}, not of length=${D.length}`,
					);
			}
			i.bytes = p;
			function b(D) {
				if (typeof D != "function" || typeof D.create != "function")
					throw new Error("Hash should be wrapped by utils.wrapConstructor");
				l(D.outputLen), l(D.blockLen);
			}
			i.hash = b;
			function S(D, Z = !0) {
				if (D.destroyed) throw new Error("Hash instance has been destroyed");
				if (Z && D.finished)
					throw new Error("Hash#digest() has already been called");
			}
			i.exists = S;
			function P(D, Z) {
				p(D);
				const ee = Z.outputLen;
				if (D.length < ee)
					throw new Error(
						`digestInto() expects output buffer of length at least ${ee}`,
					);
			}
			i.output = P;
			const I = { number: l, bool: _, bytes: p, hash: b, exists: S, output: P };
			i.default = I;
		},
		373: (d, i) => {
			Object.defineProperty(i, "__esModule", { value: !0 }),
				(i.add5L =
					i.add5H =
					i.add4H =
					i.add4L =
					i.add3H =
					i.add3L =
					i.add =
					i.rotlBL =
					i.rotlBH =
					i.rotlSL =
					i.rotlSH =
					i.rotr32L =
					i.rotr32H =
					i.rotrBL =
					i.rotrBH =
					i.rotrSL =
					i.rotrSH =
					i.shrSL =
					i.shrSH =
					i.toBig =
					i.split =
					i.fromBig =
						void 0);
			const l = BigInt(2 ** 32 - 1),
				_ = BigInt(32);
			function p(M, V = !1) {
				return V
					? { h: Number(M & l), l: Number((M >> _) & l) }
					: { h: Number((M >> _) & l) | 0, l: Number(M & l) | 0 };
			}
			i.fromBig = p;
			function b(M, V = !1) {
				let N = new Uint32Array(M.length),
					Q = new Uint32Array(M.length);
				for (let we = 0; we < M.length; we++) {
					const { h: Ue, l: Ve } = p(M[we], V);
					[N[we], Q[we]] = [Ue, Ve];
				}
				return [N, Q];
			}
			i.split = b;
			const S = (M, V) => (BigInt(M >>> 0) << _) | BigInt(V >>> 0);
			i.toBig = S;
			const P = (M, V, N) => M >>> N;
			i.shrSH = P;
			const I = (M, V, N) => (M << (32 - N)) | (V >>> N);
			i.shrSL = I;
			const D = (M, V, N) => (M >>> N) | (V << (32 - N));
			i.rotrSH = D;
			const Z = (M, V, N) => (M << (32 - N)) | (V >>> N);
			i.rotrSL = Z;
			const ee = (M, V, N) => (M << (64 - N)) | (V >>> (N - 32));
			i.rotrBH = ee;
			const fe = (M, V, N) => (M >>> (N - 32)) | (V << (64 - N));
			i.rotrBL = fe;
			const le = (M, V) => V;
			i.rotr32H = le;
			const ae = (M, V) => M;
			i.rotr32L = ae;
			const ce = (M, V, N) => (M << N) | (V >>> (32 - N));
			i.rotlSH = ce;
			const te = (M, V, N) => (V << N) | (M >>> (32 - N));
			i.rotlSL = te;
			const re = (M, V, N) => (V << (N - 32)) | (M >>> (64 - N));
			i.rotlBH = re;
			const _e = (M, V, N) => (M << (N - 32)) | (V >>> (64 - N));
			i.rotlBL = _e;
			function ue(M, V, N, Q) {
				const we = (V >>> 0) + (Q >>> 0);
				return { h: (M + N + ((we / 2 ** 32) | 0)) | 0, l: we | 0 };
			}
			i.add = ue;
			const ke = (M, V, N) => (M >>> 0) + (V >>> 0) + (N >>> 0);
			i.add3L = ke;
			const Le = (M, V, N, Q) => (V + N + Q + ((M / 2 ** 32) | 0)) | 0;
			i.add3H = Le;
			const xe = (M, V, N, Q) => (M >>> 0) + (V >>> 0) + (N >>> 0) + (Q >>> 0);
			i.add4L = xe;
			const H = (M, V, N, Q, we) => (V + N + Q + we + ((M / 2 ** 32) | 0)) | 0;
			i.add4H = H;
			const C = (M, V, N, Q, we) =>
				(M >>> 0) + (V >>> 0) + (N >>> 0) + (Q >>> 0) + (we >>> 0);
			i.add5L = C;
			const x = (M, V, N, Q, we, Ue) =>
				(V + N + Q + we + Ue + ((M / 2 ** 32) | 0)) | 0;
			i.add5H = x;
			const j = {
				fromBig: p,
				split: b,
				toBig: S,
				shrSH: P,
				shrSL: I,
				rotrSH: D,
				rotrSL: Z,
				rotrBH: ee,
				rotrBL: fe,
				rotr32H: le,
				rotr32L: ae,
				rotlSH: ce,
				rotlSL: te,
				rotlBH: re,
				rotlBL: _e,
				add: ue,
				add3L: ke,
				add3H: Le,
				add4L: xe,
				add4H: H,
				add5H: x,
				add5L: C,
			};
			i.default = j;
		},
		965: (d, i) => {
			Object.defineProperty(i, "__esModule", { value: !0 }),
				(i.crypto = void 0),
				(i.crypto =
					typeof globalThis == "object" && "crypto" in globalThis
						? globalThis.crypto
						: void 0);
		},
		463: (d, i, l) => {
			Object.defineProperty(i, "__esModule", { value: !0 }),
				(i.shake256 =
					i.shake128 =
					i.keccak_512 =
					i.keccak_384 =
					i.keccak_256 =
					i.keccak_224 =
					i.sha3_512 =
					i.sha3_384 =
					i.sha3_256 =
					i.sha3_224 =
					i.Keccak =
					i.keccakP =
						void 0);
			const _ = l(893),
				p = l(373),
				b = l(154),
				[S, P, I] = [[], [], []],
				D = BigInt(0),
				Z = BigInt(1),
				ee = BigInt(2),
				fe = BigInt(7),
				le = BigInt(256),
				ae = BigInt(113);
			for (let H = 0, C = Z, x = 1, j = 0; H < 24; H++) {
				([x, j] = [j, (2 * x + 3 * j) % 5]),
					S.push(2 * (5 * j + x)),
					P.push((((H + 1) * (H + 2)) / 2) % 64);
				let M = D;
				for (let V = 0; V < 7; V++)
					(C = ((C << Z) ^ ((C >> fe) * ae)) % le),
						C & ee && (M ^= Z << ((Z << BigInt(V)) - Z));
				I.push(M);
			}
			const [ce, te] = (0, p.split)(I, !0),
				re = (H, C, x) =>
					x > 32 ? (0, p.rotlBH)(H, C, x) : (0, p.rotlSH)(H, C, x),
				_e = (H, C, x) =>
					x > 32 ? (0, p.rotlBL)(H, C, x) : (0, p.rotlSL)(H, C, x);
			function ue(H, C = 24) {
				const x = new Uint32Array(10);
				for (let j = 24 - C; j < 24; j++) {
					for (let N = 0; N < 10; N++)
						x[N] = H[N] ^ H[N + 10] ^ H[N + 20] ^ H[N + 30] ^ H[N + 40];
					for (let N = 0; N < 10; N += 2) {
						const Q = (N + 8) % 10,
							we = (N + 2) % 10,
							Ue = x[we],
							Ve = x[we + 1],
							$e = re(Ue, Ve, 1) ^ x[Q],
							kt = _e(Ue, Ve, 1) ^ x[Q + 1];
						for (let ut = 0; ut < 50; ut += 10)
							(H[N + ut] ^= $e), (H[N + ut + 1] ^= kt);
					}
					let M = H[2],
						V = H[3];
					for (let N = 0; N < 24; N++) {
						const Q = P[N],
							we = re(M, V, Q),
							Ue = _e(M, V, Q),
							Ve = S[N];
						(M = H[Ve]), (V = H[Ve + 1]), (H[Ve] = we), (H[Ve + 1] = Ue);
					}
					for (let N = 0; N < 50; N += 10) {
						for (let Q = 0; Q < 10; Q++) x[Q] = H[N + Q];
						for (let Q = 0; Q < 10; Q++)
							H[N + Q] ^= ~x[(Q + 2) % 10] & x[(Q + 4) % 10];
					}
					(H[0] ^= ce[j]), (H[1] ^= te[j]);
				}
				x.fill(0);
			}
			i.keccakP = ue;
			class ke extends b.Hash {
				constructor(C, x, j, M = !1, V = 24) {
					if (
						(super(),
						(this.blockLen = C),
						(this.suffix = x),
						(this.outputLen = j),
						(this.enableXOF = M),
						(this.rounds = V),
						(this.pos = 0),
						(this.posOut = 0),
						(this.finished = !1),
						(this.destroyed = !1),
						(0, _.number)(j),
						0 >= this.blockLen || this.blockLen >= 200)
					)
						throw new Error("Sha3 supports only keccak-f1600 function");
					(this.state = new Uint8Array(200)),
						(this.state32 = (0, b.u32)(this.state));
				}
				keccak() {
					ue(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
				}
				update(C) {
					(0, _.exists)(this);
					const { blockLen: x, state: j } = this;
					C = (0, b.toBytes)(C);
					const M = C.length;
					for (let V = 0; V < M; ) {
						const N = Math.min(x - this.pos, M - V);
						for (let Q = 0; Q < N; Q++) j[this.pos++] ^= C[V++];
						this.pos === x && this.keccak();
					}
					return this;
				}
				finish() {
					if (this.finished) return;
					this.finished = !0;
					const { state: C, suffix: x, pos: j, blockLen: M } = this;
					(C[j] ^= x),
						x & 128 && j === M - 1 && this.keccak(),
						(C[M - 1] ^= 128),
						this.keccak();
				}
				writeInto(C) {
					(0, _.exists)(this, !1), (0, _.bytes)(C), this.finish();
					const x = this.state,
						{ blockLen: j } = this;
					for (let M = 0, V = C.length; M < V; ) {
						this.posOut >= j && this.keccak();
						const N = Math.min(j - this.posOut, V - M);
						C.set(x.subarray(this.posOut, this.posOut + N), M),
							(this.posOut += N),
							(M += N);
					}
					return C;
				}
				xofInto(C) {
					if (!this.enableXOF)
						throw new Error("XOF is not possible for this instance");
					return this.writeInto(C);
				}
				xof(C) {
					return (0, _.number)(C), this.xofInto(new Uint8Array(C));
				}
				digestInto(C) {
					if (((0, _.output)(C, this), this.finished))
						throw new Error("digest() was already called");
					return this.writeInto(C), this.destroy(), C;
				}
				digest() {
					return this.digestInto(new Uint8Array(this.outputLen));
				}
				destroy() {
					(this.destroyed = !0), this.state.fill(0);
				}
				_cloneInto(C) {
					const {
						blockLen: x,
						suffix: j,
						outputLen: M,
						rounds: V,
						enableXOF: N,
					} = this;
					return (
						C || (C = new ke(x, j, M, N, V)),
						C.state32.set(this.state32),
						(C.pos = this.pos),
						(C.posOut = this.posOut),
						(C.finished = this.finished),
						(C.rounds = V),
						(C.suffix = j),
						(C.outputLen = M),
						(C.enableXOF = N),
						(C.destroyed = this.destroyed),
						C
					);
				}
			}
			i.Keccak = ke;
			const Le = (H, C, x) => (0, b.wrapConstructor)(() => new ke(C, H, x));
			(i.sha3_224 = Le(6, 144, 224 / 8)),
				(i.sha3_256 = Le(6, 136, 256 / 8)),
				(i.sha3_384 = Le(6, 104, 384 / 8)),
				(i.sha3_512 = Le(6, 72, 512 / 8)),
				(i.keccak_224 = Le(1, 144, 224 / 8)),
				(i.keccak_256 = Le(1, 136, 256 / 8)),
				(i.keccak_384 = Le(1, 104, 384 / 8)),
				(i.keccak_512 = Le(1, 72, 512 / 8));
			const xe = (H, C, x) =>
				(0, b.wrapXOFConstructorWithOpts)(
					(j = {}) => new ke(C, H, j.dkLen === void 0 ? x : j.dkLen, !0),
				);
			(i.shake128 = xe(31, 168, 128 / 8)), (i.shake256 = xe(31, 136, 256 / 8));
		},
		154: (d, i, l) => {
			/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
				i,
				"__esModule",
				{ value: !0 },
			),
				(i.randomBytes =
					i.wrapXOFConstructorWithOpts =
					i.wrapConstructorWithOpts =
					i.wrapConstructor =
					i.checkOpts =
					i.Hash =
					i.concatBytes =
					i.toBytes =
					i.utf8ToBytes =
					i.asyncLoop =
					i.nextTick =
					i.hexToBytes =
					i.bytesToHex =
					i.isLE =
					i.rotr =
					i.createView =
					i.u32 =
					i.u8 =
						void 0);
			const _ = l(965),
				p = (C) => C instanceof Uint8Array,
				b = (C) => new Uint8Array(C.buffer, C.byteOffset, C.byteLength);
			i.u8 = b;
			const S = (C) =>
				new Uint32Array(C.buffer, C.byteOffset, Math.floor(C.byteLength / 4));
			i.u32 = S;
			const P = (C) => new DataView(C.buffer, C.byteOffset, C.byteLength);
			i.createView = P;
			const I = (C, x) => (C << (32 - x)) | (C >>> x);
			if (
				((i.rotr = I),
				(i.isLE =
					new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68),
				!i.isLE)
			)
				throw new Error("Non little-endian hardware is not supported");
			const D = Array.from({ length: 256 }, (C, x) =>
				x.toString(16).padStart(2, "0"),
			);
			function Z(C) {
				if (!p(C)) throw new Error("Uint8Array expected");
				let x = "";
				for (let j = 0; j < C.length; j++) x += D[C[j]];
				return x;
			}
			i.bytesToHex = Z;
			function ee(C) {
				if (typeof C != "string")
					throw new Error("hex string expected, got " + typeof C);
				const x = C.length;
				if (x % 2)
					throw new Error(
						"padded hex string expected, got unpadded hex of length " + x,
					);
				const j = new Uint8Array(x / 2);
				for (let M = 0; M < j.length; M++) {
					const V = M * 2,
						N = C.slice(V, V + 2),
						Q = Number.parseInt(N, 16);
					if (Number.isNaN(Q) || Q < 0)
						throw new Error("Invalid byte sequence");
					j[M] = Q;
				}
				return j;
			}
			i.hexToBytes = ee;
			const fe = async () => {};
			i.nextTick = fe;
			async function le(C, x, j) {
				let M = Date.now();
				for (let V = 0; V < C; V++) {
					j(V);
					const N = Date.now() - M;
					(N >= 0 && N < x) || (await (0, i.nextTick)(), (M += N));
				}
			}
			i.asyncLoop = le;
			function ae(C) {
				if (typeof C != "string")
					throw new Error(`utf8ToBytes expected string, got ${typeof C}`);
				return new Uint8Array(new TextEncoder().encode(C));
			}
			i.utf8ToBytes = ae;
			function ce(C) {
				if ((typeof C == "string" && (C = ae(C)), !p(C)))
					throw new Error(`expected Uint8Array, got ${typeof C}`);
				return C;
			}
			i.toBytes = ce;
			function te(...C) {
				const x = new Uint8Array(C.reduce((M, V) => M + V.length, 0));
				let j = 0;
				return (
					C.forEach((M) => {
						if (!p(M)) throw new Error("Uint8Array expected");
						x.set(M, j), (j += M.length);
					}),
					x
				);
			}
			i.concatBytes = te;
			class re {
				clone() {
					return this._cloneInto();
				}
			}
			i.Hash = re;
			const _e = {}.toString;
			function ue(C, x) {
				if (x !== void 0 && _e.call(x) !== "[object Object]")
					throw new Error("Options should be object or undefined");
				return Object.assign(C, x);
			}
			i.checkOpts = ue;
			function ke(C) {
				const x = (M) => C().update(ce(M)).digest(),
					j = C();
				return (
					(x.outputLen = j.outputLen),
					(x.blockLen = j.blockLen),
					(x.create = () => C()),
					x
				);
			}
			i.wrapConstructor = ke;
			function Le(C) {
				const x = (M, V) => C(V).update(ce(M)).digest(),
					j = C({});
				return (
					(x.outputLen = j.outputLen),
					(x.blockLen = j.blockLen),
					(x.create = (M) => C(M)),
					x
				);
			}
			i.wrapConstructorWithOpts = Le;
			function xe(C) {
				const x = (M, V) => C(V).update(ce(M)).digest(),
					j = C({});
				return (
					(x.outputLen = j.outputLen),
					(x.blockLen = j.blockLen),
					(x.create = (M) => C(M)),
					x
				);
			}
			i.wrapXOFConstructorWithOpts = xe;
			function H(C = 32) {
				if (_.crypto && typeof _.crypto.getRandomValues == "function")
					return _.crypto.getRandomValues(new Uint8Array(C));
				throw new Error("crypto.getRandomValues must be defined");
			}
			i.randomBytes = H;
		},
		472: (d, i, l) => {
			const { createId: _, init: p, getConstants: b, isCuid: S } = l(890);
			d.exports.Mc = _;
		},
		890: (d, i, l) => {
			const { sha3_512: _ } = l(463),
				p = 24,
				b = 32,
				S = (re = 4, _e = Math.random) => {
					let ue = "";
					for (; ue.length < re; ) ue = ue + Math.floor(_e() * 36).toString(36);
					return ue;
				};
			function P(re) {
				let _e = 8n,
					ue = 0n;
				for (const ke of re.values()) {
					const Le = BigInt(ke);
					ue = (ue << _e) + Le;
				}
				return ue;
			}
			const I = (re = "") => P(_(re)).toString(36).slice(1),
				D = Array.from({ length: 26 }, (re, _e) =>
					String.fromCharCode(_e + 97),
				),
				Z = (re) => D[Math.floor(re() * D.length)],
				ee = ({
					globalObj: re = typeof l.g < "u"
						? l.g
						: typeof window < "u"
							? window
							: {},
					random: _e = Math.random,
				} = {}) => {
					const ue = Object.keys(re).toString(),
						ke = ue.length ? ue + S(b, _e) : S(b, _e);
					return I(ke).substring(0, b);
				},
				fe = (re) => () => re++,
				le = 476782367,
				ae = ({
					random: re = Math.random,
					counter: _e = fe(Math.floor(re() * le)),
					length: ue = p,
					fingerprint: ke = ee({ random: re }),
				} = {}) =>
					function () {
						const xe = Z(re),
							H = Date.now().toString(36),
							C = _e().toString(36),
							x = S(ue, re),
							j = `${H + x + C + ke}`;
						return `${xe + I(j).substring(1, ue)}`;
					},
				ce = ae(),
				te = (re, { minLength: _e = 2, maxLength: ue = b } = {}) => {
					const ke = re.length,
						Le = /^[0-9a-z]+$/;
					try {
						if (typeof re == "string" && ke >= _e && ke <= ue && Le.test(re))
							return !0;
					} finally {
					}
					return !1;
				};
			(d.exports.getConstants = () => ({ defaultLength: p, bigLength: b })),
				(d.exports.init = ae),
				(d.exports.createId = ce),
				(d.exports.bufToBigInt = P),
				(d.exports.createCounter = fe),
				(d.exports.createFingerprint = ee),
				(d.exports.isCuid = te);
		},
	},
	Us = {};
function st(d) {
	var i = Us[d];
	if (i !== void 0) return i.exports;
	var l = (Us[d] = { exports: {} });
	return dd[d](l, l.exports, st), l.exports;
}
st.d = (d, i) => {
	for (var l in i)
		st.o(i, l) &&
			!st.o(d, l) &&
			Object.defineProperty(d, l, { enumerable: !0, get: i[l] });
};
st.g = (function () {
	if (typeof globalThis == "object") return globalThis;
	try {
		return this || new Function("return this")();
	} catch {
		if (typeof window == "object") return window;
	}
})();
st.o = (d, i) => Object.prototype.hasOwnProperty.call(d, i);
var Dt = {};
(() => {
	st.d(Dt, { Zu: () => kl, U3: () => Sl, um: () => Cl, pp: () => wl });
	const d = {
			arabic: "ar",
			armenian: "am",
			bulgarian: "bg",
			danish: "dk",
			dutch: "nl",
			english: "en",
			finnish: "fi",
			french: "fr",
			german: "de",
			greek: "gr",
			hungarian: "hu",
			indian: "in",
			indonesian: "id",
			irish: "ie",
			italian: "it",
			lithuanian: "lt",
			nepali: "np",
			norwegian: "no",
			portuguese: "pt",
			romanian: "ro",
			russian: "ru",
			serbian: "rs",
			slovenian: "ru",
			spanish: "es",
			swedish: "se",
			tamil: "ta",
			turkish: "tr",
			ukrainian: "uk",
			sanskrit: "sk",
		},
		i = {
			dutch: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
			english: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
			french: /[^a-z0-9äâàéèëêïîöôùüûœç-]+/gim,
			italian: /[^A-Za-zàèéìòóù0-9_'-]+/gim,
			norwegian: /[^a-z0-9_æøåÆØÅäÄöÖüÜ]+/gim,
			portuguese: /[^a-z0-9à-úÀ-Ú]/gim,
			russian: /[^a-z0-9а-яА-ЯёЁ]+/gim,
			spanish: /[^a-z0-9A-Zá-úÁ-ÚñÑüÜ]+/gim,
			swedish: /[^a-z0-9_åÅäÄöÖüÜ-]+/gim,
			german: /[^a-z0-9A-ZäöüÄÖÜß]+/gim,
			finnish: /[^a-z0-9äöÄÖ]+/gim,
			danish: /[^a-z0-9æøåÆØÅ]+/gim,
			hungarian: /[^a-z0-9áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+/gim,
			romanian: /[^a-z0-9ăâîșțĂÂÎȘȚ]+/gim,
			serbian: /[^a-z0-9čćžšđČĆŽŠĐ]+/gim,
			turkish: /[^a-z0-9çÇğĞıİöÖşŞüÜ]+/gim,
			lithuanian: /[^a-z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+/gim,
			arabic: /[^a-z0-9أ-ي]+/gim,
			nepali: /[^a-z0-9अ-ह]+/gim,
			irish: /[^a-z0-9áéíóúÁÉÍÓÚ]+/gim,
			indian: /[^a-z0-9अ-ह]+/gim,
			armenian: /[^a-z0-9ա-ֆ]+/gim,
			greek: /[^a-z0-9α-ωά-ώ]+/gim,
			indonesian: /[^a-z0-9]+/gim,
			ukrainian: /[^a-z0-9а-яА-ЯіїєІЇЄ]+/gim,
			slovenian: /[^a-z0-9čžšČŽŠ]+/gim,
			bulgarian: /[^a-z0-9а-яА-Я]+/gim,
			tamil: /[^a-z0-9அ-ஹ]+/gim,
			sanskrit: /[^a-z0-9A-Zāīūṛḷṃṁḥśṣṭḍṇṅñḻḹṝ]+/gim,
		},
		l = Object.keys(d),
		_ = Date.now().toString().slice(5);
	let p = 0;
	const b = BigInt(1e3),
		S = BigInt(1e6),
		P = BigInt(1e9),
		I = 65535;
	function D(e, t) {
		if (t.length < I) Array.prototype.push.apply(e, t);
		else
			for (let n = 0; n < t.length; n += I)
				Array.prototype.push.apply(e, t.slice(n, n + I));
	}
	function Z(e, ...t) {
		return e.replace(
			/%(?:(?<position>\d+)\$)?(?<width>-?\d*\.?\d*)(?<type>[dfs])/g,
			function (...n) {
				const o = n[n.length - 1],
					{ width: s, type: r, position: a } = o,
					c = a ? t[Number.parseInt(a) - 1] : t.shift(),
					u = s === "" ? 0 : Number.parseInt(s);
				switch (r) {
					case "d":
						return c.toString().padStart(u, "0");
					case "f": {
						let h = c;
						const [m, f] = s.split(".").map((y) => Number.parseFloat(y));
						return (
							typeof f == "number" && f >= 0 && (h = h.toFixed(f)),
							typeof m == "number" && m >= 0
								? h.toString().padStart(u, "0")
								: h.toString()
						);
					}
					case "s":
						return u < 0
							? c.toString().padEnd(-u, " ")
							: c.toString().padStart(u, " ");
					default:
						return c;
				}
			},
		);
	}
	async function ee(e) {
		return (
			typeof e == "number" && (e = BigInt(e)),
			e < b
				? `${e}ns`
				: e < S
					? `${e / b}μs`
					: e < P
						? `${e / S}ms`
						: `${e / P}s`
		);
	}
	async function fe() {
		return typeof process < "u" && process.hrtime !== void 0
			? process.hrtime.bigint()
			: BigInt(
					typeof performance < "u" ? Math.floor(performance.now() * 1e6) : 0,
				);
	}
	async function le() {
		return `${_}-${p++}`;
	}
	function ae(e, t) {
		return Object.hasOwn === void 0
			? Object.prototype.hasOwnProperty.call(e, t)
				? e[t]
				: void 0
			: Object.hasOwn(e, t)
				? e[t]
				: void 0;
	}
	function ce(e, t) {
		return t[1] === e[1] ? e[0] - t[0] : t[1] - e[1];
	}
	function te(e) {
		if (e.length === 0) return [];
		if (e.length === 1) return e[0];
		for (let n = 1; n < e.length; n++)
			if (e[n].length < e[0].length) {
				const o = e[0];
				(e[0] = e[n]), (e[n] = o);
			}
		const t = new Map();
		for (const n of e[0]) t.set(n, 1);
		for (let n = 1; n < e.length; n++) {
			let o = 0;
			for (const s of e[n]) {
				const r = t.get(s);
				r === n && (t.set(s, r + 1), o++);
			}
			if (o === 0) return [];
		}
		return e[0].filter((n) => {
			const o = t.get(n);
			return o !== void 0 && t.set(n, 0), o === e.length;
		});
	}
	async function re(e, t) {
		const n = {},
			o = t.length;
		for (let s = 0; s < o; s++) {
			const r = t[s],
				a = r.split(".");
			let c = e;
			const u = a.length;
			for (let h = 0; h < u; h++)
				if (((c = c[a[h]]), typeof c == "object")) {
					if (
						c !== null &&
						"lat" in c &&
						"lon" in c &&
						typeof c.lat == "number" &&
						typeof c.lon == "number"
					) {
						c = n[r] = c;
						break;
					} else if (!Array.isArray(c) && c !== null && h === u - 1) {
						c = void 0;
						break;
					}
				} else if ((c === null || typeof c != "object") && h < u - 1) {
					c = void 0;
					break;
				}
			typeof c < "u" && (n[r] = c);
		}
		return n;
	}
	async function _e(e, t) {
		return (await re(e, [t]))[t];
	}
	const ue = { cm: 0.01, m: 1, km: 1e3, ft: 0.3048, yd: 0.9144, mi: 1609.344 };
	function ke(e, t) {
		const n = ue[t];
		if (n === void 0) throw new Error(H("INVALID_DISTANCE_SUFFIX", e).message);
		return e * n;
	}
	const xe = {
		NO_LANGUAGE_WITH_CUSTOM_TOKENIZER:
			"Do not pass the language option to create when using a custom tokenizer.",
		LANGUAGE_NOT_SUPPORTED: `Language "%s" is not supported.
Supported languages are:
 - ${l.join(`
 - `)}`,
		INVALID_STEMMER_FUNCTION_TYPE:
			"config.stemmer property must be a function.",
		MISSING_STEMMER:
			'As of version 1.0.0 @orama/orama does not ship non English stemmers by default. To solve this, please explicitly import and specify the "%s" stemmer from the package @orama/stemmers. See https://docs.oramasearch.com/open-source/text-analysis/stemming for more information.',
		CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY:
			"Custom stop words array must only contain strings.",
		UNSUPPORTED_COMPONENT: 'Unsupported component "%s".',
		COMPONENT_MUST_BE_FUNCTION: 'The component "%s" must be a function.',
		COMPONENT_MUST_BE_FUNCTION_OR_ARRAY_FUNCTIONS:
			'The component "%s" must be a function or an array of functions.',
		INVALID_SCHEMA_TYPE:
			'Unsupported schema type "%s" at "%s". Expected "string", "boolean" or "number" or array of them.',
		DOCUMENT_ID_MUST_BE_STRING:
			'Document id must be of type "string". Got "%s" instead.',
		DOCUMENT_ALREADY_EXISTS: 'A document with id "%s" already exists.',
		DOCUMENT_DOES_NOT_EXIST: 'A document with id "%s" does not exists.',
		MISSING_DOCUMENT_PROPERTY: 'Missing searchable property "%s".',
		INVALID_DOCUMENT_PROPERTY:
			'Invalid document property "%s": expected "%s", got "%s"',
		UNKNOWN_INDEX:
			'Invalid property name "%s". Expected a wildcard string ("*") or array containing one of the following properties: %s',
		INVALID_BOOST_VALUE:
			"Boost value must be a number greater than, or less than 0.",
		INVALID_FILTER_OPERATION:
			"You can only use one operation per filter, you requested %d.",
		SCHEMA_VALIDATION_FAILURE:
			'Cannot insert document due schema validation failure on "%s" property.',
		INVALID_SORT_SCHEMA_TYPE:
			'Unsupported sort schema type "%s" at "%s". Expected "string" or "number".',
		CANNOT_SORT_BY_ARRAY:
			'Cannot configure sort for "%s" because it is an array (%s).',
		UNABLE_TO_SORT_ON_UNKNOWN_FIELD:
			'Unable to sort on unknown field "%s". Allowed fields: %s',
		SORT_DISABLED:
			"Sort is disabled. Please read the documentation at https://docs.oramasearch for more information.",
		UNKNOWN_GROUP_BY_PROPERTY: 'Unknown groupBy property "%s".',
		INVALID_GROUP_BY_PROPERTY:
			'Invalid groupBy property "%s". Allowed types: "%s", but given "%s".',
		UNKNOWN_FILTER_PROPERTY: 'Unknown filter property "%s".',
		INVALID_VECTOR_SIZE:
			'Vector size must be a number greater than 0. Got "%s" instead.',
		INVALID_VECTOR_VALUE:
			'Vector value must be a number greater than 0. Got "%s" instead.',
		INVALID_INPUT_VECTOR: `Property "%s" was declared as a %s-dimensional vector, but got a %s-dimensional vector instead.
Input vectors must be of the size declared in the schema, as calculating similarity between vectors of different sizes can lead to unexpected results.`,
		WRONG_SEARCH_PROPERTY_TYPE:
			'Property "%s" is not searchable. Only "string" properties are searchable.',
		FACET_NOT_SUPPORTED: `Facet doens't support the type "%s".`,
		INVALID_DISTANCE_SUFFIX:
			'Invalid distance suffix "%s". Valid suffixes are: cm, m, km, mi, yd, ft.',
	};
	function H(e, ...t) {
		const n = new Error(Z(xe[e] ?? `Unsupported Orama Error code: ${e}`, ...t));
		return (
			(n.code = e),
			"captureStackTrace" in Error.prototype && Error.captureStackTrace(n),
			n
		);
	}
	function C(e, t, n = 1, o) {
		if (t === 0) throw H("INVALID_BOOST_VALUE");
		const s = new Map(),
			r = new Map(),
			a = e.length;
		for (let A = 0; A < a; A++) {
			const O = e[A],
				B = O.length;
			for (let R = 0; R < B; R++) {
				const [W, X] = O[R],
					ie = X * t,
					J = s.get(W);
				J !== void 0
					? (s.set(W, J * 1.5 + ie), r.set(W, r.get(W) + 1))
					: (s.set(W, ie), r.set(W, 1));
			}
		}
		const c = [];
		for (const A of s.entries()) c.push(A);
		const u = c.sort((A, O) => O[1] - A[1]);
		if (n === 1) return u;
		const h = u.length,
			m = [];
		for (const A of r.entries()) m.push(A);
		const f = m.sort((A, O) => O[1] - A[1]);
		let y;
		for (let A = 0; A < h && f[A][1] === o; A++) y = A;
		if (typeof y > "u") {
			if (n === 0) return [];
			y = 0;
		}
		if (n === 0) return u.slice(0, y + 1);
		const k = y + Math.ceil((n * 100 * (u.length - y)) / 100);
		return u.slice(0, u.length + k);
	}
	function x(e, t, n, o, s, r) {
		const { k: a, b: c, d: u } = r;
		return (
			(Math.log(1 + (n - t + 0.5) / (t + 0.5)) * (u + e * (a + 1))) /
			(e + a * (1 - c + (c * o) / s))
		);
	}
	function j(e = "desc", t, n) {
		return e.toLowerCase() === "asc" ? t[1] - n[1] : n[1] - t[1];
	}
	async function M(e, t, n) {
		const o = {},
			s = t.map(([h]) => h),
			r = await e.documentsStore.getMultiple(e.data.docs, s),
			a = Object.keys(n),
			c = await e.index.getSearchablePropertiesWithTypes(e.data.index);
		for (const h of a) {
			let m = {};
			if (c[h] === "number") {
				const { ranges: f } = n[h],
					y = [];
				for (const k of f) y.push([`${k.from}-${k.to}`, 0]);
				m = Object.fromEntries(y);
			}
			o[h] = { count: 0, values: m };
		}
		const u = r.length;
		for (let h = 0; h < u; h++) {
			const m = r[h];
			for (const f of a) {
				const y = f.includes(".") ? await _e(m, f) : m[f],
					k = c[f];
				switch (k) {
					case "number": {
						const A = n[f].ranges;
						V(A, o[f].values, y);
						break;
					}
					case "number[]": {
						const A = new Set(),
							O = n[f].ranges;
						for (const B of y) V(O, o[f].values, B, A);
						break;
					}
					case "boolean":
					case "enum":
					case "string": {
						N(o[f].values, y, k);
						break;
					}
					case "boolean[]":
					case "enum[]":
					case "string[]": {
						const A = new Set(),
							O = k === "boolean[]" ? "boolean" : "string";
						for (const B of y) N(o[f].values, B, O, A);
						break;
					}
					default:
						throw H("FACET_NOT_SUPPORTED", k);
				}
			}
		}
		for (const h of a)
			if (((o[h].count = Object.keys(o[h].values).length), c[h] === "string")) {
				const m = n;
				o[h].values = Object.fromEntries(
					Object.entries(o[h].values)
						.sort((f, y) => j(m.sort, f, y))
						.slice(m.offset ?? 0, m.limit ?? 10),
				);
			}
		return o;
	}
	function V(e, t, n, o) {
		for (const s of e) {
			const r = `${s.from}-${s.to}`;
			(o && o.has(r)) ||
				(n >= s.from &&
					n <= s.to &&
					(t[r] === void 0 ? (t[r] = 1) : (t[r]++, o && o.add(r))));
		}
	}
	function N(e, t, n, o) {
		const s =
			(t == null ? void 0 : t.toString()) ?? (n === "boolean" ? "false" : "");
		(o && o.has(s)) || ((e[s] = (e[s] ?? 0) + 1), o && o.add(s));
	}
	function Q(e, t) {
		const n = new Map(),
			o = [];
		for (const s of e) n.set(s, !0);
		for (const [s, r] of t) n.has(s) && (o.push([s, r]), n.delete(s));
		return o;
	}
	function we() {
		return {
			idToInternalId: new Map(),
			internalIdToId: [],
			save: Ue,
			load: Ve,
		};
	}
	function Ue(e) {
		return { internalIdToId: e.internalIdToId };
	}
	function Ve(e, t) {
		const { internalIdToId: n } = t;
		e.internalDocumentIDStore.idToInternalId.clear(),
			(e.internalDocumentIDStore.internalIdToId = []);
		for (let o = 0; o < n.length; o++)
			e.internalDocumentIDStore.idToInternalId.set(n[o], o + 1),
				e.internalDocumentIDStore.internalIdToId.push(n[o]);
	}
	function $e(e, t) {
		if (typeof t == "string") {
			const n = e.idToInternalId.get(t);
			if (n) return n;
			const o = e.idToInternalId.size + 1;
			return e.idToInternalId.set(t, o), e.internalIdToId.push(t), o;
		}
		return t > e.internalIdToId.length ? $e(e, t.toString()) : t;
	}
	function kt(e, t) {
		if (e.internalIdToId.length < t) throw new Error(`Invalid internalId ${t}`);
		return e.internalIdToId[t - 1];
	}
	const ut = {
			reducer: (e, t, n, o) => ((t[o] = n), t),
			getInitialValue: (e) => Array.from({ length: e }),
		},
		Jn = ["string", "number", "boolean"];
	async function lr(e, t, n) {
		const o = n.properties,
			s = o.length,
			r = await e.index.getSearchablePropertiesWithTypes(e.data.index);
		for (let R = 0; R < s; R++) {
			const W = o[R];
			if (typeof r[W] > "u") throw H("UNKNOWN_GROUP_BY_PROPERTY", W);
			if (!Jn.includes(r[W]))
				throw H("INVALID_GROUP_BY_PROPERTY", W, Jn.join(", "), r[W]);
		}
		const a = t.map(([R]) => kt(e.internalDocumentIDStore, R)),
			c = await e.documentsStore.getMultiple(e.data.docs, a),
			u = c.length,
			h = n.maxResult || Number.MAX_SAFE_INTEGER,
			m = [],
			f = {};
		for (let R = 0; R < s; R++) {
			const W = o[R],
				X = { property: W, perValue: {} },
				ie = new Set();
			for (let J = 0; J < u; J++) {
				const pe = c[J],
					oe = await _e(pe, W);
				if (typeof oe > "u") continue;
				const ne = typeof oe != "boolean" ? oe : "" + oe;
				typeof X.perValue[ne] > "u" &&
					(X.perValue[ne] = { indexes: [], count: 0 }),
					!(X.perValue[ne].count >= h) &&
						(X.perValue[ne].indexes.push(J),
						X.perValue[ne].count++,
						ie.add(oe));
			}
			m.push(Array.from(ie)), (f[W] = X);
		}
		const y = Qn(m),
			k = y.length,
			A = [];
		for (let R = 0; R < k; R++) {
			const W = y[R],
				X = W.length,
				ie = { values: [], indexes: [] },
				J = [];
			for (let pe = 0; pe < X; pe++) {
				const oe = W[pe],
					ne = o[pe];
				J.push(f[ne].perValue[typeof oe != "boolean" ? oe : "" + oe].indexes),
					ie.values.push(oe);
			}
			(ie.indexes = te(J).sort((pe, oe) => pe - oe)),
				ie.indexes.length !== 0 && A.push(ie);
		}
		const O = A.length,
			B = Array.from({ length: O });
		for (let R = 0; R < O; R++) {
			const W = A[R],
				X = n.reduce || ut,
				ie = W.indexes.map((ne) => ({
					id: a[ne],
					score: t[ne][1],
					document: c[ne],
				})),
				J = X.reducer.bind(null, W.values),
				pe = X.getInitialValue(W.indexes.length),
				oe = ie.reduce(J, pe);
			B[R] = { values: W.values, result: oe };
		}
		return B;
	}
	function Qn(e, t = 0) {
		if (t + 1 === e.length) return e[t].map((r) => [r]);
		const n = e[t],
			o = Qn(e, t + 1),
			s = [];
		for (const r of n)
			for (const a of o) {
				const c = [r];
				D(c, a), s.push(c);
			}
		return s;
	}
	const cr = ["tokenizer", "index", "documentsStore", "sorter"],
		eo = [
			"validateSchema",
			"getDocumentIndexId",
			"getDocumentProperties",
			"formatElapsedTime",
		];
	async function ur(e, t, n, o, s) {
		const r = e.length;
		for (let a = 0; a < r; a++) await e[a](t, n, o, s);
	}
	async function dr(e, t, n, o) {
		const s = e.length;
		for (let r = 0; r < s; r++) await e[r](t, n, o);
	}
	const fr = { k: 1.2, b: 0.75, d: 0.5 };
	async function hr(e, t, n, o, s, r, a, c, u) {
		const h = {},
			m = {};
		for (const f of r) {
			const y = {};
			for (const k of a) y[k] = [];
			(h[f] = y), (m[f] = []);
		}
		return {
			timeStart: u,
			tokenizer: e,
			index: t,
			documentsStore: n,
			language: o,
			params: s,
			docsCount: c,
			uniqueDocsIDs: {},
			indexMap: h,
			docsIntersection: m,
		};
	}
	async function _r(e, t, n) {
		const o = await fe();
		t.relevance = Object.assign(t.relevance ?? {}, fr);
		const s = t.facets && Object.keys(t.facets).length > 0,
			{
				limit: r = 10,
				offset: a = 0,
				term: c,
				properties: u,
				threshold: h = 1,
				distinctOn: m,
			} = t,
			f = t.preflight === !0,
			{ index: y, docs: k } = e.data,
			A = await e.tokenizer.tokenize(c ?? "", n);
		let O = e.caches.propertiesToSearch;
		if (!O) {
			const ne = await e.index.getSearchablePropertiesWithTypes(y);
			(O = await e.index.getSearchableProperties(y)),
				(O = O.filter((he) => ne[he].startsWith("string"))),
				(e.caches.propertiesToSearch = O);
		}
		if (u && u !== "*") {
			for (const ne of u)
				if (!O.includes(ne)) throw H("UNKNOWN_INDEX", ne, O.join(", "));
			O = O.filter((ne) => u.includes(ne));
		}
		const B = await hr(
				e.tokenizer,
				e.index,
				e.documentsStore,
				n,
				t,
				O,
				A,
				await e.documentsStore.count(k),
				o,
			),
			R = Object.keys(t.where ?? {}).length > 0;
		let W = [];
		R && (W = await e.index.searchByWhereClause(B, y, t.where));
		const X = A.length;
		if (X || (u && u.length > 0)) {
			const ne = O.length;
			for (let he = 0; he < ne; he++) {
				var ie;
				const Ce = O[he];
				if (X !== 0)
					for (let Oe = 0; Oe < X; Oe++) {
						const bt = A[Oe],
							tn = await e.index.search(B, y, Ce, bt);
						D(B.indexMap[Ce][bt], tn);
					}
				else {
					B.indexMap[Ce][""] = [];
					const Oe = await e.index.search(B, y, Ce, "");
					D(B.indexMap[Ce][""], Oe);
				}
				const ot = B.indexMap[Ce],
					je = Object.values(ot);
				B.docsIntersection[Ce] = C(
					je,
					(t == null || (ie = t.boost) === null || ie === void 0
						? void 0
						: ie[Ce]) ?? 1,
					h,
					X,
				);
				const gt = B.docsIntersection[Ce],
					Mt = gt.length;
				for (let Oe = 0; Oe < Mt; Oe++) {
					const [bt, tn] = gt[Oe],
						Hs = B.uniqueDocsIDs[bt];
					Hs
						? (B.uniqueDocsIDs[bt] = Hs + tn + 0.5)
						: (B.uniqueDocsIDs[bt] = tn);
				}
			}
		} else
			A.length === 0 && c
				? (B.uniqueDocsIDs = {})
				: (B.uniqueDocsIDs = Object.fromEntries(
						Object.keys(await e.documentsStore.getAll(e.data.docs)).map(
							(ne) => [ne, 0],
						),
					));
		let J = Object.entries(B.uniqueDocsIDs).map(([ne, he]) => [+ne, he]);
		if ((R && (J = Q(W, J)), t.sortBy))
			if (typeof t.sortBy == "function") {
				const ne = J.map(([ot]) => ot),
					Ce = (await e.documentsStore.getMultiple(e.data.docs, ne)).map(
						(ot, je) => [J[je][0], J[je][1], ot],
					);
				Ce.sort(t.sortBy), (J = Ce.map(([ot, je]) => [ot, je]));
			} else
				J = await e.sorter
					.sortBy(e.data.sorting, J, t.sortBy)
					.then((ne) =>
						ne.map(([he, Ce]) => [$e(e.internalDocumentIDStore, he), Ce]),
					);
		else J = J.sort(ce);
		let pe;
		!f && m ? (pe = await pr(e, J, a, r, m)) : f || (pe = await vr(e, J, a, r));
		const oe = {
			elapsed: { formatted: "", raw: 0 },
			hits: [],
			count: J.length,
		};
		if ((typeof pe < "u" && (oe.hits = pe.filter(Boolean)), s)) {
			const ne = await M(e, J, t.facets);
			oe.facets = ne;
		}
		return (
			t.groupBy && (oe.groups = await lr(e, J, t.groupBy)),
			e.beforeSearch && (await dr(e.beforeSearch, e, t, n)),
			e.afterSearch && (await ur(e.afterSearch, e, t, n, oe)),
			(oe.elapsed = await e.formatElapsedTime((await fe()) - B.timeStart)),
			oe
		);
	}
	async function pr(e, t, n, o, s) {
		const r = e.data.docs,
			a = new Map(),
			c = [],
			u = new Set(),
			h = t.length;
		let m = 0;
		for (let f = 0; f < h; f++) {
			const y = t[f];
			if (typeof y > "u") continue;
			const [k, A] = y;
			if (u.has(k)) continue;
			const O = await e.documentsStore.get(r, k),
				B = await _e(O, s);
			if (
				!(typeof B > "u" || a.has(B)) &&
				(a.set(B, !0),
				m++,
				!(m <= n) &&
					(c.push({
						id: kt(e.internalDocumentIDStore, k),
						score: A,
						document: O,
					}),
					u.add(k),
					m >= n + o))
			)
				break;
		}
		return c;
	}
	async function vr(e, t, n, o) {
		const s = e.data.docs,
			r = Array.from({ length: o }),
			a = new Set();
		for (let c = n; c < o + n; c++) {
			const u = t[c];
			if (typeof u > "u") break;
			const [h, m] = u;
			if (!a.has(h)) {
				const f = await e.documentsStore.get(s, h);
				(r[c] = {
					id: kt(e.internalDocumentIDStore, h),
					score: m,
					document: f,
				}),
					a.add(h);
			}
		}
		return r;
	}
	async function mr(e) {
		return { raw: Number(e), formatted: await ee(e) };
	}
	async function gr(e) {
		if (e.id) {
			if (typeof e.id != "string")
				throw H("DOCUMENT_ID_MUST_BE_STRING", typeof e.id);
			return e.id;
		}
		return await le();
	}
	async function to(e, t) {
		for (const [n, o] of Object.entries(t)) {
			const s = e[n];
			if (
				!(typeof s > "u") &&
				!(
					o === "geopoint" &&
					typeof s == "object" &&
					typeof s.lon == "number" &&
					typeof s.lat == "number"
				) &&
				!(o === "enum" && (typeof s == "string" || typeof s == "number"))
			) {
				if (o === "enum[]" && Array.isArray(s)) {
					const r = s.length;
					for (let a = 0; a < r; a++)
						if (typeof s[a] != "string" && typeof s[a] != "number")
							return n + "." + a;
					continue;
				}
				if (wt(o)) {
					const r = no(o);
					if (!Array.isArray(s) || s.length !== r)
						throw H("INVALID_INPUT_VECTOR", n, r, s.length);
					continue;
				}
				if (dn(o)) {
					if (!Array.isArray(s)) return n;
					const r = fn(o),
						a = s.length;
					for (let c = 0; c < a; c++) if (typeof s[c] !== r) return n + "." + c;
					continue;
				}
				if (typeof o == "object") {
					if (!s || typeof s != "object") return n;
					const r = await to(s, o);
					if (r) return n + "." + r;
					continue;
				}
				if (typeof s !== o) return n;
			}
		}
	}
	const br = {
			string: !1,
			number: !1,
			boolean: !1,
			enum: !1,
			geopoint: !1,
			"string[]": !0,
			"number[]": !0,
			"boolean[]": !0,
			"enum[]": !0,
		},
		yr = {
			"string[]": "string",
			"number[]": "number",
			"boolean[]": "boolean",
			"enum[]": "enum",
		};
	function wt(e) {
		return typeof e == "string" && /^vector\[\d+\]$/.test(e);
	}
	function dn(e) {
		return typeof e == "string" && br[e];
	}
	function fn(e) {
		return yr[e];
	}
	function no(e) {
		const t = Number(e.slice(7, -1));
		switch (!0) {
			case isNaN(t):
				throw H("INVALID_VECTOR_VALUE", e);
			case t <= 0:
				throw H("INVALID_VECTOR_SIZE", e);
			default:
				return t;
		}
	}
	async function kr(e, t) {
		return { sharedInternalDocumentStore: t, docs: {}, count: 0 };
	}
	async function wr(e, t) {
		const n = $e(e.sharedInternalDocumentStore, t);
		return e.docs[n];
	}
	async function Cr(e, t) {
		const n = Array.from({ length: t.length });
		for (let o = 0; o < t.length; o++) {
			const s = $e(e.sharedInternalDocumentStore, t[o]);
			n[o] = e.docs[s];
		}
		return n;
	}
	async function Sr(e) {
		return e.docs;
	}
	async function Lr(e, t, n) {
		const o = $e(e.sharedInternalDocumentStore, t);
		return typeof e.docs[o] < "u" ? !1 : ((e.docs[o] = n), e.count++, !0);
	}
	async function $r(e, t) {
		const n = $e(e.sharedInternalDocumentStore, t);
		return typeof e.docs[n] > "u" ? !1 : (delete e.docs[n], e.count--, !0);
	}
	async function Ir(e) {
		return e.count;
	}
	async function Tr(e, t) {
		const n = t;
		return { docs: n.docs, count: n.count, sharedInternalDocumentStore: e };
	}
	async function Pr(e) {
		return { docs: e.docs, count: e.count };
	}
	async function Ar() {
		return {
			create: kr,
			get: wr,
			getMultiple: Cr,
			getAll: Sr,
			store: Lr,
			remove: $r,
			count: Ir,
			load: Tr,
			save: Pr,
		};
	}
	const Er = [
		"beforeInsert",
		"afterInsert",
		"beforeRemove",
		"afterRemove",
		"beforeUpdate",
		"afterUpdate",
		"beforeSearch",
		"afterSearch",
		"beforeInsertMultiple",
		"afterInsertMultiple",
		"beforeRemoveMultiple",
		"afterRemoveMultiple",
		"beforeUpdateMultiple",
		"afterUpdateMultiple",
		"beforeLoad",
		"afterLoad",
	];
	function Mr(e, t) {
		var n;
		const o = [],
			s = (n = e.plugins) === null || n === void 0 ? void 0 : n.length;
		if (!s) return o;
		for (let r = 0; r < s; r++) {
			const a = e.plugins[r];
			typeof a[t] == "function" && o.push(a[t]);
		}
		return o;
	}
	const oo = {
		UNBALANCED_RIGHT: -2,
		SLIGHTLY_UNBALANCED_RIGHT: -1,
		BALANCED: 0,
		SLIGHTLY_UNBALANCED_LEFT: 1,
		UNBALANCED_LEFT: 2,
	};
	function Re(e) {
		return e != null ? e.h : -1;
	}
	function so(e) {
		const t = e.r;
		return (
			(e.r = t.l),
			(t.l = e),
			(e.h = Math.max(Re(e.l), Re(e.r)) + 1),
			(t.h = Math.max(Re(t.l), Re(t.r)) + 1),
			t
		);
	}
	function ro(e) {
		const t = e.l;
		return (
			(e.l = t.r),
			(t.r = e),
			(e.h = Math.max(Re(e.l), Re(e.r)) + 1),
			(t.h = Math.max(Re(t.l), Re(t.r)) + 1),
			t
		);
	}
	function Or(e, t, n) {
		if (!e) return [];
		const o = [];
		function s(r) {
			r &&
				(r.k > t && s(r.l),
				r.k >= t && r.k <= n && D(o, r.v),
				r.k < n && s(r.r));
		}
		return s(e), o;
	}
	function io(e, t, n = !1) {
		if (!e) return [];
		const o = [];
		function s(r) {
			r &&
				(n && r.k >= t && D(o, r.v),
				!n && r.k > t && D(o, r.v),
				s(r.l),
				s(r.r));
		}
		return s(e), o;
	}
	function ao(e, t, n = !1) {
		if (!e) return [];
		const o = [];
		function s(r) {
			r &&
				(n && r.k <= t && D(o, r.v),
				!n && r.k < t && D(o, r.v),
				s(r.l),
				s(r.r));
		}
		return s(e), o;
	}
	function lo(e, t) {
		for (; e !== null; )
			if (t < e.k) e = e.l;
			else if (t > e.k) e = e.r;
			else return e;
		return null;
	}
	function co(e, t) {
		return { k: e, v: t, l: null, r: null, h: 0 };
	}
	function Dr(e, t, n) {
		let o = null,
			s = e;
		for (; s !== null; )
			if (((o = s), t < s.k)) s = s.l;
			else if (t > s.k) s = s.r;
			else return (s.v = s.v.concat(n)), e;
		const r = co(t, n);
		for (
			o == null ? (e = r) : t < o.k ? (o.l = r) : (o.r = r), s = r;
			o != null;
		) {
			const a = Re(o.l) - Re(o.r);
			if (
				(a === oo.UNBALANCED_LEFT &&
					(t > o.l.k && (o.l = so(o.l)), (o = ro(o))),
				a === oo.UNBALANCED_RIGHT &&
					(t < o.r.k && (o.r = ro(o.r)), (o = so(o))),
				o === e)
			)
				break;
			(s = o), (o = Nr(e, s.k));
		}
		return e;
	}
	function Nr(e, t) {
		let n = e,
			o = null;
		for (; n !== null; )
			if (t < n.k) (o = n), (n = n.l);
			else if (t > n.k) (o = n), (n = n.r);
			else break;
		return o;
	}
	function xr(e, t) {
		const n = lo(e, t);
		return n == null ? null : n.v;
	}
	function Vr(e, t) {
		let n = e,
			o = null;
		for (; n != null && n.k !== t; ) (o = n), t < n.k ? (n = n.l) : (n = n.r);
		if (n == null) return null;
		if (n.l == null && n.r == null)
			o == null ? (e = null) : o.l === n ? (o.l = null) : (o.r = null);
		else if (n.l != null && n.r != null) {
			let s = n.r,
				r = n;
			for (; s.l != null; ) (r = s), (s = s.l);
			(n.k = s.k), r === n ? (r.r = s.r) : (r.l = s.r);
		} else {
			const s = n.l != null ? n.l : n.r;
			o == null ? (e = s) : o.l === n ? (o.l = s) : (o.r = s);
		}
		return e;
	}
	function Br(e, t, n) {
		const o = lo(e, n);
		if (o) {
			if (o.v.length === 1) {
				Vr(e, n);
				return;
			}
			o.v.splice(o.v.indexOf(t), 1);
		}
	}
	function Hr() {
		return { numberToDocumentId: new Map() };
	}
	function Ur(e, t, n) {
		return e.numberToDocumentId.has(t)
			? (e.numberToDocumentId.get(t).push(n), e)
			: (e.numberToDocumentId.set(t, [n]), e);
	}
	function Rr(e, t, n) {
		var o, s;
		e == null ||
			e.numberToDocumentId.set(
				n,
				((o = e == null ? void 0 : e.numberToDocumentId.get(n)) === null ||
				o === void 0
					? void 0
					: o.filter((r) => r !== t)) ?? [],
			),
			((s = e == null ? void 0 : e.numberToDocumentId.get(n)) === null ||
			s === void 0
				? void 0
				: s.length) === 0 &&
				(e == null || e.numberToDocumentId.delete(n));
	}
	function Fr(e, t) {
		const n = Object.keys(t);
		if (n.length !== 1) throw new Error("Invalid operation");
		const o = n[0];
		switch (o) {
			case "eq": {
				const s = t[o];
				return e.numberToDocumentId.get(s) ?? [];
			}
			case "in": {
				const s = t[o],
					r = [];
				for (const a of s) {
					const c = e.numberToDocumentId.get(a);
					c != null && D(r, c);
				}
				return r;
			}
			case "nin": {
				const s = t[o],
					r = [],
					a = e.numberToDocumentId.keys();
				for (const c of a) {
					if (s.includes(c)) continue;
					const u = e.numberToDocumentId.get(c);
					u != null && D(r, u);
				}
				return r;
			}
		}
		throw new Error("Invalid operation");
	}
	function zr(e, t) {
		const n = Object.keys(t);
		if (n.length !== 1) throw new Error("Invalid operation");
		const o = n[0];
		switch (o) {
			case "containsAll": {
				const r = t[o].map((a) => e.numberToDocumentId.get(a) ?? []);
				return te(r);
			}
		}
		throw new Error("Invalid operation");
	}
	function jr(e, t, n) {
		if (e === t) return 0;
		const o = e;
		e.length > t.length && ((e = t), (t = o));
		let s = e.length,
			r = t.length;
		for (; s > 0 && e.charCodeAt(~-s) === t.charCodeAt(~-r); ) s--, r--;
		if (!s) return r > n ? -1 : r;
		let a = 0;
		for (; a < s && e.charCodeAt(a) === t.charCodeAt(a); ) a++;
		if (((s -= a), (r -= a), s === 0)) return r > n ? -1 : r;
		const c = r - s;
		if (n > r) n = r;
		else if (c > n) return -1;
		let u = 0;
		const h = [],
			m = [];
		for (; u < n; ) (m[u] = t.charCodeAt(a + u)), (h[u] = ++u);
		for (; u < r; ) (m[u] = t.charCodeAt(a + u)), (h[u++] = n + 1);
		const f = n - c,
			y = n < r;
		let k = 0,
			A = n,
			O = 0,
			B = 0,
			R = 0,
			W = 0,
			X = 0;
		for (u = 0; u < s; u++) {
			for (
				B = u,
					O = u + 1,
					W = e.charCodeAt(a + u),
					k += u > f ? 1 : 0,
					A += A < r ? 1 : 0,
					X = k;
				X < A;
				X++
			)
				(R = O),
					(O = B),
					(B = h[X]),
					W !== m[X] && (B < O && (O = B), R < O && (O = R), O++),
					(h[X] = O);
			if (y && h[u + c] > n) return -1;
		}
		return O <= n ? O : -1;
	}
	function uo(e, t, n) {
		const o = jr(e, t, n);
		return { distance: o, isBounded: o >= 0 };
	}
	class Wr {
		constructor(t, n, o) {
			ye(this, "c", {});
			ye(this, "d", []);
			ye(this, "w", "");
			(this.k = t), (this.s = n), (this.e = o);
		}
		toJSON() {
			return { w: this.w, s: this.s, c: this.c, d: this.d, e: this.e };
		}
	}
	function dt(e, t) {
		e.w = t.w + e.s;
	}
	function Nt(e, t) {
		e.d.push(t);
	}
	function Gr(e, t) {
		const n = e.d.indexOf(t);
		return n === -1 ? !1 : (e.d.splice(n, 1), !0);
	}
	function fo(e, t, n, o, s) {
		if (e.e) {
			const { w: r, d: a } = e;
			if (o && r !== n) return {};
			if (
				(ae(t, r) == null &&
					(s
						? Math.abs(n.length - r.length) <= s &&
							uo(n, r, s).isBounded &&
							(t[r] = [])
						: (t[r] = [])),
				ae(t, r) != null && a.length > 0)
			) {
				const c = new Set(t[r]),
					u = a.length;
				for (let h = 0; h < u; h++) c.add(a[h]);
				t[r] = Array.from(c);
			}
		}
		for (const r of Object.keys(e.c)) fo(e.c[r], t, n, o, s);
		return t;
	}
	function ho(e, t) {
		let n = "";
		const o = Math.min(e.length, t.length);
		for (let s = 0; s < o; s++) {
			if (e[s] !== t[s]) return n;
			n += e[s];
		}
		return n;
	}
	function ft(e = !1, t = "", n = "") {
		return new Wr(n, t, e);
	}
	function Zr(e, t, n) {
		for (let o = 0; o < t.length; o++) {
			const s = t[o],
				r = t.substring(o),
				a = e.c[s];
			if (a) {
				const c = a.s,
					u = c.length,
					h = ho(c, r),
					m = h.length;
				if (c === r) {
					Nt(a, n), (a.e = !0);
					return;
				}
				const f = c[m];
				if (m < u && m === r.length) {
					const y = ft(!0, r, s);
					y.c[f] = a;
					const k = y.c[f];
					(k.s = c.substring(m)),
						(k.k = f),
						(e.c[s] = y),
						dt(y, e),
						dt(k, y),
						Nt(y, n);
					return;
				}
				if (m < u && m < r.length) {
					const y = ft(!1, h, s);
					(y.c[f] = a), (e.c[s] = y);
					const k = y.c[f];
					(k.s = c.substring(m)), (k.k = f);
					const A = r[m],
						O = ft(!0, t.substring(o + m), A);
					Nt(O, n), (y.c[A] = O), dt(y, e), dt(O, y), dt(k, y);
					return;
				}
				(o += u - 1), (e = a);
			} else {
				const c = ft(!0, r, s);
				Nt(c, n), (e.c[s] = c), dt(c, e);
				return;
			}
		}
	}
	function Ct(e, t, n, o, s, r) {
		if (!(o < 0)) {
			if (e.e) {
				const { w: a, d: c } = e;
				if (
					a &&
					(Math.abs(t.length - a.length) <= s &&
						uo(t, a, s).isBounded &&
						(r[a] = []),
					ae(r, a) != null && c.length > 0)
				) {
					const h = new Set(r[a]),
						m = c.length;
					for (let f = 0; f < m; f++) h.add(c[f]);
					r[a] = Array.from(h);
				}
			}
			if (!(n >= t.length)) {
				t[n] in e.c && Ct(e.c[t[n]], t, n + 1, o, s, r),
					Ct(e, t, n + 1, o - 1, s, r);
				for (const a in e.c) Ct(e.c[a], t, n, o - 1, s, r);
				for (const a in e.c) a !== t[n] && Ct(e.c[a], t, n + 1, o - 1, s, r);
			}
		}
	}
	function _o(e, { term: t, exact: n, tolerance: o }) {
		if (o && !n) {
			const s = {};
			return (o = o || 0), Ct(e, t, 0, o || 0, o, s), s;
		} else {
			for (let r = 0; r < t.length; r++) {
				const a = t[r];
				if (a in e.c) {
					const c = e.c[a],
						u = c.s,
						h = t.substring(r),
						f = ho(u, h).length;
					if (f !== u.length && f !== h.length) {
						if (o) break;
						return {};
					}
					(r += c.s.length - 1), (e = c);
				} else return {};
			}
			const s = {};
			return fo(e, s, t, n, o), s;
		}
	}
	function Kr(e, t, n, o = !0) {
		if (!t) return !0;
		for (let s = 0; s < t.length; s++) {
			const r = t[s];
			if (r in e.c) {
				const a = e.c[r];
				(s += a.s.length - 1), (e = a), (o && e.w !== t) || Gr(e, n);
			} else return !1;
		}
		return !0;
	}
	const po = 2,
		qr = 6371e3;
	function Yr() {
		return { root: null };
	}
	function Xr(e, t, n) {
		const o = { point: t, docIDs: n };
		if (e.root == null) {
			e.root = o;
			return;
		}
		let s = e.root,
			r = 0;
		for (; s !== null; ) {
			if (s.point.lon === t.lon && s.point.lat === t.lat) {
				const c = s.docIDs ?? [];
				s.docIDs = Array.from(new Set([...c, ...(n || [])]));
				return;
			}
			if (r % po === 0)
				if (t.lon < s.point.lon) {
					if (s.left == null) {
						s.left = o;
						return;
					}
					s = s.left;
				} else {
					if (s.right == null) {
						s.right = o;
						return;
					}
					s = s.right;
				}
			else if (t.lat < s.point.lat) {
				if (s.left == null) {
					s.left = o;
					return;
				}
				s = s.left;
			} else {
				if (s.right == null) {
					s.right = o;
					return;
				}
				s = s.right;
			}
			r++;
		}
	}
	function Jr(e, t, n) {
		let o = e.root,
			s = 0,
			r = null,
			a = null;
		for (; o !== null; ) {
			if (
				(o == null ? void 0 : o.point.lon) === t.lon &&
				o.point.lat === t.lat
			) {
				var c;
				const m =
					(c = o.docIDs) === null || c === void 0 ? void 0 : c.indexOf(n);
				if (m !== void 0 && m > -1) {
					var u;
					(u = o.docIDs) === null || u === void 0 || u.splice(m, 1),
						(o.docIDs == null || o.docIDs.length === 0) &&
							(r != null
								? a === "left"
									? (r.left = o.left !== null ? o.left : o.right)
									: a === "right" &&
										(r.right = o.right !== null ? o.right : o.left)
								: (e.root = o.left !== null ? o.left : o.right));
					return;
				}
			}
			const h = s % po;
			(r = o),
				h === 0
					? t.lon < o.point.lon
						? ((o = o == null ? void 0 : o.left), (a = "left"))
						: ((o = o == null ? void 0 : o.right), (a = "right"))
					: t.lat < o.point.lat
						? ((o = o == null ? void 0 : o.left), (a = "left"))
						: ((o = o == null ? void 0 : o.right), (a = "right")),
				s++;
		}
	}
	function Qr(e, t, n, o = !0, s = "asc", r = !1) {
		const a = r ? mo : vo,
			c = [{ node: e, depth: 0 }],
			u = [];
		for (; c.length > 0; ) {
			const { node: h, depth: m } = c.pop();
			if (h === null) continue;
			const f = a(t, h.point);
			(o ? f <= n : f > n) &&
				u.push({ point: h.point, docIDs: h.docIDs ?? [] }),
				h.left != null && c.push({ node: h.left, depth: m + 1 }),
				h.right != null && c.push({ node: h.right, depth: m + 1 });
		}
		return (
			s &&
				u.sort((h, m) => {
					const f = a(t, h.point),
						y = a(t, m.point);
					return s.toLowerCase() === "asc" ? f - y : y - f;
				}),
			u
		);
	}
	function ei(e, t, n = !0, o = null, s = !1) {
		const r = [{ node: e, depth: 0 }],
			a = [];
		for (; r.length > 0; ) {
			const u = r.pop();
			if (u == null || u.node == null) continue;
			const { node: h, depth: m } = u,
				f = m + 1;
			h.left != null && r.push({ node: h.left, depth: f }),
				h.right != null && r.push({ node: h.right, depth: f });
			const y = ni(t, h.point);
			y && n
				? a.push({ point: h.point, docIDs: h.docIDs ?? [] })
				: !y && !n && a.push({ point: h.point, docIDs: h.docIDs ?? [] });
		}
		const c = ti(t);
		if (o) {
			const u = s ? mo : vo;
			a.sort((h, m) => {
				const f = u(c, h.point),
					y = u(c, m.point);
				return o.toLowerCase() === "asc" ? f - y : y - f;
			});
		}
		return a;
	}
	function ti(e) {
		let t = 0,
			n = 0,
			o = 0;
		for (let s = 0, r = e.length - 1; s < e.length; r = s++) {
			const a = e[s].lon,
				c = e[s].lat,
				u = e[r].lon,
				h = e[r].lat,
				m = a * h - u * c;
			(t += m), (n += (a + u) * m), (o += (c + h) * m);
		}
		return (t /= 2), (n /= 6 * t), (o /= 6 * t), { lon: n, lat: o };
	}
	function ni(e, t) {
		let n = !1;
		const o = t.lon,
			s = t.lat;
		for (let r = 0, a = e.length - 1; r < e.length; a = r++) {
			const c = e[r].lon,
				u = e[r].lat,
				h = e[a].lon,
				m = e[a].lat;
			u > s != m > s && o < ((h - c) * (s - u)) / (m - u) + c && (n = !n);
		}
		return n;
	}
	function vo(e, t) {
		const n = Math.PI / 180,
			o = e.lat * n,
			s = t.lat * n,
			r = (t.lat - e.lat) * n,
			a = (t.lon - e.lon) * n,
			c =
				Math.sin(r / 2) * Math.sin(r / 2) +
				Math.cos(o) * Math.cos(s) * Math.sin(a / 2) * Math.sin(a / 2),
			u = 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
		return qr * u;
	}
	function mo(e, t) {
		const o = 0.0033528106647474805,
			s = (1 - o) * 6378137,
			r = Math.PI / 180,
			a = e.lat * r,
			c = t.lat * r,
			u = (t.lon - e.lon) * r,
			h = Math.atan((1 - o) * Math.tan(a)),
			m = Math.atan((1 - o) * Math.tan(c)),
			f = Math.sin(h),
			y = Math.cos(h),
			k = Math.sin(m),
			A = Math.cos(m);
		let O = u,
			B,
			R = 1e3,
			W,
			X,
			ie,
			J,
			pe;
		do {
			const je = Math.sin(O),
				gt = Math.cos(O);
			(ie = Math.sqrt(
				A * je * (A * je) + (y * k - f * A * gt) * (y * k - f * A * gt),
			)),
				(J = f * k + y * A * gt),
				(pe = Math.atan2(ie, J)),
				(W = (y * A * je) / ie),
				(X = 1 - W * W);
			const Mt = J - (2 * f * k) / X,
				Oe = (o / 16) * X * (4 + o * (4 - 3 * X));
			(B = O),
				(O =
					u +
					(1 - Oe) *
						o *
						W *
						(pe + Oe * ie * (Mt + Oe * J * (-1 + 2 * Mt * Mt))));
		} while (Math.abs(O - B) > 1e-12 && --R > 0);
		const oe = (X * (6378137 * 6378137 - s * s)) / (s * s),
			ne = 1 + (oe / 16384) * (4096 + oe * (-768 + oe * (320 - 175 * oe))),
			he = (oe / 1024) * (256 + oe * (-128 + oe * (74 - 47 * oe))),
			Ce =
				he *
				ie *
				(J -
					(2 * f * k) / X +
					(he / 4) *
						(J * (-1 + 2 * ie * ie) -
							(he / 6) * pe * (-3 + 4 * ie * ie) * (-3 + 4 * pe * pe)));
		return s * ne * (pe - Ce);
	}
	function oi(e, t) {
		let n = 0;
		for (let o = 0; o < t; o++) n += e[o] * e[o];
		return Math.sqrt(n);
	}
	async function si(e, t, n, o, s) {
		const r = $e(e.sharedInternalDocumentStore, n);
		(e.avgFieldLength[t] =
			((e.avgFieldLength[t] ?? 0) * (s - 1) + o.length) / s),
			(e.fieldLengths[t][r] = o.length),
			(e.frequencies[t][r] = {});
	}
	async function ri(e, t, n, o, s) {
		let r = 0;
		for (const u of o) u === s && r++;
		const a = $e(e.sharedInternalDocumentStore, n),
			c = r / o.length;
		(e.frequencies[t][a][s] = c),
			s in e.tokenOccurrences[t] || (e.tokenOccurrences[t][s] = 0),
			(e.tokenOccurrences[t][s] = (e.tokenOccurrences[t][s] ?? 0) + 1);
	}
	async function ii(e, t, n, o) {
		const s = $e(e.sharedInternalDocumentStore, n);
		(e.avgFieldLength[t] =
			(e.avgFieldLength[t] * o - e.fieldLengths[t][s]) / (o - 1)),
			(e.fieldLengths[t][s] = void 0),
			(e.frequencies[t][s] = void 0);
	}
	async function ai(e, t, n) {
		e.tokenOccurrences[t][n]--;
	}
	async function li(e, t, n, o, s) {
		const r = Array.from(s),
			a = t.avgFieldLength[n],
			c = t.fieldLengths[n],
			u = t.tokenOccurrences[n],
			h = t.frequencies[n],
			m = typeof u[o] == "number" ? (u[o] ?? 0) : 0,
			f = [],
			y = r.length;
		for (let A = 0; A < y; A++) {
			var k;
			const O = $e(t.sharedInternalDocumentStore, r[A]),
				B =
					(h == null || (k = h[O]) === null || k === void 0 ? void 0 : k[o]) ??
					0,
				R = x(B, m, e.docsCount, c[O], a, e.params.relevance);
			f.push([O, R]);
		}
		return f;
	}
	async function go(e, t, n, o, s = "") {
		o ||
			(o = {
				sharedInternalDocumentStore: t,
				indexes: {},
				vectorIndexes: {},
				searchableProperties: [],
				searchablePropertiesWithTypes: {},
				frequencies: {},
				tokenOccurrences: {},
				avgFieldLength: {},
				fieldLengths: {},
			});
		for (const [r, a] of Object.entries(n)) {
			const c = `${s}${s ? "." : ""}${r}`;
			if (typeof a == "object" && !Array.isArray(a)) {
				go(e, t, a, o, c);
				continue;
			}
			if (wt(a))
				o.searchableProperties.push(c),
					(o.searchablePropertiesWithTypes[c] = a),
					(o.vectorIndexes[c] = { size: no(a), vectors: {} });
			else {
				const u = /\[/.test(a);
				switch (a) {
					case "boolean":
					case "boolean[]":
						o.indexes[c] = {
							type: "Bool",
							node: { true: [], false: [] },
							isArray: u,
						};
						break;
					case "number":
					case "number[]":
						o.indexes[c] = { type: "AVL", node: co(0, []), isArray: u };
						break;
					case "string":
					case "string[]":
						(o.indexes[c] = { type: "Radix", node: ft(), isArray: u }),
							(o.avgFieldLength[c] = 0),
							(o.frequencies[c] = {}),
							(o.tokenOccurrences[c] = {}),
							(o.fieldLengths[c] = {});
						break;
					case "enum":
					case "enum[]":
						o.indexes[c] = { type: "Flat", node: Hr(), isArray: u };
						break;
					case "geopoint":
						o.indexes[c] = { type: "BKD", node: Yr(), isArray: u };
						break;
					default:
						throw H("INVALID_SCHEMA_TYPE", Array.isArray(a) ? "array" : a, c);
				}
				o.searchableProperties.push(c),
					(o.searchablePropertiesWithTypes[c] = a);
			}
		}
		return o;
	}
	async function bo(e, t, n, o, s, r, a, c, u) {
		const h = $e(t.sharedInternalDocumentStore, o),
			{ type: m, node: f } = t.indexes[n];
		switch (m) {
			case "Bool": {
				f[s ? "true" : "false"].push(h);
				break;
			}
			case "AVL": {
				Dr(f, s, [h]);
				break;
			}
			case "Radix": {
				const y = await c.tokenize(s, a, n);
				await e.insertDocumentScoreParameters(t, n, h, y, u);
				for (const k of y)
					await e.insertTokenScoreParameters(t, n, h, y, k), Zr(f, k, h);
				break;
			}
			case "Flat": {
				Ur(f, s, h);
				break;
			}
			case "BKD": {
				Xr(f, s, [h]);
				break;
			}
		}
	}
	async function ci(e, t, n, o, s, r, a, c, u) {
		if (wt(r)) return ui(t, n, s, o);
		if (!dn(r)) return bo(e, t, n, o, s, r, a, c, u);
		const h = fn(r),
			m = s,
			f = m.length;
		for (let y = 0; y < f; y++) await bo(e, t, n, o, m[y], h, a, c, u);
	}
	function ui(e, t, n, o) {
		n instanceof Float32Array || (n = new Float32Array(n));
		const s = e.vectorIndexes[t].size,
			r = oi(n, s);
		e.vectorIndexes[t].vectors[o] = [r, n];
	}
	async function yo(e, t, n, o, s, r, a, c, u) {
		const h = $e(t.sharedInternalDocumentStore, o);
		if (wt(r)) return delete t.vectorIndexes[n].vectors[o], !0;
		const { type: m, node: f } = t.indexes[n];
		switch (m) {
			case "AVL":
				return Br(f, h, s), !0;
			case "Bool": {
				const k = f[s ? "true" : "false"].indexOf(h);
				return f[s ? "true" : "false"].splice(k, 1), !0;
			}
			case "Radix": {
				const y = await c.tokenize(s, a, n);
				await e.removeDocumentScoreParameters(t, n, o, u);
				for (const k of y)
					await e.removeTokenScoreParameters(t, n, k), Kr(f, k, h);
				return !0;
			}
			case "Flat":
				return Rr(f, h, s), !0;
			case "BKD":
				return Jr(f, s, h), !1;
		}
	}
	async function di(e, t, n, o, s, r, a, c, u) {
		if (!dn(r)) return yo(e, t, n, o, s, r, a, c, u);
		const h = fn(r),
			m = s,
			f = m.length;
		for (let y = 0; y < f; y++) await yo(e, t, n, o, m[y], h, a, c, u);
		return !0;
	}
	async function fi(e, t, n, o) {
		if (!(n in t.tokenOccurrences)) return [];
		const { node: s, type: r } = t.indexes[n];
		if (r !== "Radix") throw H("WRONG_SEARCH_PROPERTY_TYPE", n);
		const { exact: a, tolerance: c } = e.params,
			u = _o(s, { term: o, exact: a, tolerance: c }),
			h = new Set();
		for (const m in u) for (const f of u[m]) h.add(f);
		return e.index.calculateResultScores(e, t, n, o, Array.from(h));
	}
	async function hi(e, t, n) {
		const o = Object.keys(n),
			s = o.reduce((a, c) => ({ [c]: [], ...a }), {});
		for (const a of o) {
			const c = n[a];
			if (typeof t.indexes[a] > "u") throw H("UNKNOWN_FILTER_PROPERTY", a);
			const { node: u, type: h, isArray: m } = t.indexes[a];
			if (h === "Bool") {
				const k = u[c.toString()];
				D(s[a], k);
				continue;
			}
			if (h === "BKD") {
				let y;
				if ("radius" in c) y = "radius";
				else if ("polygon" in c) y = "polygon";
				else throw new Error(`Invalid operation ${c}`);
				if (y === "radius") {
					const {
							value: k,
							coordinates: A,
							unit: O = "m",
							inside: B = !0,
							highPrecision: R = !1,
						} = c[y],
						W = ke(k, O),
						X = Qr(u.root, A, W, B, void 0, R);
					D(s[a], X.map(({ docIDs: ie }) => ie).flat());
				} else {
					const {
							coordinates: k,
							inside: A = !0,
							highPrecision: O = !1,
						} = c[y],
						B = ei(u.root, k, A, void 0, O);
					D(s[a], B.map(({ docIDs: R }) => R).flat());
				}
				continue;
			}
			if (h === "Radix" && (typeof c == "string" || Array.isArray(c))) {
				for (const y of [c].flat()) {
					const k = await e.tokenizer.tokenize(y, e.language, a);
					for (const A of k) {
						const O = _o(u, { term: A, exact: !0 });
						D(s[a], Object.values(O).flat());
					}
				}
				continue;
			}
			const f = Object.keys(c);
			if (f.length > 1) throw H("INVALID_FILTER_OPERATION", f.length);
			if (h === "Flat") {
				m ? D(s[a], zr(u, c)) : D(s[a], Fr(u, c));
				continue;
			}
			if (h === "AVL") {
				const y = f[0],
					k = c[y];
				let A = [];
				switch (y) {
					case "gt": {
						A = io(u, k, !1);
						break;
					}
					case "gte": {
						A = io(u, k, !0);
						break;
					}
					case "lt": {
						A = ao(u, k, !1);
						break;
					}
					case "lte": {
						A = ao(u, k, !0);
						break;
					}
					case "eq": {
						A = xr(u, k) ?? [];
						break;
					}
					case "between": {
						const [O, B] = k;
						A = Or(u, O, B);
						break;
					}
				}
				D(s[a], A);
			}
		}
		return te(Object.values(s));
	}
	async function _i(e) {
		return e.searchableProperties;
	}
	async function pi(e) {
		return e.searchablePropertiesWithTypes;
	}
	function ko(e) {
		const t = ft(e.e, e.s, e.k);
		(t.d = e.d), (t.w = e.w);
		for (const n of Object.keys(e.c)) t.c[n] = ko(e.c[n]);
		return t;
	}
	function vi(e) {
		return { numberToDocumentId: new Map(e) };
	}
	function mi(e) {
		return Array.from(e.numberToDocumentId.entries());
	}
	async function gi(e, t) {
		const {
				indexes: n,
				vectorIndexes: o,
				searchableProperties: s,
				searchablePropertiesWithTypes: r,
				frequencies: a,
				tokenOccurrences: c,
				avgFieldLength: u,
				fieldLengths: h,
			} = t,
			m = {},
			f = {};
		for (const y of Object.keys(n)) {
			const { node: k, type: A, isArray: O } = n[y];
			switch (A) {
				case "Radix":
					m[y] = { type: "Radix", node: ko(k), isArray: O };
					break;
				case "Flat":
					m[y] = { type: "Flat", node: vi(k), isArray: O };
					break;
				default:
					m[y] = n[y];
			}
		}
		for (const y of Object.keys(o)) {
			const k = o[y].vectors;
			for (const A in k) k[A] = [k[A][0], new Float32Array(k[A][1])];
			f[y] = { size: o[y].size, vectors: k };
		}
		return {
			sharedInternalDocumentStore: e,
			indexes: m,
			vectorIndexes: f,
			searchableProperties: s,
			searchablePropertiesWithTypes: r,
			frequencies: a,
			tokenOccurrences: c,
			avgFieldLength: u,
			fieldLengths: h,
		};
	}
	async function bi(e) {
		const {
				indexes: t,
				vectorIndexes: n,
				searchableProperties: o,
				searchablePropertiesWithTypes: s,
				frequencies: r,
				tokenOccurrences: a,
				avgFieldLength: c,
				fieldLengths: u,
			} = e,
			h = {};
		for (const f of Object.keys(n)) {
			const y = n[f].vectors;
			for (const k in y) y[k] = [y[k][0], Array.from(y[k][1])];
			h[f] = { size: n[f].size, vectors: y };
		}
		const m = {};
		for (const f of Object.keys(t)) {
			const { type: y, node: k, isArray: A } = t[f];
			if (y !== "Flat") {
				m[f] = t[f];
				continue;
			}
			m[f] = { type: "Flat", node: mi(k), isArray: A };
		}
		return {
			indexes: m,
			vectorIndexes: h,
			searchableProperties: o,
			searchablePropertiesWithTypes: s,
			frequencies: r,
			tokenOccurrences: a,
			avgFieldLength: c,
			fieldLengths: u,
		};
	}
	async function yi() {
		return {
			create: go,
			insert: ci,
			remove: di,
			insertDocumentScoreParameters: si,
			insertTokenScoreParameters: ri,
			removeDocumentScoreParameters: ii,
			removeTokenScoreParameters: ai,
			calculateResultScores: li,
			search: fi,
			searchByWhereClause: hi,
			getSearchableProperties: _i,
			getSearchablePropertiesWithTypes: pi,
			load: gi,
			save: bi,
		};
	}
	function wo(e, t, n, o, s) {
		const r = {
			language: e.tokenizer.language,
			sharedInternalDocumentStore: t,
			enabled: !0,
			isSorted: !0,
			sortableProperties: [],
			sortablePropertiesWithTypes: {},
			sorts: {},
		};
		for (const [a, c] of Object.entries(n)) {
			const u = `${s}${s ? "." : ""}${a}`;
			if (!o.includes(u)) {
				if (typeof c == "object" && !Array.isArray(c)) {
					const h = wo(e, t, c, o, u);
					D(r.sortableProperties, h.sortableProperties),
						(r.sorts = { ...r.sorts, ...h.sorts }),
						(r.sortablePropertiesWithTypes = {
							...r.sortablePropertiesWithTypes,
							...h.sortablePropertiesWithTypes,
						});
					continue;
				}
				if (!wt(c))
					switch (c) {
						case "boolean":
						case "number":
						case "string":
							r.sortableProperties.push(u),
								(r.sortablePropertiesWithTypes[u] = c),
								(r.sorts[u] = {
									docs: new Map(),
									orderedDocsToRemove: new Map(),
									orderedDocs: [],
									type: c,
								});
							break;
						case "geopoint":
						case "enum":
							continue;
						case "enum[]":
						case "boolean[]":
						case "number[]":
						case "string[]":
							continue;
						default:
							throw H(
								"INVALID_SORT_SCHEMA_TYPE",
								Array.isArray(c) ? "array" : c,
								u,
							);
					}
			}
		}
		return r;
	}
	async function ki(e, t, n, o) {
		return (o == null ? void 0 : o.enabled) !== !1
			? wo(e, t, n, (o || {}).unsortableProperties || [], "")
			: { disabled: !0 };
	}
	async function wi(e, t, n, o) {
		if (!e.enabled) return;
		e.isSorted = !1;
		const s = $e(e.sharedInternalDocumentStore, n),
			r = e.sorts[t];
		r.docs.set(s, r.orderedDocs.length), r.orderedDocs.push([s, o]);
	}
	function Co(e) {
		if (e.isSorted || !e.enabled) return;
		const t = Object.keys(e.sorts);
		for (const n of t) $i(e, n);
		e.isSorted = !0;
	}
	function Ci(e, t, n) {
		return t[1].localeCompare(n[1], e);
	}
	function Si(e, t) {
		return e[1] - t[1];
	}
	function Li(e, t) {
		return t[1] ? -1 : 1;
	}
	function $i(e, t) {
		const n = e.sorts[t];
		let o;
		switch (n.type) {
			case "string":
				o = Ci.bind(null, e.language);
				break;
			case "number":
				o = Si.bind(null);
				break;
			case "boolean":
				o = Li.bind(null);
				break;
		}
		n.orderedDocs.sort(o);
		const s = n.orderedDocs.length;
		for (let r = 0; r < s; r++) {
			const a = n.orderedDocs[r][0];
			n.docs.set(a, r);
		}
	}
	function Ii(e) {
		const t = Object.keys(e.sorts);
		for (const n of t) So(e, n);
	}
	function So(e, t) {
		const n = e.sorts[t];
		n.orderedDocsToRemove.size &&
			((n.orderedDocs = n.orderedDocs.filter(
				(o) => !n.orderedDocsToRemove.has(o[0]),
			)),
			n.orderedDocsToRemove.clear());
	}
	async function Ti(e, t, n) {
		if (!e.enabled) return;
		const o = e.sorts[t],
			s = $e(e.sharedInternalDocumentStore, n);
		o.docs.get(s) && (o.docs.delete(s), o.orderedDocsToRemove.set(s, !0));
	}
	async function Pi(e, t, n) {
		if (!e.enabled) throw H("SORT_DISABLED");
		const o = n.property,
			s = n.order === "DESC",
			r = e.sorts[o];
		if (!r)
			throw H(
				"UNABLE_TO_SORT_ON_UNKNOWN_FIELD",
				o,
				e.sortableProperties.join(", "),
			);
		return (
			So(e, o),
			Co(e),
			t.sort((a, c) => {
				const u = r.docs.get($e(e.sharedInternalDocumentStore, a[0])),
					h = r.docs.get($e(e.sharedInternalDocumentStore, c[0])),
					m = typeof u < "u",
					f = typeof h < "u";
				return !m && !f ? 0 : m ? (f ? (s ? h - u : u - h) : -1) : 1;
			}),
			t
		);
	}
	async function Ai(e) {
		return e.enabled ? e.sortableProperties : [];
	}
	async function Ei(e) {
		return e.enabled ? e.sortablePropertiesWithTypes : {};
	}
	async function Mi(e, t) {
		const n = t;
		if (!n.enabled) return { enabled: !1 };
		const o = Object.keys(n.sorts).reduce((s, r) => {
			const { docs: a, orderedDocs: c, type: u } = n.sorts[r];
			return (
				(s[r] = {
					docs: new Map(Object.entries(a).map(([h, m]) => [+h, m])),
					orderedDocsToRemove: new Map(),
					orderedDocs: c,
					type: u,
				}),
				s
			);
		}, {});
		return {
			sharedInternalDocumentStore: e,
			language: n.language,
			sortableProperties: n.sortableProperties,
			sortablePropertiesWithTypes: n.sortablePropertiesWithTypes,
			sorts: o,
			enabled: !0,
			isSorted: n.isSorted,
		};
	}
	async function Oi(e) {
		if (!e.enabled) return { enabled: !1 };
		Ii(e), Co(e);
		const t = Object.keys(e.sorts).reduce((n, o) => {
			const { docs: s, orderedDocs: r, type: a } = e.sorts[o];
			return (
				(n[o] = {
					docs: Object.fromEntries(s.entries()),
					orderedDocs: r,
					type: a,
				}),
				n
			);
		}, {});
		return {
			language: e.language,
			sortableProperties: e.sortableProperties,
			sortablePropertiesWithTypes: e.sortablePropertiesWithTypes,
			sorts: t,
			enabled: e.enabled,
			isSorted: e.isSorted,
		};
	}
	async function Di() {
		return {
			create: ki,
			insert: wi,
			remove: Ti,
			save: Oi,
			load: Mi,
			sortBy: Pi,
			getSortableProperties: Ai,
			getSortablePropertiesWithTypes: Ei,
		};
	}
	const Lo = 192,
		Ni = 383,
		xi = [
			65,
			65,
			65,
			65,
			65,
			65,
			65,
			67,
			69,
			69,
			69,
			69,
			73,
			73,
			73,
			73,
			69,
			78,
			79,
			79,
			79,
			79,
			79,
			null,
			79,
			85,
			85,
			85,
			85,
			89,
			80,
			115,
			97,
			97,
			97,
			97,
			97,
			97,
			97,
			99,
			101,
			101,
			101,
			101,
			105,
			105,
			105,
			105,
			101,
			110,
			111,
			111,
			111,
			111,
			111,
			null,
			111,
			117,
			117,
			117,
			117,
			121,
			112,
			121,
			65,
			97,
			65,
			97,
			65,
			97,
			67,
			99,
			67,
			99,
			67,
			99,
			67,
			99,
			68,
			100,
			68,
			100,
			69,
			101,
			69,
			101,
			69,
			101,
			69,
			101,
			69,
			101,
			71,
			103,
			71,
			103,
			71,
			103,
			71,
			103,
			72,
			104,
			72,
			104,
			73,
			105,
			73,
			105,
			73,
			105,
			73,
			105,
			73,
			105,
			73,
			105,
			74,
			106,
			75,
			107,
			107,
			76,
			108,
			76,
			108,
			76,
			108,
			76,
			108,
			76,
			108,
			78,
			110,
			78,
			110,
			78,
			110,
			110,
			78,
			110,
			79,
			111,
			79,
			111,
			79,
			111,
			79,
			111,
			82,
			114,
			82,
			114,
			82,
			114,
			83,
			115,
			83,
			115,
			83,
			115,
			83,
			115,
			84,
			116,
			84,
			116,
			84,
			116,
			85,
			117,
			85,
			117,
			85,
			117,
			85,
			117,
			85,
			117,
			85,
			117,
			87,
			119,
			89,
			121,
			89,
			90,
			122,
			90,
			122,
			90,
			122,
			115,
		];
	function Vi(e) {
		return e < Lo || e > Ni ? e : xi[e - Lo] || e;
	}
	function Bi(e) {
		const t = [];
		for (let n = 0; n < e.length; n++) t[n] = Vi(e.charCodeAt(n));
		return String.fromCharCode(...t);
	}
	const Hi = {
			ational: "ate",
			tional: "tion",
			enci: "ence",
			anci: "ance",
			izer: "ize",
			bli: "ble",
			alli: "al",
			entli: "ent",
			eli: "e",
			ousli: "ous",
			ization: "ize",
			ation: "ate",
			ator: "ate",
			alism: "al",
			iveness: "ive",
			fulness: "ful",
			ousness: "ous",
			aliti: "al",
			iviti: "ive",
			biliti: "ble",
			logi: "log",
		},
		Ui = {
			icate: "ic",
			ative: "",
			alize: "al",
			iciti: "ic",
			ical: "ic",
			ful: "",
			ness: "",
		},
		Ri = "[^aeiou]",
		xt = "[aeiouy]",
		Fe = Ri + "[^aeiouy]*",
		St = xt + "[aeiou]*",
		hn = "^(" + Fe + ")?" + St + Fe,
		Fi = "^(" + Fe + ")?" + St + Fe + "(" + St + ")?$",
		Vt = "^(" + Fe + ")?" + St + Fe + St + Fe,
		$o = "^(" + Fe + ")?" + xt;
	function zi(e) {
		let t, n, o, s, r, a;
		if (e.length < 3) return e;
		const c = e.substring(0, 1);
		if (
			(c == "y" && (e = c.toUpperCase() + e.substring(1)),
			(o = /^(.+?)(ss|i)es$/),
			(s = /^(.+?)([^s])s$/),
			o.test(e)
				? (e = e.replace(o, "$1$2"))
				: s.test(e) && (e = e.replace(s, "$1$2")),
			(o = /^(.+?)eed$/),
			(s = /^(.+?)(ed|ing)$/),
			o.test(e))
		) {
			const u = o.exec(e);
			(o = new RegExp(hn)),
				o.test(u[1]) && ((o = /.$/), (e = e.replace(o, "")));
		} else
			s.test(e) &&
				((t = s.exec(e)[1]),
				(s = new RegExp($o)),
				s.test(t) &&
					((e = t),
					(s = /(at|bl|iz)$/),
					(r = new RegExp("([^aeiouylsz])\\1$")),
					(a = new RegExp("^" + Fe + xt + "[^aeiouwxy]$")),
					s.test(e)
						? (e = e + "e")
						: r.test(e)
							? ((o = /.$/), (e = e.replace(o, "")))
							: a.test(e) && (e = e + "e")));
		if (((o = /^(.+?)y$/), o.test(e))) {
			const u = o.exec(e);
			(t = u == null ? void 0 : u[1]),
				(o = new RegExp($o)),
				t && o.test(t) && (e = t + "i");
		}
		if (
			((o =
				/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/),
			o.test(e))
		) {
			const u = o.exec(e);
			(t = u == null ? void 0 : u[1]),
				(n = u == null ? void 0 : u[2]),
				(o = new RegExp(hn)),
				t && o.test(t) && (e = t + Hi[n]);
		}
		if (((o = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/), o.test(e))) {
			const u = o.exec(e);
			(t = u == null ? void 0 : u[1]),
				(n = u == null ? void 0 : u[2]),
				(o = new RegExp(hn)),
				t && o.test(t) && (e = t + Ui[n]);
		}
		if (
			((o =
				/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/),
			(s = /^(.+?)(s|t)(ion)$/),
			o.test(e))
		) {
			const u = o.exec(e);
			(t = u == null ? void 0 : u[1]),
				(o = new RegExp(Vt)),
				t && o.test(t) && (e = t);
		} else if (s.test(e)) {
			const u = s.exec(e);
			(t =
				(u == null ? void 0 : u[1]) ?? "" + (u == null ? void 0 : u[2]) ?? ""),
				(s = new RegExp(Vt)),
				s.test(t) && (e = t);
		}
		if (((o = /^(.+?)e$/), o.test(e))) {
			const u = o.exec(e);
			(t = u == null ? void 0 : u[1]),
				(o = new RegExp(Vt)),
				(s = new RegExp(Fi)),
				(r = new RegExp("^" + Fe + xt + "[^aeiouwxy]$")),
				t && (o.test(t) || (s.test(t) && !r.test(t))) && (e = t);
		}
		return (
			(o = /ll$/),
			(s = new RegExp(Vt)),
			o.test(e) && s.test(e) && ((o = /.$/), (e = e.replace(o, ""))),
			c == "y" && (e = c.toLowerCase() + e.substring(1)),
			e
		);
	}
	function Io(e, t) {
		var n;
		const o = `${this.language}:${e}:${t}`;
		return this.normalizationCache.has(o)
			? this.normalizationCache.get(o)
			: !((n = this.stopWords) === null || n === void 0) && n.includes(t)
				? (this.normalizationCache.set(o, ""), "")
				: (this.stemmer &&
						!this.stemmerSkipProperties.has(e) &&
						(t = this.stemmer(t)),
					(t = Bi(t)),
					this.normalizationCache.set(o, t),
					t);
	}
	function ji(e) {
		for (; e[e.length - 1] === ""; ) e.pop();
		for (; e[0] === ""; ) e.shift();
		return e;
	}
	function To(e, t, n) {
		if (t && t !== this.language) throw H("LANGUAGE_NOT_SUPPORTED", t);
		if (typeof e != "string") return [e];
		let o;
		if (n && this.tokenizeSkipProperties.has(n))
			o = [this.normalizeToken.bind(this, n ?? "")(e)];
		else {
			const r = i[this.language];
			o = e
				.toLowerCase()
				.split(r)
				.map(this.normalizeToken.bind(this, n ?? ""))
				.filter(Boolean);
		}
		const s = ji(o);
		return this.allowDuplicates ? s : Array.from(new Set(s));
	}
	async function Po(e = {}) {
		if (!e.language) e.language = "english";
		else if (!l.includes(e.language))
			throw H("LANGUAGE_NOT_SUPPORTED", e.language);
		let t;
		if (e.stemming || (e.stemmer && !("stemming" in e)))
			if (e.stemmer) {
				if (typeof e.stemmer != "function")
					throw H("INVALID_STEMMER_FUNCTION_TYPE");
				t = e.stemmer;
			} else if (e.language === "english") t = zi;
			else throw H("MISSING_STEMMER", e.language);
		let n;
		if (e.stopWords !== !1) {
			if (((n = []), Array.isArray(e.stopWords))) n = e.stopWords;
			else if (typeof e.stopWords == "function") n = await e.stopWords(n);
			else if (e.stopWords)
				throw H("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");
			if (!Array.isArray(n))
				throw H("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");
			for (const s of n)
				if (typeof s != "string")
					throw H("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");
		}
		const o = {
			tokenize: To,
			language: e.language,
			stemmer: t,
			stemmerSkipProperties: new Set(
				e.stemmerSkipProperties ? [e.stemmerSkipProperties].flat() : [],
			),
			tokenizeSkipProperties: new Set(
				e.tokenizeSkipProperties ? [e.tokenizeSkipProperties].flat() : [],
			),
			stopWords: n,
			allowDuplicates: !!e.allowDuplicates,
			normalizeToken: Io,
			normalizationCache: new Map(),
		};
		return (o.tokenize = To.bind(o)), (o.normalizeToken = Io), o;
	}
	function Wi(e) {
		const t = {
			formatElapsedTime: mr,
			getDocumentIndexId: gr,
			getDocumentProperties: re,
			validateSchema: to,
		};
		for (const n of eo) {
			const o = n;
			if (e[o]) {
				if (typeof e[o] != "function") throw H("COMPONENT_MUST_BE_FUNCTION", o);
			} else e[o] = t[o];
		}
		for (const n of Object.keys(e))
			if (!cr.includes(n) && !eo.includes(n))
				throw H("UNSUPPORTED_COMPONENT", n);
	}
	async function Gi({
		schema: e,
		sort: t,
		language: n,
		components: o,
		id: s,
		plugins: r,
	}) {
		o || (o = {}), s || (s = await le());
		let a = o.tokenizer,
			c = o.index,
			u = o.documentsStore,
			h = o.sorter;
		if (
			(a
				? a.tokenize
					? (a = a)
					: (a = await Po(a))
				: (a = await Po({ language: n ?? "english" })),
			o.tokenizer && n)
		)
			throw H("NO_LANGUAGE_WITH_CUSTOM_TOKENIZER");
		const m = we();
		c || (c = await yi()), h || (h = await Di()), u || (u = await Ar()), Wi(o);
		const {
				getDocumentProperties: f,
				getDocumentIndexId: y,
				validateSchema: k,
				formatElapsedTime: A,
			} = o,
			O = {
				data: {},
				caches: {},
				schema: e,
				tokenizer: a,
				index: c,
				sorter: h,
				documentsStore: u,
				internalDocumentIDStore: m,
				getDocumentProperties: f,
				getDocumentIndexId: y,
				validateSchema: k,
				beforeInsert: [],
				afterInsert: [],
				beforeRemove: [],
				afterRemove: [],
				beforeUpdate: [],
				afterUpdate: [],
				beforeSearch: [],
				afterSearch: [],
				beforeInsertMultiple: [],
				afterInsertMultiple: [],
				beforeRemoveMultiple: [],
				afterRemoveMultiple: [],
				afterUpdateMultiple: [],
				beforeUpdateMultiple: [],
				formatElapsedTime: A,
				id: s,
				plugins: r,
			};
		O.data = {
			index: await O.index.create(O, m, e),
			docs: await O.documentsStore.create(O, m),
			sorting: await O.sorter.create(O, m, e, t),
		};
		for (const B of Er) O[B] = (O[B] ?? []).concat(Mr(O, B));
		return O;
	}
	async function Zi(e, t) {
		e.internalDocumentIDStore.load(e, t.internalDocumentIDStore),
			(e.data.index = await e.index.load(e.internalDocumentIDStore, t.index)),
			(e.data.docs = await e.documentsStore.load(
				e.internalDocumentIDStore,
				t.docs,
			)),
			(e.data.sorting = await e.sorter.load(
				e.internalDocumentIDStore,
				t.sorting,
			)),
			(e.tokenizer.language = t.language);
	}
	Date.now().toString().slice(5);
	const Ao = BigInt(1e3),
		Eo = BigInt(1e6),
		Mo = BigInt(1e9);
	async function Ki(e) {
		return (
			typeof e == "number" && (e = BigInt(e)),
			e < Ao
				? `${e}ns`
				: e < Eo
					? `${e / Ao}μs`
					: e < Mo
						? `${e / Eo}ms`
						: `${e / Mo}s`
		);
	}
	async function qi(e) {
		return { raw: Number(e), formatted: await Ki(e) };
	}
	var Yi = st(472),
		Xi = class {
			constructor(e) {
				ye(this, "cache");
				ye(this, "config");
				(this.cache = new Map()), (this.config = e);
			}
			set(e, t) {
				this.cache.set(e, t);
			}
			get(e) {
				return this.cache.get(e);
			}
			has(e) {
				return this.cache.has(e);
			}
			delete(e) {
				return this.cache.delete(e);
			}
			clear() {
				this.cache.clear();
			}
			size() {
				return this.cache.size;
			}
		},
		Oo = "1.0.0-beta.20",
		Ji = {
			name: "@oramacloud/client",
			version: Oo,
			description: "Orama SDK for Node.js, Deno, and Browsers",
			type: "module",
			sideEffects: !1,
			main: "./dist/index.cjs",
			module: "./dist/index.js",
			types: "./dist/index.d.ts",
			runkitExampleFilename: "./example/runkit.js",
			exports: {
				".": {
					require: "./dist/index.cjs",
					import: "./dist/index.js",
					types: "./dist/index.d.ts",
					browser: "./dist/index.global.js",
				},
				"./react": {
					require: "./dist/react/index.cjs",
					import: "./dist/react/index.js",
					types: "./dist/react/index.d.ts",
				},
				"./vue": {
					require: "./dist/vue/index.cjs",
					import: "./dist/vue/index.js",
					types: "./dist/vue/index.d.ts",
				},
			},
			scripts: {
				lint: "ts-standard --fix",
				build: "npm run build:lib && npm run build:react",
				"build:lib": "tsup --config tsup.lib.js",
				"build:react": "tsup --config tsup.react.js",
				"build:vue": "tsup --config tsup.vue.js",
				test: "tsx tests/index.test.ts",
				"serve:example":
					"esbuild src/index.ts --bundle --outfile=example/out.js --format=esm --watch --servedir=example",
				prepare: "husky install",
			},
			keywords: ["orama", "search engine", "sdk"],
			files: ["dist", "example/runkit.js"],
			author: {
				name: "Michele Riva",
				email: "michele.riva@oramasearch.com",
				url: "https://github.com/MicheleRiva",
			},
			license: "ISC",
			dependencies: {
				"@orama/orama": "^1.0.10",
				"@paralleldrive/cuid2": "^2.2.1",
				react: "^18.2.0",
				vue: "^3.3.4",
			},
			devDependencies: {
				"@fastify/formbody": "^7.4.0",
				"@types/node": "^20.3.1",
				"@types/react": "^18.2.14",
				esbuild: "0.18.5",
				fastify: "^4.19.2",
				husky: "^8.0.3",
				"ts-standard": "^12.0.2",
				tsup: "^7.1.0",
				tsx: "^3.12.7",
				typescript: "^5.1.3",
			},
			"ts-standard": { ignore: ["dist", "node_modules"] },
		};
	function Do(e, t) {
		if (typeof navigator < "u") {
			navigator.sendBeacon(e, t);
			return;
		}
		fetch(e, {
			method: "POST",
			body: t,
			headers: { "Content-Type": "application/json" },
		}).then(
			() => {},
			(n) => console.log(n),
		);
	}
	var Qi = class sr {
			constructor(t) {
				ye(this, "data");
				ye(this, "params");
				ye(this, "config");
				(this.data = []), (this.config = t);
			}
			setParams(t) {
				this.params = t;
			}
			static create(t) {
				let n = new sr(t);
				return n.start(), n;
			}
			add(t) {
				this.data.push({
					rawSearchString: t.rawSearchString,
					query: t.query,
					resultsCount: t.resultsCount,
					roundTripTime: t.roundTripTime,
					searchedAt: t.searchedAt,
					referer: typeof location < "u" ? location.toString() : void 0,
				}),
					this.params != null &&
						this.data.length >= this.config.flushSize &&
						this.flush();
			}
			flush() {
				if (this.params == null || this.data.length === 0) return;
				let t = this.data;
				this.data = [];
				let n = {
					source: "fe",
					deploymentID: this.params.deploymentID,
					index: this.params.index,
					oramaId: this.config.id,
					oramaVersion: Ji.version,
					userAgent: typeof navigator < "u" ? navigator.userAgent : void 0,
					events: t,
				};
				Do(
					this.params.endpoint + `?api-key=${this.config.api_key}`,
					JSON.stringify(n),
				);
			}
			start() {
				let t = setInterval(this.flush.bind(this), this.config.flushInterval);
				t.unref != null && t.unref();
			}
		},
		ea = class {
			constructor(e) {
				ye(this, "intervalId");
				this.params = e;
			}
			start() {
				this.stop(),
					(this.intervalId = setInterval(
						this.beat.bind(this),
						this.params.frequency,
					));
			}
			stop() {
				this.intervalId !== void 0 && clearInterval(this.intervalId);
			}
			beat() {
				Do(this.params.endpoint);
			}
		},
		ta = class {
			constructor(e) {
				ye(this, "id", (0, Yi.Mc)());
				ye(this, "api_key");
				ye(this, "endpoint");
				ye(this, "collector");
				ye(this, "cache");
				ye(this, "heartbeat");
				ye(this, "initPromise");
				var t, n;
				if (
					((this.api_key = e.api_key),
					(this.endpoint = e.endpoint),
					e.telemetry !== !1)
				) {
					let o = {
						id: this.id,
						api_key: this.api_key,
						flushInterval:
							((t = e.telemetry) == null ? void 0 : t.flushInterval) ?? 5e3,
						flushSize: ((n = e.telemetry) == null ? void 0 : n.flushSize) ?? 25,
					};
					this.collector = Qi.create(o);
				}
				if (e.cache !== !1) {
					let o = {};
					this.cache = new Xi(o);
				}
				this.init();
			}
			async search(e, t) {
				var a, c;
				await this.initPromise;
				let n = JSON.stringify(e),
					o,
					s,
					r = !1;
				if (
					((t == null ? void 0 : t.fresh) !== !0 &&
						((a = this.cache) == null ? void 0 : a.has(n))) === !0 &&
					this.cache != null
				)
					(o = 0), (s = this.cache.get(n)), (r = !0);
				else {
					let u = Date.now();
					s = await this.fetch(
						"search",
						"POST",
						{ q: e },
						t == null ? void 0 : t.abortController,
					);
					let h = Date.now();
					(s.elapsed = await qi(BigInt(h * 1e6 - u * 1e6))),
						(o = h - u),
						(c = this.cache) == null || c.set(n, s);
				}
				return (
					this.collector != null &&
						this.collector.add({
							rawSearchString: e.term,
							resultsCount: s.hits.length,
							roundTripTime: o,
							query: e,
							cached: r,
							searchedAt: new Date(),
						}),
					s
				);
			}
			startHeartBeat(e) {
				var t;
				(t = this.heartbeat) == null || t.stop(),
					(this.heartbeat = new ea({
						...e,
						endpoint: this.endpoint + `/health?api-key=${this.api_key}`,
					})),
					this.heartbeat.start();
			}
			stopHeartBeat() {
				var e;
				(e = this.heartbeat) == null || e.stop();
			}
			getPop() {
				return this.initPromise.then((e) => (e == null ? "" : e.pop));
			}
			init() {
				this.initPromise = this.fetch("init", "GET")
					.then((e) => {
						var t;
						return (
							(t = this.collector) == null ||
								t.setParams({
									endpoint: e.collectUrl,
									deploymentID: e.deploymentID,
									index: e.index,
								}),
							e
						);
					})
					.catch((e) => console.log(e));
			}
			async fetch(e, t, n, o) {
				if ((o == null ? void 0 : o.signal.aborted) === !0)
					throw new Error("Request aborted");
				let s = {
					method: t,
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
					signal: o == null ? void 0 : o.signal,
				};
				if (t === "POST" && n !== void 0) {
					let r = n;
					(r.version = Oo),
						(r.id = this.id),
						(s.body = Object.entries(r)
							.map(([a, c]) => `${a}=${encodeURIComponent(JSON.stringify(c))}`)
							.join("&"));
				}
				return await (
					await fetch(`${this.endpoint}/${e}?api-key=${this.api_key}`, s)
				).json();
			}
		};
	function Bt() {
		throw new Error("Cycle detected");
	}
	var na = Symbol.for("preact-signals");
	function Ht() {
		if (Qe > 1) Qe--;
		else {
			for (var e, t = !1; Lt !== void 0; ) {
				var n = Lt;
				for (Lt = void 0, _n++; n !== void 0; ) {
					var o = n.o;
					if (((n.o = void 0), (n.f &= -3), !(8 & n.f) && xo(n)))
						try {
							n.c();
						} catch (s) {
							t || ((e = s), (t = !0));
						}
					n = o;
				}
			}
			if (((_n = 0), Qe--, t)) throw e;
		}
	}
	function oa(e) {
		if (Qe > 0) return e();
		Qe++;
		try {
			return e();
		} finally {
			Ht();
		}
	}
	var be = void 0,
		Lt = void 0,
		Qe = 0,
		_n = 0,
		Ut = 0;
	function No(e) {
		if (be !== void 0) {
			var t = e.n;
			if (t === void 0 || t.t !== be)
				return (
					(t = {
						i: 0,
						S: e,
						p: be.s,
						n: void 0,
						t: be,
						e: void 0,
						x: void 0,
						r: t,
					}),
					be.s !== void 0 && (be.s.n = t),
					(be.s = t),
					(e.n = t),
					32 & be.f && e.S(t),
					t
				);
			if (t.i === -1)
				return (
					(t.i = 0),
					t.n !== void 0 &&
						((t.n.p = t.p),
						t.p !== void 0 && (t.p.n = t.n),
						(t.p = be.s),
						(t.n = void 0),
						(be.s.n = t),
						(be.s = t)),
					t
				);
		}
	}
	function Te(e) {
		(this.v = e), (this.i = 0), (this.n = void 0), (this.t = void 0);
	}
	(Te.prototype.brand = na),
		(Te.prototype.h = function () {
			return !0;
		}),
		(Te.prototype.S = function (e) {
			this.t !== e &&
				e.e === void 0 &&
				((e.x = this.t), this.t !== void 0 && (this.t.e = e), (this.t = e));
		}),
		(Te.prototype.U = function (e) {
			if (this.t !== void 0) {
				var t = e.e,
					n = e.x;
				t !== void 0 && ((t.x = n), (e.e = void 0)),
					n !== void 0 && ((n.e = t), (e.x = void 0)),
					e === this.t && (this.t = n);
			}
		}),
		(Te.prototype.subscribe = function (e) {
			var t = this;
			return Rt(function () {
				var n = t.value,
					o = 32 & this.f;
				this.f &= -33;
				try {
					e(n);
				} finally {
					this.f |= o;
				}
			});
		}),
		(Te.prototype.valueOf = function () {
			return this.value;
		}),
		(Te.prototype.toString = function () {
			return this.value + "";
		}),
		(Te.prototype.toJSON = function () {
			return this.value;
		}),
		(Te.prototype.peek = function () {
			return this.v;
		}),
		Object.defineProperty(Te.prototype, "value", {
			get: function () {
				var e = No(this);
				return e !== void 0 && (e.i = this.i), this.v;
			},
			set: function (e) {
				if (
					(be instanceof et &&
						(function () {
							throw new Error("Computed cannot have side-effects");
						})(),
					e !== this.v)
				) {
					_n > 100 && Bt(), (this.v = e), this.i++, Ut++, Qe++;
					try {
						for (var t = this.t; t !== void 0; t = t.x) t.t.N();
					} finally {
						Ht();
					}
				}
			},
		});
	function Pe(e) {
		return new Te(e);
	}
	function xo(e) {
		for (var t = e.s; t !== void 0; t = t.n)
			if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
		return !1;
	}
	function Vo(e) {
		for (var t = e.s; t !== void 0; t = t.n) {
			var n = t.S.n;
			if (
				(n !== void 0 && (t.r = n), (t.S.n = t), (t.i = -1), t.n === void 0)
			) {
				e.s = t;
				break;
			}
		}
	}
	function Bo(e) {
		for (var t = e.s, n = void 0; t !== void 0; ) {
			var o = t.p;
			t.i === -1
				? (t.S.U(t), o !== void 0 && (o.n = t.n), t.n !== void 0 && (t.n.p = o))
				: (n = t),
				(t.S.n = t.r),
				t.r !== void 0 && (t.r = void 0),
				(t = o);
		}
		e.s = n;
	}
	function et(e) {
		Te.call(this, void 0),
			(this.x = e),
			(this.s = void 0),
			(this.g = Ut - 1),
			(this.f = 4);
	}
	((et.prototype = new Te()).h = function () {
		if (((this.f &= -3), 1 & this.f)) return !1;
		if ((36 & this.f) == 32 || ((this.f &= -5), this.g === Ut)) return !0;
		if (((this.g = Ut), (this.f |= 1), this.i > 0 && !xo(this)))
			return (this.f &= -2), !0;
		var e = be;
		try {
			Vo(this), (be = this);
			var t = this.x();
			(16 & this.f || this.v !== t || this.i === 0) &&
				((this.v = t), (this.f &= -17), this.i++);
		} catch (n) {
			(this.v = n), (this.f |= 16), this.i++;
		}
		return (be = e), Bo(this), (this.f &= -2), !0;
	}),
		(et.prototype.S = function (e) {
			if (this.t === void 0) {
				this.f |= 36;
				for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
			}
			Te.prototype.S.call(this, e);
		}),
		(et.prototype.U = function (e) {
			if (
				this.t !== void 0 &&
				(Te.prototype.U.call(this, e), this.t === void 0)
			) {
				this.f &= -33;
				for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
			}
		}),
		(et.prototype.N = function () {
			if (!(2 & this.f)) {
				this.f |= 6;
				for (var e = this.t; e !== void 0; e = e.x) e.t.N();
			}
		}),
		(et.prototype.peek = function () {
			if ((this.h() || Bt(), 16 & this.f)) throw this.v;
			return this.v;
		}),
		Object.defineProperty(et.prototype, "value", {
			get: function () {
				1 & this.f && Bt();
				var e = No(this);
				if ((this.h(), e !== void 0 && (e.i = this.i), 16 & this.f))
					throw this.v;
				return this.v;
			},
		});
	function Ho(e) {
		return new et(e);
	}
	function Uo(e) {
		var t = e.u;
		if (((e.u = void 0), typeof t == "function")) {
			Qe++;
			var n = be;
			be = void 0;
			try {
				t();
			} catch (o) {
				throw ((e.f &= -2), (e.f |= 8), pn(e), o);
			} finally {
				(be = n), Ht();
			}
		}
	}
	function pn(e) {
		for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
		(e.x = void 0), (e.s = void 0), Uo(e);
	}
	function sa(e) {
		if (be !== this) throw new Error("Out-of-order effect");
		Bo(this), (be = e), (this.f &= -2), 8 & this.f && pn(this), Ht();
	}
	function $t(e) {
		(this.x = e),
			(this.u = void 0),
			(this.s = void 0),
			(this.o = void 0),
			(this.f = 32);
	}
	($t.prototype.c = function () {
		var e = this.S();
		try {
			if (8 & this.f || this.x === void 0) return;
			var t = this.x();
			typeof t == "function" && (this.u = t);
		} finally {
			e();
		}
	}),
		($t.prototype.S = function () {
			1 & this.f && Bt(),
				(this.f |= 1),
				(this.f &= -9),
				Uo(this),
				Vo(this),
				Qe++;
			var e = be;
			return (be = this), sa.bind(this, e);
		}),
		($t.prototype.N = function () {
			2 & this.f || ((this.f |= 2), (this.o = Lt), (Lt = this));
		}),
		($t.prototype.d = function () {
			(this.f |= 8), 1 & this.f || pn(this);
		});
	function Rt(e) {
		var t = new $t(e);
		try {
			t.c();
		} catch (n) {
			throw (t.d(), n);
		}
		return t.d.bind(t);
	}
	const ra = "cloud",
		ia = "local",
		aa = "docs",
		la = "shopify",
		ca = "light",
		ua = "Search...",
		da = "Search something...",
		Ro = "@TERM@",
		fa = `No results found for "${Ro}"`,
		ha = "orama-wc-searchbox:see-all",
		Fo = "orama-wc-searchbox:see-item",
		zo = {
			title: "string",
			content: "string",
			path: "string",
			category: "string",
			section: "string",
		},
		jo = {
			title: "string",
			tags: "string[]",
			description: "string",
			availableForSale: "boolean",
			priceRange: { max: "number", min: "number" },
		},
		_a = { [aa]: zo, [la]: jo },
		pa = Pe(!1),
		tt = Pe(!1),
		va = Pe(null),
		Me = Pe(null),
		Ft = Pe(null),
		ht = Pe(null),
		ma = Pe(null),
		vn = Pe(ua),
		mn = Pe(da),
		gn = Pe(fa),
		zt = Pe(ca),
		Wo = Pe(!0),
		Go = Pe(!1),
		bn = Pe(-1);
	Rt(async () => {
		const e = Me.value;
		if (ht.value != null) {
			if (!e) {
				Ft.value = null;
				return;
			}
			if (ht instanceof ta) {
				const n = await ht.value.search({ term: e, limit: 5 });
				Ft.value = n;
			} else {
				const n = await _r(ht.value, { term: e, limit: 10 });
				Ft.value = n;
			}
		}
	});
	async function ga(e, t) {
		const n = await Gi({ schema: _a[t] });
		await Zi(n, JSON.parse(e)), (ht.value = n);
	}
	function ba(e) {
		tt.value = e;
	}
	var It,
		q,
		Zo,
		Ko,
		rt,
		qo,
		Yo,
		yn,
		Tt = {},
		Xo = [],
		ya = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		kn = Array.isArray;
	function Ke(e, t) {
		for (var n in t) e[n] = t[n];
		return e;
	}
	function Jo(e) {
		var t = e.parentNode;
		t && t.removeChild(e);
	}
	function Se(e, t, n) {
		var o,
			s,
			r,
			a = {};
		for (r in t)
			r == "key" ? (o = t[r]) : r == "ref" ? (s = t[r]) : (a[r] = t[r]);
		if (
			(arguments.length > 2 &&
				(a.children = arguments.length > 3 ? It.call(arguments, 2) : n),
			typeof e == "function" && e.defaultProps != null)
		)
			for (r in e.defaultProps) a[r] === void 0 && (a[r] = e.defaultProps[r]);
		return Pt(e, a, o, s, null);
	}
	function Pt(e, t, n, o, s) {
		var r = {
			type: e,
			props: t,
			key: n,
			ref: o,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			constructor: void 0,
			__v: s ?? ++Zo,
			__i: -1,
			__u: 0,
		};
		return s == null && q.vnode != null && q.vnode(r), r;
	}
	function qe(e) {
		return e.children;
	}
	function At(e, t) {
		(this.props = e), (this.context = t);
	}
	function _t(e, t) {
		if (t == null) return e.__ ? _t(e.__, e.__i + 1) : null;
		for (var n; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
		return typeof e.type == "function" ? _t(e) : null;
	}
	function Qo(e) {
		var t, n;
		if ((e = e.__) != null && e.__c != null) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if ((n = e.__k[t]) != null && n.__e != null) {
					e.__e = e.__c.base = n.__e;
					break;
				}
			return Qo(e);
		}
	}
	function es(e) {
		((!e.__d && (e.__d = !0) && rt.push(e) && !jt.__r++) ||
			qo !== q.debounceRendering) &&
			((qo = q.debounceRendering) || Yo)(jt);
	}
	function jt() {
		var e, t, n, o, s, r, a, c, u;
		for (rt.sort(yn); (e = rt.shift()); )
			e.__d &&
				((t = rt.length),
				(o = void 0),
				(r = (s = (n = e).__v).__e),
				(c = []),
				(u = []),
				(a = n.__P) &&
					(((o = Ke({}, s)).__v = s.__v + 1),
					q.vnode && q.vnode(o),
					wn(
						a,
						o,
						s,
						n.__n,
						a.ownerSVGElement !== void 0,
						32 & s.__u ? [r] : null,
						c,
						r ?? _t(s),
						!!(32 & s.__u),
						u,
					),
					(o.__.__k[o.__i] = o),
					is(c, o, u),
					o.__e != r && Qo(o)),
				rt.length > t && rt.sort(yn));
		jt.__r = 0;
	}
	function ts(e, t, n, o, s, r, a, c, u, h, m) {
		var f,
			y,
			k,
			A,
			O,
			B = (o && o.__k) || Xo,
			R = t.length;
		for (n.__d = u, ka(n, t, B), u = n.__d, f = 0; f < R; f++)
			(k = n.__k[f]) != null &&
				typeof k != "boolean" &&
				typeof k != "function" &&
				((y = k.__i === -1 ? Tt : B[k.__i] || Tt),
				(k.__i = f),
				wn(e, k, y, s, r, a, c, u, h, m),
				(A = k.__e),
				k.ref &&
					y.ref != k.ref &&
					(y.ref && Cn(y.ref, null, k), m.push(k.ref, k.__c || A, k)),
				O == null && A != null && (O = A),
				65536 & k.__u || y.__k === k.__k
					? (u = ns(k, u, e))
					: typeof k.type == "function" && k.__d !== void 0
						? (u = k.__d)
						: A && (u = A.nextSibling),
				(k.__d = void 0),
				(k.__u &= -196609));
		(n.__d = u), (n.__e = O);
	}
	function ka(e, t, n) {
		var o,
			s,
			r,
			a,
			c,
			u = t.length,
			h = n.length,
			m = h,
			f = 0;
		for (e.__k = [], o = 0; o < u; o++)
			(s = e.__k[o] =
				(s = t[o]) == null || typeof s == "boolean" || typeof s == "function"
					? null
					: typeof s == "string" ||
							typeof s == "number" ||
							typeof s == "bigint" ||
							s.constructor == String
						? Pt(null, s, null, null, s)
						: kn(s)
							? Pt(qe, { children: s }, null, null, null)
							: s.__b > 0
								? Pt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
								: s) != null
				? ((s.__ = e),
					(s.__b = e.__b + 1),
					(c = wa(s, n, (a = o + f), m)),
					(s.__i = c),
					(r = null),
					c !== -1 && (m--, (r = n[c]) && (r.__u |= 131072)),
					r == null || r.__v === null
						? (c == -1 && f--, typeof s.type != "function" && (s.__u |= 65536))
						: c !== a &&
							(c === a + 1
								? f++
								: c > a
									? m > u - a
										? (f += c - a)
										: f--
									: (f = c < a && c == a - 1 ? c - a : 0),
							c !== o + f && (s.__u |= 65536)))
				: (r = n[o]) &&
					r.key == null &&
					r.__e &&
					(r.__e == e.__d && (e.__d = _t(r)), Sn(r, r, !1), (n[o] = null), m--);
		if (m)
			for (o = 0; o < h; o++)
				(r = n[o]) != null &&
					!(131072 & r.__u) &&
					(r.__e == e.__d && (e.__d = _t(r)), Sn(r, r));
	}
	function ns(e, t, n) {
		var o, s;
		if (typeof e.type == "function") {
			for (o = e.__k, s = 0; o && s < o.length; s++)
				o[s] && ((o[s].__ = e), (t = ns(o[s], t, n)));
			return t;
		}
		return (
			e.__e != t && (n.insertBefore(e.__e, t || null), (t = e.__e)),
			t && t.nextSibling
		);
	}
	function wa(e, t, n, o) {
		var s = e.key,
			r = e.type,
			a = n - 1,
			c = n + 1,
			u = t[n];
		if (u === null || (u && s == u.key && r === u.type)) return n;
		if (o > (u != null && !(131072 & u.__u) ? 1 : 0))
			for (; a >= 0 || c < t.length; ) {
				if (a >= 0) {
					if ((u = t[a]) && !(131072 & u.__u) && s == u.key && r === u.type)
						return a;
					a--;
				}
				if (c < t.length) {
					if ((u = t[c]) && !(131072 & u.__u) && s == u.key && r === u.type)
						return c;
					c++;
				}
			}
		return -1;
	}
	function os(e, t, n) {
		t[0] === "-"
			? e.setProperty(t, n ?? "")
			: (e[t] =
					n == null ? "" : typeof n != "number" || ya.test(t) ? n : n + "px");
	}
	function Wt(e, t, n, o, s) {
		var r;
		e: if (t === "style")
			if (typeof n == "string") e.style.cssText = n;
			else {
				if ((typeof o == "string" && (e.style.cssText = o = ""), o))
					for (t in o) (n && t in n) || os(e.style, t, "");
				if (n) for (t in n) (o && n[t] === o[t]) || os(e.style, t, n[t]);
			}
		else if (t[0] === "o" && t[1] === "n")
			(r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1"))),
				(t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
				e.l || (e.l = {}),
				(e.l[t + r] = n),
				n
					? o
						? (n.u = o.u)
						: ((n.u = Date.now()), e.addEventListener(t, r ? rs : ss, r))
					: e.removeEventListener(t, r ? rs : ss, r);
		else {
			if (s) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if (
				t !== "width" &&
				t !== "height" &&
				t !== "href" &&
				t !== "list" &&
				t !== "form" &&
				t !== "tabIndex" &&
				t !== "download" &&
				t !== "rowSpan" &&
				t !== "colSpan" &&
				t !== "role" &&
				t in e
			)
				try {
					e[t] = n ?? "";
					break e;
				} catch {}
			typeof n == "function" ||
				(n == null || (n === !1 && t[4] !== "-")
					? e.removeAttribute(t)
					: e.setAttribute(t, n));
		}
	}
	function ss(e) {
		var t = this.l[e.type + !1];
		if (e.t) {
			if (e.t <= t.u) return;
		} else e.t = Date.now();
		return t(q.event ? q.event(e) : e);
	}
	function rs(e) {
		return this.l[e.type + !0](q.event ? q.event(e) : e);
	}
	function wn(e, t, n, o, s, r, a, c, u, h) {
		var m,
			f,
			y,
			k,
			A,
			O,
			B,
			R,
			W,
			X,
			ie,
			J,
			pe,
			oe,
			ne,
			he = t.type;
		if (t.constructor !== void 0) return null;
		128 & n.__u && ((u = !!(32 & n.__u)), (r = [(c = t.__e = n.__e)])),
			(m = q.__b) && m(t);
		e: if (typeof he == "function")
			try {
				if (
					((R = t.props),
					(W = (m = he.contextType) && o[m.__c]),
					(X = m ? (W ? W.props.value : m.__) : o),
					n.__c
						? (B = (f = t.__c = n.__c).__ = f.__E)
						: ("prototype" in he && he.prototype.render
								? (t.__c = f = new he(R, X))
								: ((t.__c = f = new At(R, X)),
									(f.constructor = he),
									(f.render = Sa)),
							W && W.sub(f),
							(f.props = R),
							f.state || (f.state = {}),
							(f.context = X),
							(f.__n = o),
							(y = f.__d = !0),
							(f.__h = []),
							(f._sb = [])),
					f.__s == null && (f.__s = f.state),
					he.getDerivedStateFromProps != null &&
						(f.__s == f.state && (f.__s = Ke({}, f.__s)),
						Ke(f.__s, he.getDerivedStateFromProps(R, f.__s))),
					(k = f.props),
					(A = f.state),
					(f.__v = t),
					y)
				)
					he.getDerivedStateFromProps == null &&
						f.componentWillMount != null &&
						f.componentWillMount(),
						f.componentDidMount != null && f.__h.push(f.componentDidMount);
				else {
					if (
						(he.getDerivedStateFromProps == null &&
							R !== k &&
							f.componentWillReceiveProps != null &&
							f.componentWillReceiveProps(R, X),
						!f.__e &&
							((f.shouldComponentUpdate != null &&
								f.shouldComponentUpdate(R, f.__s, X) === !1) ||
								t.__v === n.__v))
					) {
						for (
							t.__v !== n.__v &&
								((f.props = R), (f.state = f.__s), (f.__d = !1)),
								t.__e = n.__e,
								t.__k = n.__k,
								t.__k.forEach(function (Ce) {
									Ce && (Ce.__ = t);
								}),
								ie = 0;
							ie < f._sb.length;
							ie++
						)
							f.__h.push(f._sb[ie]);
						(f._sb = []), f.__h.length && a.push(f);
						break e;
					}
					f.componentWillUpdate != null && f.componentWillUpdate(R, f.__s, X),
						f.componentDidUpdate != null &&
							f.__h.push(function () {
								f.componentDidUpdate(k, A, O);
							});
				}
				if (
					((f.context = X),
					(f.props = R),
					(f.__P = e),
					(f.__e = !1),
					(J = q.__r),
					(pe = 0),
					"prototype" in he && he.prototype.render)
				) {
					for (
						f.state = f.__s,
							f.__d = !1,
							J && J(t),
							m = f.render(f.props, f.state, f.context),
							oe = 0;
						oe < f._sb.length;
						oe++
					)
						f.__h.push(f._sb[oe]);
					f._sb = [];
				} else
					do
						(f.__d = !1),
							J && J(t),
							(m = f.render(f.props, f.state, f.context)),
							(f.state = f.__s);
					while (f.__d && ++pe < 25);
				(f.state = f.__s),
					f.getChildContext != null && (o = Ke(Ke({}, o), f.getChildContext())),
					y ||
						f.getSnapshotBeforeUpdate == null ||
						(O = f.getSnapshotBeforeUpdate(k, A)),
					ts(
						e,
						kn(
							(ne =
								m != null && m.type === qe && m.key == null
									? m.props.children
									: m),
						)
							? ne
							: [ne],
						t,
						n,
						o,
						s,
						r,
						a,
						c,
						u,
						h,
					),
					(f.base = t.__e),
					(t.__u &= -161),
					f.__h.length && a.push(f),
					B && (f.__E = f.__ = null);
			} catch (Ce) {
				(t.__v = null),
					u || r != null
						? ((t.__e = c), (t.__u |= u ? 160 : 32), (r[r.indexOf(c)] = null))
						: ((t.__e = n.__e), (t.__k = n.__k)),
					q.__e(Ce, t, n);
			}
		else
			r == null && t.__v === n.__v
				? ((t.__k = n.__k), (t.__e = n.__e))
				: (t.__e = Ca(n.__e, t, n, o, s, r, a, u, h));
		(m = q.diffed) && m(t);
	}
	function is(e, t, n) {
		t.__d = void 0;
		for (var o = 0; o < n.length; o++) Cn(n[o], n[++o], n[++o]);
		q.__c && q.__c(t, e),
			e.some(function (s) {
				try {
					(e = s.__h),
						(s.__h = []),
						e.some(function (r) {
							r.call(s);
						});
				} catch (r) {
					q.__e(r, s.__v);
				}
			});
	}
	function Ca(e, t, n, o, s, r, a, c, u) {
		var h,
			m,
			f,
			y,
			k,
			A,
			O,
			B = n.props,
			R = t.props,
			W = t.type;
		if ((W === "svg" && (s = !0), r != null)) {
			for (h = 0; h < r.length; h++)
				if (
					(k = r[h]) &&
					"setAttribute" in k == !!W &&
					(W ? k.localName === W : k.nodeType === 3)
				) {
					(e = k), (r[h] = null);
					break;
				}
		}
		if (e == null) {
			if (W === null) return document.createTextNode(R);
			(e = s
				? document.createElementNS("http://www.w3.org/2000/svg", W)
				: document.createElement(W, R.is && R)),
				(r = null),
				(c = !1);
		}
		if (W === null) B === R || (c && e.data === R) || (e.data = R);
		else {
			if (
				((r = r && It.call(e.childNodes)), (B = n.props || Tt), !c && r != null)
			)
				for (B = {}, h = 0; h < e.attributes.length; h++)
					B[(k = e.attributes[h]).name] = k.value;
			for (h in B)
				(k = B[h]),
					h == "children" ||
						(h == "dangerouslySetInnerHTML"
							? (f = k)
							: h === "key" || h in R || Wt(e, h, null, k, s));
			for (h in R)
				(k = R[h]),
					h == "children"
						? (y = k)
						: h == "dangerouslySetInnerHTML"
							? (m = k)
							: h == "value"
								? (A = k)
								: h == "checked"
									? (O = k)
									: h === "key" ||
										(c && typeof k != "function") ||
										B[h] === k ||
										Wt(e, h, k, B[h], s);
			if (m)
				c ||
					(f && (m.__html === f.__html || m.__html === e.innerHTML)) ||
					(e.innerHTML = m.__html),
					(t.__k = []);
			else if (
				(f && (e.innerHTML = ""),
				ts(
					e,
					kn(y) ? y : [y],
					t,
					n,
					o,
					s && W !== "foreignObject",
					r,
					a,
					r ? r[0] : n.__k && _t(n, 0),
					c,
					u,
				),
				r != null)
			)
				for (h = r.length; h--; ) r[h] != null && Jo(r[h]);
			c ||
				((h = "value"),
				A !== void 0 &&
					(A !== e[h] ||
						(W === "progress" && !A) ||
						(W === "option" && A !== B[h])) &&
					Wt(e, h, A, B[h], !1),
				(h = "checked"),
				O !== void 0 && O !== e[h] && Wt(e, h, O, B[h], !1));
		}
		return e;
	}
	function Cn(e, t, n) {
		try {
			typeof e == "function" ? e(t) : (e.current = t);
		} catch (o) {
			q.__e(o, n);
		}
	}
	function Sn(e, t, n) {
		var o, s;
		if (
			(q.unmount && q.unmount(e),
			(o = e.ref) && ((o.current && o.current !== e.__e) || Cn(o, null, t)),
			(o = e.__c) != null)
		) {
			if (o.componentWillUnmount)
				try {
					o.componentWillUnmount();
				} catch (r) {
					q.__e(r, t);
				}
			(o.base = o.__P = null), (e.__c = void 0);
		}
		if ((o = e.__k))
			for (s = 0; s < o.length; s++)
				o[s] && Sn(o[s], t, n || typeof e.type != "function");
		n || e.__e == null || Jo(e.__e), (e.__ = e.__e = e.__d = void 0);
	}
	function Sa(e, t, n) {
		return this.constructor(e, n);
	}
	function Gt(e, t, n) {
		var o, s, r, a;
		q.__ && q.__(e, t),
			(s = (o = typeof n == "function") ? null : (n && n.__k) || t.__k),
			(r = []),
			(a = []),
			wn(
				t,
				(e = ((!o && n) || t).__k = Se(qe, null, [e])),
				s || Tt,
				Tt,
				t.ownerSVGElement !== void 0,
				!o && n ? [n] : s ? null : t.firstChild ? It.call(t.childNodes) : null,
				r,
				!o && n ? n : s ? s.__e : t.firstChild,
				o,
				a,
			),
			is(r, e, a);
	}
	function as(e, t) {
		Gt(e, t, as);
	}
	function ls(e, t, n) {
		var o,
			s,
			r,
			a,
			c = Ke({}, e.props);
		for (r in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
			r == "key"
				? (o = t[r])
				: r == "ref"
					? (s = t[r])
					: (c[r] = t[r] === void 0 && a !== void 0 ? a[r] : t[r]);
		return (
			arguments.length > 2 &&
				(c.children = arguments.length > 3 ? It.call(arguments, 2) : n),
			Pt(e.type, c, o || e.key, s || e.ref, null)
		);
	}
	(It = Xo.slice),
		(q = {
			__e: function (e, t, n, o) {
				for (var s, r, a; (t = t.__); )
					if ((s = t.__c) && !s.__)
						try {
							if (
								((r = s.constructor) &&
									r.getDerivedStateFromError != null &&
									(s.setState(r.getDerivedStateFromError(e)), (a = s.__d)),
								s.componentDidCatch != null &&
									(s.componentDidCatch(e, o || {}), (a = s.__d)),
								a)
							)
								return (s.__E = s);
						} catch (c) {
							e = c;
						}
				throw e;
			},
		}),
		(Zo = 0),
		(Ko = function (e) {
			return e != null && e.constructor == null;
		}),
		(At.prototype.setState = function (e, t) {
			var n;
			(n =
				this.__s != null && this.__s !== this.state
					? this.__s
					: (this.__s = Ke({}, this.state))),
				typeof e == "function" && (e = e(Ke({}, n), this.props)),
				e && Ke(n, e),
				e != null && this.__v && (t && this._sb.push(t), es(this));
		}),
		(At.prototype.forceUpdate = function (e) {
			this.__v && ((this.__e = !0), e && this.__h.push(e), es(this));
		}),
		(At.prototype.render = qe),
		(rt = []),
		(Yo =
			typeof Promise == "function"
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(yn = function (e, t) {
			return e.__v.__b - t.__v.__b;
		}),
		(jt.__r = 0);
	var La = 0;
	function v(e, t, n, o, s, r) {
		var a,
			c,
			u = {};
		for (c in t) c == "ref" ? (a = t[c]) : (u[c] = t[c]);
		var h = {
			type: e,
			props: u,
			key: n,
			ref: a,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			constructor: void 0,
			__v: --La,
			__i: -1,
			__u: 0,
			__source: s,
			__self: r,
		};
		if (typeof e == "function" && (a = e.defaultProps))
			for (c in a) u[c] === void 0 && (u[c] = a[c]);
		return q.vnode && q.vnode(h), h;
	}
	var Zt,
		Ee,
		Ln,
		cs,
		$n = 0,
		us = [],
		Kt = [],
		ds = q.__b,
		fs = q.__r,
		hs = q.diffed,
		_s = q.__c,
		ps = q.unmount;
	function vs(e, t) {
		q.__h && q.__h(Ee, e, $n || t), ($n = 0);
		var n = Ee.__H || (Ee.__H = { __: [], __h: [] });
		return e >= n.__.length && n.__.push({ __V: Kt }), n.__[e];
	}
	function qt(e, t) {
		var n = vs(Zt++, 3);
		!q.__s && gs(n.__H, t) && ((n.__ = e), (n.i = t), Ee.__H.__h.push(n));
	}
	function In(e) {
		return (
			($n = 5),
			Tn(function () {
				return { current: e };
			}, [])
		);
	}
	function Tn(e, t) {
		var n = vs(Zt++, 7);
		return gs(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
	}
	function $a() {
		for (var e; (e = us.shift()); )
			if (e.__P && e.__H)
				try {
					e.__H.__h.forEach(Yt), e.__H.__h.forEach(Pn), (e.__H.__h = []);
				} catch (t) {
					(e.__H.__h = []), q.__e(t, e.__v);
				}
	}
	(q.__b = function (e) {
		(Ee = null), ds && ds(e);
	}),
		(q.__r = function (e) {
			fs && fs(e), (Zt = 0);
			var t = (Ee = e.__c).__H;
			t &&
				(Ln === Ee
					? ((t.__h = []),
						(Ee.__h = []),
						t.__.forEach(function (n) {
							n.__N && (n.__ = n.__N), (n.__V = Kt), (n.__N = n.i = void 0);
						}))
					: (t.__h.forEach(Yt), t.__h.forEach(Pn), (t.__h = []), (Zt = 0))),
				(Ln = Ee);
		}),
		(q.diffed = function (e) {
			hs && hs(e);
			var t = e.__c;
			t &&
				t.__H &&
				(t.__H.__h.length &&
					((us.push(t) !== 1 && cs === q.requestAnimationFrame) ||
						((cs = q.requestAnimationFrame) || Ia)($a)),
				t.__H.__.forEach(function (n) {
					n.i && (n.__H = n.i),
						n.__V !== Kt && (n.__ = n.__V),
						(n.i = void 0),
						(n.__V = Kt);
				})),
				(Ln = Ee = null);
		}),
		(q.__c = function (e, t) {
			t.some(function (n) {
				try {
					n.__h.forEach(Yt),
						(n.__h = n.__h.filter(function (o) {
							return !o.__ || Pn(o);
						}));
				} catch (o) {
					t.some(function (s) {
						s.__h && (s.__h = []);
					}),
						(t = []),
						q.__e(o, n.__v);
				}
			}),
				_s && _s(e, t);
		}),
		(q.unmount = function (e) {
			ps && ps(e);
			var t,
				n = e.__c;
			n &&
				n.__H &&
				(n.__H.__.forEach(function (o) {
					try {
						Yt(o);
					} catch (s) {
						t = s;
					}
				}),
				(n.__H = void 0),
				t && q.__e(t, n.__v));
		});
	var ms = typeof requestAnimationFrame == "function";
	function Ia(e) {
		var t,
			n = function () {
				clearTimeout(o), ms && cancelAnimationFrame(t), setTimeout(e);
			},
			o = setTimeout(n, 100);
		ms && (t = requestAnimationFrame(n));
	}
	function Yt(e) {
		var t = Ee,
			n = e.__c;
		typeof n == "function" && ((e.__c = void 0), n()), (Ee = t);
	}
	function Pn(e) {
		var t = Ee;
		(e.__c = e.__()), (Ee = t);
	}
	function gs(e, t) {
		return (
			!e ||
			e.length !== t.length ||
			t.some(function (n, o) {
				return n !== e[o];
			})
		);
	}
	function An() {
		return (An = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n)
							Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					}
					return e;
				}).apply(this, arguments);
	}
	var Ta = ["context", "children"];
	function Pa(e) {
		this.getChildContext = function () {
			return e.context;
		};
		var t = e.children,
			n = (function (o, s) {
				if (o == null) return {};
				var r,
					a,
					c = {},
					u = Object.keys(o);
				for (a = 0; a < u.length; a++)
					s.indexOf((r = u[a])) >= 0 || (c[r] = o[r]);
				return c;
			})(e, Ta);
		return ls(t, n);
	}
	function Aa() {
		var e = new CustomEvent("_preact", {
			detail: {},
			bubbles: !0,
			cancelable: !0,
		});
		this.dispatchEvent(e),
			(this._vdom = Se(
				Pa,
				An({}, this._props, { context: e.detail.context }),
				(function t(n, o) {
					if (n.nodeType === 3) return n.data;
					if (n.nodeType !== 1) return null;
					var s = [],
						r = {},
						a = 0,
						c = n.attributes,
						u = n.childNodes;
					for (a = c.length; a--; )
						c[a].name !== "slot" &&
							((r[c[a].name] = c[a].value), (r[bs(c[a].name)] = c[a].value));
					for (a = u.length; a--; ) {
						var h = t(u[a], null),
							m = u[a].slot;
						m ? (r[m] = Se(ys, { name: m }, h)) : (s[a] = h);
					}
					var f = o ? Se(ys, null, s) : s;
					return Se(o || n.nodeName.toLowerCase(), r, f);
				})(this, this._vdomComponent),
			)),
			(this.hasAttribute("hydrate") ? as : Gt)(this._vdom, this._root);
	}
	function bs(e) {
		return e.replace(/-(\w)/g, function (t, n) {
			return n ? n.toUpperCase() : "";
		});
	}
	function Ea(e, t, n) {
		if (this._vdom) {
			var o = {};
			(o[e] = n = n ?? void 0),
				(o[bs(e)] = n),
				(this._vdom = ls(this._vdom, o)),
				Gt(this._vdom, this._root);
		}
	}
	function Ma() {
		Gt((this._vdom = null), this._root);
	}
	function ys(e, t) {
		var n = this;
		return Se(
			"slot",
			An({}, e, {
				ref: function (o) {
					o
						? ((n.ref = o),
							n._listener ||
								((n._listener = function (s) {
									s.stopPropagation(), (s.detail.context = t);
								}),
								o.addEventListener("_preact", n._listener)))
						: n.ref.removeEventListener("_preact", n._listener);
				},
			}),
		);
	}
	function Oa(e, t, n, o) {
		function s() {
			var r = Reflect.construct(HTMLElement, [], s);
			return (
				(r._vdomComponent = e),
				(r._root =
					o && o.shadow ? r.attachShadow({ mode: o.mode || "open" }) : r),
				r
			);
		}
		return (
			((s.prototype = Object.create(HTMLElement.prototype)).constructor = s),
			(s.prototype.connectedCallback = Aa),
			(s.prototype.attributeChangedCallback = Ea),
			(s.prototype.disconnectedCallback = Ma),
			(n = n || e.observedAttributes || Object.keys(e.propTypes || {})),
			(s.observedAttributes = n),
			n.forEach(function (r) {
				Object.defineProperty(s.prototype, r, {
					get: function () {
						return this._vdom.props[r];
					},
					set: function (a) {
						this._vdom
							? this.attributeChangedCallback(r, null, a)
							: (this._props || (this._props = {}),
								(this._props[r] = a),
								this.connectedCallback());
						var c = typeof a;
						(a != null &&
							c !== "string" &&
							c !== "boolean" &&
							c !== "number") ||
							this.setAttribute(r, a);
					},
				});
			}),
			customElements.define(t || e.tagName || e.displayName || e.name, s)
		);
	}
	var Da = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
		Ye = function (e) {
			return typeof e == "string" ? e.length > 0 : typeof e == "number";
		},
		Ie = function (e, t, n) {
			return (
				t === void 0 && (t = 0),
				n === void 0 && (n = Math.pow(10, t)),
				Math.round(n * e) / n + 0
			);
		},
		De = function (e, t, n) {
			return (
				t === void 0 && (t = 0),
				n === void 0 && (n = 1),
				e > n ? n : e > t ? e : t
			);
		},
		ks = function (e) {
			return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
		},
		ws = function (e) {
			return {
				r: De(e.r, 0, 255),
				g: De(e.g, 0, 255),
				b: De(e.b, 0, 255),
				a: De(e.a),
			};
		},
		En = function (e) {
			return { r: Ie(e.r), g: Ie(e.g), b: Ie(e.b), a: Ie(e.a, 3) };
		},
		Na = /^#([0-9a-f]{3,8})$/i,
		Xt = function (e) {
			var t = e.toString(16);
			return t.length < 2 ? "0" + t : t;
		},
		Cs = function (e) {
			var t = e.r,
				n = e.g,
				o = e.b,
				s = e.a,
				r = Math.max(t, n, o),
				a = r - Math.min(t, n, o),
				c = a
					? r === t
						? (n - o) / a
						: r === n
							? 2 + (o - t) / a
							: 4 + (t - n) / a
					: 0;
			return {
				h: 60 * (c < 0 ? c + 6 : c),
				s: r ? (a / r) * 100 : 0,
				v: (r / 255) * 100,
				a: s,
			};
		},
		Ss = function (e) {
			var t = e.h,
				n = e.s,
				o = e.v,
				s = e.a;
			(t = (t / 360) * 6), (n /= 100), (o /= 100);
			var r = Math.floor(t),
				a = o * (1 - n),
				c = o * (1 - (t - r) * n),
				u = o * (1 - (1 - t + r) * n),
				h = r % 6;
			return {
				r: 255 * [o, c, a, a, u, o][h],
				g: 255 * [u, o, o, c, a, a][h],
				b: 255 * [a, a, u, o, o, c][h],
				a: s,
			};
		},
		Ls = function (e) {
			return { h: ks(e.h), s: De(e.s, 0, 100), l: De(e.l, 0, 100), a: De(e.a) };
		},
		$s = function (e) {
			return { h: Ie(e.h), s: Ie(e.s), l: Ie(e.l), a: Ie(e.a, 3) };
		},
		Is = function (e) {
			return Ss(
				((n = (t = e).s),
				{
					h: t.h,
					s:
						(n *= ((o = t.l) < 50 ? o : 100 - o) / 100) > 0
							? ((2 * n) / (o + n)) * 100
							: 0,
					v: o + n,
					a: t.a,
				}),
			);
			var t, n, o;
		},
		Et = function (e) {
			return {
				h: (t = Cs(e)).h,
				s:
					(s = ((200 - (n = t.s)) * (o = t.v)) / 100) > 0 && s < 200
						? ((n * o) / 100 / (s <= 100 ? s : 200 - s)) * 100
						: 0,
				l: s / 2,
				a: t.a,
			};
			var t, n, o, s;
		},
		xa =
			/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
		Va =
			/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
		Ba =
			/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
		Ha =
			/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
		Ts = {
			string: [
				[
					function (e) {
						var t = Na.exec(e);
						return t
							? (e = t[1]).length <= 4
								? {
										r: parseInt(e[0] + e[0], 16),
										g: parseInt(e[1] + e[1], 16),
										b: parseInt(e[2] + e[2], 16),
										a:
											e.length === 4
												? Ie(parseInt(e[3] + e[3], 16) / 255, 2)
												: 1,
									}
								: e.length === 6 || e.length === 8
									? {
											r: parseInt(e.substr(0, 2), 16),
											g: parseInt(e.substr(2, 2), 16),
											b: parseInt(e.substr(4, 2), 16),
											a:
												e.length === 8
													? Ie(parseInt(e.substr(6, 2), 16) / 255, 2)
													: 1,
										}
									: null
							: null;
					},
					"hex",
				],
				[
					function (e) {
						var t = Ba.exec(e) || Ha.exec(e);
						return t
							? t[2] !== t[4] || t[4] !== t[6]
								? null
								: ws({
										r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
										g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
										b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
										a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
									})
							: null;
					},
					"rgb",
				],
				[
					function (e) {
						var t = xa.exec(e) || Va.exec(e);
						if (!t) return null;
						var n,
							o,
							s = Ls({
								h:
									((n = t[1]),
									(o = t[2]),
									o === void 0 && (o = "deg"),
									Number(n) * (Da[o] || 1)),
								s: Number(t[3]),
								l: Number(t[4]),
								a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
							});
						return Is(s);
					},
					"hsl",
				],
			],
			object: [
				[
					function (e) {
						var t = e.r,
							n = e.g,
							o = e.b,
							s = e.a,
							r = s === void 0 ? 1 : s;
						return Ye(t) && Ye(n) && Ye(o)
							? ws({ r: Number(t), g: Number(n), b: Number(o), a: Number(r) })
							: null;
					},
					"rgb",
				],
				[
					function (e) {
						var t = e.h,
							n = e.s,
							o = e.l,
							s = e.a,
							r = s === void 0 ? 1 : s;
						if (!Ye(t) || !Ye(n) || !Ye(o)) return null;
						var a = Ls({
							h: Number(t),
							s: Number(n),
							l: Number(o),
							a: Number(r),
						});
						return Is(a);
					},
					"hsl",
				],
				[
					function (e) {
						var t = e.h,
							n = e.s,
							o = e.v,
							s = e.a,
							r = s === void 0 ? 1 : s;
						if (!Ye(t) || !Ye(n) || !Ye(o)) return null;
						var a = (function (c) {
							return {
								h: ks(c.h),
								s: De(c.s, 0, 100),
								v: De(c.v, 0, 100),
								a: De(c.a),
							};
						})({ h: Number(t), s: Number(n), v: Number(o), a: Number(r) });
						return Ss(a);
					},
					"hsv",
				],
			],
		},
		Ps = function (e, t) {
			for (var n = 0; n < t.length; n++) {
				var o = t[n][0](e);
				if (o) return [o, t[n][1]];
			}
			return [null, void 0];
		},
		Ua = function (e) {
			return typeof e == "string"
				? Ps(e.trim(), Ts.string)
				: typeof e == "object" && e !== null
					? Ps(e, Ts.object)
					: [null, void 0];
		},
		Mn = function (e, t) {
			var n = Et(e);
			return { h: n.h, s: De(n.s + 100 * t, 0, 100), l: n.l, a: n.a };
		},
		On = function (e) {
			return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
		},
		As = function (e, t) {
			var n = Et(e);
			return { h: n.h, s: n.s, l: De(n.l + 100 * t, 0, 100), a: n.a };
		},
		Es = (function () {
			function e(t) {
				(this.parsed = Ua(t)[0]),
					(this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
			}
			return (
				(e.prototype.isValid = function () {
					return this.parsed !== null;
				}),
				(e.prototype.brightness = function () {
					return Ie(On(this.rgba), 2);
				}),
				(e.prototype.isDark = function () {
					return On(this.rgba) < 0.5;
				}),
				(e.prototype.isLight = function () {
					return On(this.rgba) >= 0.5;
				}),
				(e.prototype.toHex = function () {
					return (
						(t = En(this.rgba)),
						(n = t.r),
						(o = t.g),
						(s = t.b),
						(a = (r = t.a) < 1 ? Xt(Ie(255 * r)) : ""),
						"#" + Xt(n) + Xt(o) + Xt(s) + a
					);
					var t, n, o, s, r, a;
				}),
				(e.prototype.toRgb = function () {
					return En(this.rgba);
				}),
				(e.prototype.toRgbString = function () {
					return (
						(t = En(this.rgba)),
						(n = t.r),
						(o = t.g),
						(s = t.b),
						(r = t.a) < 1
							? "rgba(" + n + ", " + o + ", " + s + ", " + r + ")"
							: "rgb(" + n + ", " + o + ", " + s + ")"
					);
					var t, n, o, s, r;
				}),
				(e.prototype.toHsl = function () {
					return $s(Et(this.rgba));
				}),
				(e.prototype.toHslString = function () {
					return (
						(t = $s(Et(this.rgba))),
						(n = t.h),
						(o = t.s),
						(s = t.l),
						(r = t.a) < 1
							? "hsla(" + n + ", " + o + "%, " + s + "%, " + r + ")"
							: "hsl(" + n + ", " + o + "%, " + s + "%)"
					);
					var t, n, o, s, r;
				}),
				(e.prototype.toHsv = function () {
					return (
						(t = Cs(this.rgba)),
						{ h: Ie(t.h), s: Ie(t.s), v: Ie(t.v), a: Ie(t.a, 3) }
					);
					var t;
				}),
				(e.prototype.invert = function () {
					return ze({
						r: 255 - (t = this.rgba).r,
						g: 255 - t.g,
						b: 255 - t.b,
						a: t.a,
					});
					var t;
				}),
				(e.prototype.saturate = function (t) {
					return t === void 0 && (t = 0.1), ze(Mn(this.rgba, t));
				}),
				(e.prototype.desaturate = function (t) {
					return t === void 0 && (t = 0.1), ze(Mn(this.rgba, -t));
				}),
				(e.prototype.grayscale = function () {
					return ze(Mn(this.rgba, -1));
				}),
				(e.prototype.lighten = function (t) {
					return t === void 0 && (t = 0.1), ze(As(this.rgba, t));
				}),
				(e.prototype.darken = function (t) {
					return t === void 0 && (t = 0.1), ze(As(this.rgba, -t));
				}),
				(e.prototype.rotate = function (t) {
					return t === void 0 && (t = 15), this.hue(this.hue() + t);
				}),
				(e.prototype.alpha = function (t) {
					return typeof t == "number"
						? ze({ r: (n = this.rgba).r, g: n.g, b: n.b, a: t })
						: Ie(this.rgba.a, 3);
					var n;
				}),
				(e.prototype.hue = function (t) {
					var n = Et(this.rgba);
					return typeof t == "number"
						? ze({ h: t, s: n.s, l: n.l, a: n.a })
						: Ie(n.h);
				}),
				(e.prototype.isEqual = function (t) {
					return this.toHex() === ze(t).toHex();
				}),
				e
			);
		})(),
		ze = function (e) {
			return e instanceof Es ? e : new Es(e);
		},
		Jt = function () {
			return (
				(Jt =
					Object.assign ||
					function (t) {
						for (var n, o = 1, s = arguments.length; o < s; o++) {
							n = arguments[o];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
						}
						return t;
					}),
				Jt.apply(this, arguments)
			);
		};
	typeof SuppressedError == "function" && SuppressedError;
	function Ra(e) {
		return e.toLowerCase();
	}
	var Fa = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
		za = /[^A-Z0-9]+/gi;
	function ja(e, t) {
		t === void 0 && (t = {});
		for (
			var n = t.splitRegexp,
				o = n === void 0 ? Fa : n,
				s = t.stripRegexp,
				r = s === void 0 ? za : s,
				a = t.transform,
				c = a === void 0 ? Ra : a,
				u = t.delimiter,
				h = u === void 0 ? " " : u,
				m = Ms(Ms(e, o, "$1\0$2"), r, "\0"),
				f = 0,
				y = m.length;
			m.charAt(f) === "\0";
		)
			f++;
		for (; m.charAt(y - 1) === "\0"; ) y--;
		return m.slice(f, y).split("\0").map(c).join(h);
	}
	function Ms(e, t, n) {
		return t instanceof RegExp
			? e.replace(t, n)
			: t.reduce(function (o, s) {
					return o.replace(s, n);
				}, e);
	}
	function Wa(e, t) {
		return t === void 0 && (t = {}), ja(e, Jt({ delimiter: "." }, t));
	}
	function Os(e, t) {
		return t === void 0 && (t = {}), Wa(e, Jt({ delimiter: "-" }, t));
	}
	var Ga = /^#([a-f]|[A-F]|[0-9]){3}$/,
		Za = /^#([a-f]|[A-F]|[0-9]){6}$/,
		Ka = (e) => Ga.test(e) || Za.test(e),
		Ds = (e, t) => {
			let n = [],
				o = (s, r) => {
					Object.entries(s).map(([a, c]) => {
						typeof c != "string" && typeof c != "number"
							? o(c, [...r, Os(a)])
							: n.push({
									key: `--${(t && t.prefix && `${t.prefix}-`) || ""}${[...r, Os(a)].join("-")}`,
									value: c,
								});
					});
				};
			return o(e, []), n;
		},
		qa = (e, t) =>
			t && t.withRGB
				? Ds(e, t).reduce((n, { key: o, value: s }) => {
						if (!Ka(s.toString())) return [...n, { key: o, value: s }];
						let { r, g: a, b: c } = ze(s.toString()).toRgb();
						return [
							...n,
							{ key: o, value: s },
							{ key: `${o}-rgb`, value: `${r}, ${a}, ${c}` },
						];
					}, [])
				: Ds(e, t),
		Ya = (e, t) =>
			qa(e, t)
				.map(({ key: n, value: o }) => `${n}: ${o};`)
				.join(" "),
		Dn;
	function pt(e, t) {
		q[e] = t.bind(null, q[e] || function () {});
	}
	function Qt(e) {
		Dn && Dn(), (Dn = e && e.S());
	}
	function Ns(e) {
		var t = this,
			n = e.data,
			o = nt(n);
		o.value = n;
		var s = Tn(function () {
			for (var r = t.__v; (r = r.__); )
				if (r.__c) {
					r.__c.__$f |= 4;
					break;
				}
			return (
				(t.__$u.c = function () {
					var a;
					!Ko(s.peek()) && ((a = t.base) == null ? void 0 : a.nodeType) === 3
						? (t.base.data = s.peek())
						: ((t.__$f |= 1), t.setState({}));
				}),
				Ho(function () {
					var a = o.value.value;
					return a === 0 ? 0 : a === !0 ? "" : a || "";
				})
			);
		}, []);
		return s.value;
	}
	(Ns.displayName = "_st"),
		Object.defineProperties(Te.prototype, {
			constructor: { configurable: !0, value: void 0 },
			type: { configurable: !0, value: Ns },
			props: {
				configurable: !0,
				get: function () {
					return { data: this };
				},
			},
			__b: { configurable: !0, value: 1 },
		}),
		pt("__b", function (e, t) {
			if (typeof t.type == "string") {
				var n,
					o = t.props;
				for (var s in o)
					if (s !== "children") {
						var r = o[s];
						r instanceof Te &&
							(n || (t.__np = n = {}), (n[s] = r), (o[s] = r.peek()));
					}
			}
			e(t);
		}),
		pt("__r", function (e, t) {
			Qt();
			var n,
				o = t.__c;
			o &&
				((o.__$f &= -2),
				(n = o.__$u) === void 0 &&
					(o.__$u = n =
						(function (s) {
							var r;
							return (
								Rt(function () {
									r = this;
								}),
								(r.c = function () {
									(o.__$f |= 1), o.setState({});
								}),
								r
							);
						})())),
				Qt(n),
				e(t);
		}),
		pt("__e", function (e, t, n, o) {
			Qt(), e(t, n, o);
		}),
		pt("diffed", function (e, t) {
			Qt();
			var n;
			if (typeof t.type == "string" && (n = t.__e)) {
				var o = t.__np,
					s = t.props;
				if (o) {
					var r = n.U;
					if (r)
						for (var a in r) {
							var c = r[a];
							c !== void 0 && !(a in o) && (c.d(), (r[a] = void 0));
						}
					else n.U = r = {};
					for (var u in o) {
						var h = r[u],
							m = o[u];
						h === void 0 ? ((h = Xa(n, u, m, s)), (r[u] = h)) : h.o(m, s);
					}
				}
			}
			e(t);
		});
	function Xa(e, t, n, o) {
		var s = t in e && e.ownerSVGElement === void 0,
			r = Pe(n);
		return {
			o: function (a, c) {
				(r.value = a), (o = c);
			},
			d: Rt(function () {
				var a = r.value.value;
				o[t] !== a &&
					((o[t] = a),
					s ? (e[t] = a) : a ? e.setAttribute(t, a) : e.removeAttribute(t));
			}),
		};
	}
	pt("unmount", function (e, t) {
		if (typeof t.type == "string") {
			var n = t.__e;
			if (n) {
				var o = n.U;
				if (o) {
					n.U = void 0;
					for (var s in o) {
						var r = o[s];
						r && r.d();
					}
				}
			}
		} else {
			var a = t.__c;
			if (a) {
				var c = a.__$u;
				c && ((a.__$u = void 0), c.d());
			}
		}
		e(t);
	}),
		pt("__h", function (e, t, n, o) {
			(o < 3 || o === 9) && (t.__$f |= 2), e(t, n, o);
		}),
		(At.prototype.shouldComponentUpdate = function (e, t) {
			var n = this.__$u;
			if (!((n && n.s !== void 0) || 4 & this.__$f) || 3 & this.__$f) return !0;
			for (var o in t) return !0;
			for (var s in e)
				if (s !== "__source" && e[s] !== this.props[s]) return !0;
			for (var r in this.props) if (!(r in e)) return !0;
			return !1;
		});
	function nt(e) {
		return Tn(function () {
			return Pe(e);
		}, []);
	}
	const Ja = 'Missing required configuration parameter "preset"',
		Qa = (e) => {
			const t = e.color || "currentColor",
				n = e.size || 24;
			return (
				delete e.color,
				delete e.size,
				Se(
					"svg",
					Object.assign(
						{
							xmlns: "http://www.w3.org/2000/svg",
							width: n,
							height: n,
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: t,
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
						},
						e,
					),
					Se("circle", { cx: "11", cy: "11", r: "8" }),
					Se("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
				)
			);
		},
		el = (e) => {
			const t = e.color || "currentColor",
				n = e.size || 24;
			return (
				delete e.color,
				delete e.size,
				Se(
					"svg",
					Object.assign(
						{
							xmlns: "http://www.w3.org/2000/svg",
							width: n,
							height: n,
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: t,
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
						},
						e,
					),
					Se("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
					Se("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
				)
			);
		},
		Nn = {
			searchbox__inputWrapper: "hSFrHP5U8Q5yWxU4s97F",
			searchbox__input__cancel: "ZTfJwQOq997v2kVS42Y2",
			searchbox__input: "mhZGfXmS9bvntDHhzhu4",
		};
	function tl() {
		const e = In(null);
		return (
			qt(() => {
				e.current != null && e.current.focus();
			}, []),
			v("div", {
				class: Nn.searchbox__inputWrapper,
				children: [
					v(Qa, { size: 20 }),
					v("input", {
						type: "search",
						ref: e,
						placeholder: vn.value,
						value: Me.value ?? "",
						class: Nn.searchbox__input,
						onInput: (t) => (Me.value = t.target.value),
						"aria-label": "Search",
					}),
					v("button", {
						type: "button",
						onClick: () => (Me.value = null),
						"aria-label": "Clear search",
						class: Nn.searchbox__input__cancel,
						children: v(el, { size: 16 }),
					}),
				],
			})
		);
	}
	const nl = (e) => {
			const t = e.color || "currentColor",
				n = e.size || 24;
			return (
				delete e.color,
				delete e.size,
				Se(
					"svg",
					Object.assign(
						{
							xmlns: "http://www.w3.org/2000/svg",
							width: n,
							height: n,
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: t,
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
						},
						e,
					),
					Se("line", { x1: "4", y1: "9", x2: "20", y2: "9" }),
					Se("line", { x1: "4", y1: "15", x2: "20", y2: "15" }),
					Se("line", { x1: "10", y1: "3", x2: "8", y2: "21" }),
					Se("line", { x1: "16", y1: "3", x2: "14", y2: "21" }),
				)
			);
		},
		ol = (e) => {
			const t = e.color || "currentColor",
				n = e.size || 24;
			return (
				delete e.color,
				delete e.size,
				Se(
					"svg",
					Object.assign(
						{
							xmlns: "http://www.w3.org/2000/svg",
							width: n,
							height: n,
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: t,
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
						},
						e,
					),
					Se("path", {
						d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
					}),
					Se("polyline", { points: "13 2 13 9 20 9" }),
				)
			);
		};
	function sl(e) {
		if (e === null) return [];
		const t = e.hits.reduce((n, o) => {
			const s = o.document.section;
			return n[s] || (n[s] = []), n[s].push(o), n;
		}, {});
		return Object.entries(t);
	}
	const vt = new Map();
	function rl(e, t = "") {
		const n = e.includes("#"),
			o = `${e}:${t}`,
			s = { name: "", isSubSection: n };
		if (vt.has(o)) return vt.get(o);
		const r = t.replace(/\n/, ""),
			a = e.endsWith("/index") || e.includes("/index#"),
			c = e.split("/");
		if (a) {
			const m = en(c[c.length - 2]),
				f = en(c[c.length - 3]);
			return m.toLowerCase() === r.toLowerCase()
				? ((s.name = f), vt.set(o, s), s)
				: ((s.name = m), vt.set(o, s), s);
		}
		const u = en(c[c.length - 1].replace(/#.+$/, "")),
			h = en(c[c.length - 2]);
		return u.toLowerCase() === r.toLowerCase()
			? ((s.name = h), vt.set(o, s), s)
			: ((s.name = u), vt.set(o, s), s);
	}
	function en(e) {
		let t = e == null ? void 0 : e.replace(/(-|_)/g, " ");
		return (
			(t = t == null ? void 0 : t.replace(/\b[a-z]/g, (n) => n.toUpperCase())),
			t
		);
	}
	var mt = {
			caseSensitive: !1,
			wholeWords: !1,
			HTMLTag: "mark",
			CSSClass: "orama-highlight",
		},
		il = class {
			constructor(e = mt) {
				ye(this, "options");
				ye(this, "_positions", []);
				ye(this, "_HTML", "");
				ye(this, "_searchTerm", "");
				ye(this, "_originalText", "");
				this.options = { ...mt, ...e };
			}
			highlight(e, t) {
				(this._searchTerm = t), (this._originalText = e);
				let n = this.options.caseSensitive ?? mt.caseSensitive,
					o = this.options.wholeWords ?? mt.wholeWords,
					s = this.options.HTMLTag ?? mt.HTMLTag,
					r = this.options.CSSClass ?? mt.CSSClass,
					a = n ? "g" : "gi",
					c = o ? "\\b" : "",
					u = (n ? t : t.toLowerCase()).trim().split(/\s+/).join("|"),
					h = new RegExp(`${c}${u}${c}`, a),
					m = [],
					f = [],
					y,
					k = 0,
					A = -1;
				for (; (y = h.exec(e)) !== null && h.lastIndex !== A; ) {
					A = h.lastIndex;
					let O = y.index,
						B = O + y[0].length - 1;
					m.push({ start: O, end: B }),
						f.push(e.slice(k, O)),
						f.push(`<${s} class="${r}">${y[0]}</${s}>`),
						(k = B + 1);
				}
				return (
					f.push(e.slice(k)),
					(this._positions = m),
					(this._HTML = f.join("")),
					this
				);
			}
			trim(e, t = !0) {
				if (this._positions.length === 0 || this._originalText.length <= e)
					return this._HTML;
				let n = this._positions[0].start,
					o = Math.max(n - Math.floor(e / 2), 0),
					s = Math.min(o + e, this._originalText.length),
					r = `${o === 0 || !t ? "" : "..."}${this._originalText.slice(o, s)}${s < this._originalText.length && t ? "..." : ""}`;
				return this.highlight(r, this._searchTerm), this._HTML;
			}
			get positions() {
				return this._positions;
			}
			get HTML() {
				return this._HTML;
			}
		};
	const xs = new il({
			HTMLTag: "mark",
			CSSClass: "searchbox__result__highlight",
		}),
		Ne = {
			searchbox__body: "D5ZPtMXincN5SZvsbsi1",
			"searchbox__body--visible": "y4uUHG1NSesHUoCP9JEL",
			searchbox__startMessage: "mWFicKnZnVGIGLvF3P0t",
			searchbox__results__more: "Q5HAT2yOsUNR8cY7Ei_Q",
			searchbox__results__list: "cYRdeUyW_rzylXcV1cpA",
			searchbox__result: "eLeAwHnTnmb78cPu6sai",
			searchbox__result__icon: "rc4C9sw9SztiUjOB1wld",
			searchbox__result__link: "ZbrW9I1YZ6xpfMv3Us1Y",
			searchbox__result__highlight: "_K2T_C2_G2hRW0VmriuQ",
			searchbox__result__image: "BAKIZPwQONZ1dQGYdc7O",
			searchbox__result__title: "VC5qCS8Wo9KI5FgHPHIZ",
			searchbox_result_section_title: "ee2tppHJ45h4Ted19qFc",
			searchbox__result__description: "yQtLTBVux5hwqbvHYWuI",
			searchbox__result__subtitle: "hJWan0y_p8rGKihj2Vnl",
		},
		al = Ho(() => gn.value.replace(Ro, Me.value ?? ""));
	function ll() {
		var a, c, u;
		const e = nt(Ft).value,
			t = nt(bn).value,
			n = sl(e.value ?? { hits: [] }),
			o = In(null);
		let s = 0;
		const r = (h, m) => {
			h.preventDefault(), h.stopPropagation();
			const f = new CustomEvent(Fo, {
				detail: { searchTerm: Me.value, item: m },
				bubbles: !0,
				composed: !0,
			});
			dispatchEvent(f), (Me.value = ""), (tt.value = !1);
		};
		return (
			qt(() => {
				o.current != null && o.current.scrollIntoView({ block: "center" });
			}, [o.current]),
			v(qe, {
				children: v("div", {
					class: Ne.searchbox__body,
					children: [
						e.value == null &&
							v("div", {
								class: Ne.searchbox__startMessage,
								children: v("p", { children: mn.value }),
							}),
						((a = e.value) == null ? void 0 : a.count) === 0 &&
							v("div", {
								class: Ne.searchbox__startMessage,
								children: v("p", { children: al.value }),
							}),
						!!((c = e == null ? void 0 : e.value) != null && c.count) &&
							v("div", {
								class: Ne.searchbox__results,
								children: [
									n.map(([h, m]) =>
										v(qe, {
											children: v(
												"ul",
												{
													class: Ne.searchbox__results__list,
													children: [
														v("li", {
															class: Ne.searchbox_result_section_title,
															children: h,
														}),
														m.map((f) => {
															var A;
															const y = rl(f.document.path, f.document.title);
															s += 1;
															const k = s === t.value;
															return v(
																"li",
																{
																	class: Ne.searchbox__result,
																	"aria-current": k,
																	onClick: (O) => r(O, f),
																	role: "link",
																	children: v("a", {
																		href:
																			(A = f == null ? void 0 : f.document) ==
																			null
																				? void 0
																				: A.path,
																		class: Ne.searchbox__result__link,
																		"data-current-item": k,
																		ref: k ? o : null,
																		children: [
																			v("div", {
																				class: Ne.searchbox__result__icon,
																				children: y.isSubSection
																					? v(nl, { size: 24 })
																					: v(ol, { size: 24 }),
																			}),
																			v("div", {
																				children: [
																					v("div", {
																						class: Ne.searchbox__result__title,
																						dangerouslySetInnerHTML: {
																							__html: xs
																								.highlight(y.name, Me.value)
																								.trim(50),
																						},
																					}),
																					v("div", {
																						class:
																							Ne.searchbox__result__subtitle,
																						dangerouslySetInnerHTML: {
																							__html: xs
																								.highlight(
																									f.document.title,
																									Me.value,
																								)
																								.trim(50),
																						},
																					}),
																				],
																			}),
																		],
																	}),
																},
																f.id,
															);
														}),
													],
												},
												h,
											),
										}),
									),
									v("div", {
										class: Ne.searchbox__results__more,
										children: v("a", {
											href: `/search/?q=${Me.value}`,
											children: [
												"See all ",
												(u = e == null ? void 0 : e.value) == null
													? void 0
													: u.count,
												" results",
											],
										}),
									}),
								],
							}),
					],
				}),
			})
		);
	}
	const cl = () =>
			v("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16",
				height: "6",
				viewBox: "0 0 16 6",
				fill: "none",
				class: "feather feather-esc",
				"aria-label": "Escape key",
				role: "img",
				children: [
					v("path", {
						d: "M2.76778 5.09587C2.27559 5.09587 1.85052 4.9936 1.49256 4.78905C1.13674 4.58238 0.862948 4.29047 0.671187 3.91334C0.479426 3.53408 0.383545 3.0877 0.383545 2.57421C0.383545 2.06924 0.479426 1.62605 0.671187 1.24466C0.865079 0.861139 1.13568 0.562844 1.48298 0.349776C1.83028 0.134577 2.2383 0.0269775 2.70705 0.0269775C3.00961 0.0269775 3.29512 0.0759834 3.56359 0.173995C3.83418 0.269875 4.07282 0.419023 4.2795 0.621438C4.4883 0.823853 4.65237 1.08167 4.77168 1.39488C4.891 1.70596 4.95066 2.07669 4.95066 2.50709V2.86185H0.926869V2.08202H3.84164C3.83951 1.86043 3.79157 1.66334 3.69782 1.49076C3.60407 1.31604 3.47303 1.17861 3.30471 1.07847C3.13852 0.978327 2.94462 0.928256 2.72303 0.928256C2.48653 0.928256 2.27879 0.985784 2.09981 1.10084C1.92083 1.21377 1.78127 1.36291 1.68113 1.54828C1.58312 1.73152 1.53305 1.93287 1.53092 2.15233V2.83309C1.53092 3.1186 1.58312 3.36363 1.68752 3.56817C1.79193 3.77059 1.93788 3.92613 2.12538 4.03479C2.31288 4.14132 2.53234 4.19459 2.78376 4.19459C2.95208 4.19459 3.10443 4.17115 3.24079 4.12428C3.37715 4.07527 3.49541 4.0039 3.59555 3.91015C3.69569 3.8164 3.77133 3.70027 3.82247 3.56178L4.90272 3.68323C4.83454 3.96874 4.70457 4.21803 4.51281 4.4311C4.32318 4.64203 4.08028 4.8061 3.78411 4.92328C3.48795 5.03834 3.14917 5.09587 2.76778 5.09587Z",
						fill: "currentColor",
					}),
					v("path", {
						d: "M9.80941 1.38848L8.75473 1.50354C8.7249 1.39701 8.6727 1.29686 8.59812 1.20311C8.52568 1.10936 8.42767 1.03372 8.30409 0.976196C8.18051 0.918668 8.02923 0.889904 7.85025 0.889904C7.60949 0.889904 7.40707 0.942105 7.24301 1.04651C7.08108 1.15091 7.00118 1.28621 7.00331 1.4524C7.00118 1.59516 7.05338 1.71128 7.15991 1.80077C7.26858 1.89026 7.44755 1.96377 7.69684 2.0213L8.5342 2.20027C8.99869 2.30042 9.34386 2.45915 9.56971 2.67648C9.7977 2.89381 9.91275 3.17826 9.91488 3.52982C9.91275 3.83877 9.8222 4.11149 9.64322 4.348C9.46638 4.58238 9.22028 4.76561 8.90494 4.89772C8.5896 5.02982 8.22738 5.09587 7.81829 5.09587C7.21744 5.09587 6.73378 4.97016 6.3673 4.71874C6.00082 4.46519 5.78243 4.11256 5.71211 3.66086L6.84031 3.55219C6.89145 3.77378 7.00011 3.94104 7.1663 4.05397C7.3325 4.16689 7.54876 4.22336 7.8151 4.22336C8.08995 4.22336 8.31048 4.16689 8.47667 4.05397C8.645 3.94104 8.72916 3.80148 8.72916 3.63529C8.72916 3.49466 8.67483 3.37854 8.56616 3.28692C8.45963 3.1953 8.29344 3.12499 8.06758 3.07598L7.23023 2.9002C6.75934 2.80219 6.41098 2.63706 6.18513 2.40482C5.95927 2.17044 5.84741 1.87428 5.84954 1.51632C5.84741 1.21377 5.92944 0.951694 6.09564 0.730103C6.26396 0.506381 6.49727 0.333796 6.79557 0.212347C7.09599 0.0887672 7.44223 0.0269775 7.83427 0.0269775C8.40956 0.0269775 8.86233 0.149492 9.19258 0.39452C9.52497 0.639549 9.73058 0.97087 9.80941 1.38848Z",
						fill: "currentColor",
					}),
					v("path", {
						d: "M13.0102 5.09587C12.5202 5.09587 12.0994 4.98827 11.7478 4.77307C11.3984 4.55787 11.1288 4.26064 10.9392 3.88138C10.7517 3.49999 10.658 3.06107 10.658 2.56462C10.658 2.06604 10.7538 1.62605 10.9456 1.24466C11.1374 0.861139 11.408 0.562844 11.7574 0.349776C12.109 0.134577 12.5244 0.0269775 13.0038 0.0269775C13.4023 0.0269775 13.7549 0.100486 14.0617 0.247503C14.3707 0.392389 14.6168 0.598 14.8 0.864336C14.9832 1.12854 15.0876 1.43749 15.1132 1.79118H14.0074C13.9626 1.55468 13.8561 1.35759 13.6878 1.19992C13.5216 1.04012 13.2989 0.960216 13.0198 0.960216C12.7833 0.960216 12.5756 1.02414 12.3966 1.15198C12.2176 1.27769 12.0781 1.4588 11.9779 1.6953C11.8799 1.93181 11.8309 2.21519 11.8309 2.54544C11.8309 2.87996 11.8799 3.1676 11.9779 3.40837C12.0759 3.64701 12.2134 3.83131 12.3902 3.96128C12.5692 4.08912 12.7791 4.15304 13.0198 4.15304C13.1903 4.15304 13.3426 4.12108 13.4769 4.05716C13.6132 3.99111 13.7272 3.8963 13.8188 3.77272C13.9104 3.64914 13.9733 3.49892 14.0074 3.32208H15.1132C15.0855 3.66938 14.9832 3.97726 14.8064 4.24573C14.6295 4.51206 14.3888 4.72087 14.0841 4.87215C13.7794 5.0213 13.4215 5.09587 13.0102 5.09587Z",
						fill: "currentColor",
					}),
				],
			}),
		ul = () =>
			v("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16",
				height: "16",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				class: "feather feather-arrow-down",
				"aria-label": "Arrow down",
				role: "img",
				children: [
					v("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
					v("polyline", { points: "19 12 12 19 5 12" }),
				],
			}),
		dl = () =>
			v("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16",
				height: "16",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				class: "feather feather-arrow-up",
				"aria-label": "Arrow up",
				role: "img",
				children: [
					v("line", { x1: "12", y1: "19", x2: "12", y2: "5" }),
					v("polyline", { points: "5 12 12 5 19 12" }),
				],
			}),
		fl = () =>
			v("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16",
				height: "16",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				class: "feather feather-corner-down-left",
				"aria-label": "Enter key",
				role: "img",
				children: [
					v("polyline", { points: "9 10 4 15 9 20" }),
					v("path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }),
				],
			}),
		hl = () =>
			v("svg", {
				width: "70",
				height: "17",
				viewBox: "0 0 4053 1000",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: [
					v("g", {
						"clip-path": "url(#clip0_411_495)",
						children: [
							v("path", {
								d: "M3780.21 720.75C3853.81 720.75 3922.39 690.642 3933.26 643.807C3936.61 673.915 3953.33 696.496 3977.59 708.205C3999.33 719.077 4026.1 720.75 4052.02 710.714V635.444C4041.15 637.953 4029.44 638.789 4020.24 631.262C4011.04 623.735 4004.35 607.008 4004.35 576.064V428.032C4004.35 336.871 3935.77 280 3816.18 280C3712.47 280 3633.85 322.653 3623.82 387.051L3704.11 410.469C3710.8 377.852 3750.1 355.27 3811.16 355.27C3869.7 355.27 3915.7 374.506 3915.7 406.287C3915.7 436.395 3873.88 450.613 3770.18 458.14C3671.49 465.667 3611.27 513.338 3611.27 590.281C3611.27 666.388 3670.65 720.75 3780.21 720.75ZM3780.21 646.316C3730.87 646.316 3700.76 625.408 3700.76 591.118C3700.76 558.5 3729.2 535.919 3775.19 532.574C3852.97 527.556 3900.65 518.356 3916.54 499.957C3916.54 588.609 3859.66 646.316 3780.21 646.316Z",
								fill: "#302F33",
							}),
							v("path", {
								d: "M3358.14 282.79C3293.28 282.79 3234.66 313.374 3205.75 360.427C3183.08 311.022 3131.5 283.574 3076.01 282.79C3020.53 282.79 2973.64 311.021 2948.63 355.722V294.553H2864.22V709.881H2950.19V482.764C2950.19 410.617 2993.96 363.564 3056.48 363.564C3115.87 363.564 3153.38 407.48 3153.38 480.412V709.881H3239.35V481.196C3239.35 409.832 3282.34 363.564 3344.86 363.564C3403.47 363.564 3440.98 404.343 3440.98 478.843V709.881H3526.95V464.727C3526.95 409.048 3511.32 364.348 3480.06 332.195C3449.58 299.258 3408.94 282.79 3358.14 282.79Z",
								fill: "#302F33",
							}),
							v("path", {
								d: "M1420.97 720.75C1554.79 720.75 1645.11 630.426 1645.11 497.448C1645.11 365.306 1556.46 280.836 1420.97 280.836C1285.49 280.836 1196 366.143 1196 497.448C1196 630.426 1288 720.75 1420.97 720.75ZM1420.97 640.462C1340.69 640.462 1285.49 581.082 1285.49 497.448C1285.49 414.65 1339.01 361.125 1420.97 361.125C1503.77 361.125 1555.63 414.65 1555.63 497.448C1555.63 581.918 1501.26 640.462 1420.97 640.462Z",
								fill: "#302F33",
							}),
							v("path", {
								d: "M2040.54 280C1971.13 280 1911.75 308.435 1874.95 356.107V285.854H1747.83V358.616H1873.28C1848.19 392.069 1833.97 434.722 1833.97 484.066V637.116H1750.34V709.878H2033.02V637.116H1924.29V481.557C1924.29 414.65 1975.31 364.47 2040.54 364.47C2093.23 364.47 2127.52 398.76 2137.56 441.413L2219.52 412.141C2201.96 332.689 2135.05 280 2040.54 280Z",
								fill: "#302F33",
							}),
							v("path", {
								d: "M2484.85 720.75C2558.45 720.75 2627.03 690.642 2637.9 643.807C2641.24 673.915 2657.97 696.496 2682.22 708.205C2703.97 719.077 2730.73 720.75 2756.66 710.714V635.444C2745.79 637.953 2734.08 638.789 2724.88 631.262C2715.68 623.735 2708.99 607.008 2708.99 576.064V428.032C2708.99 336.871 2640.41 280 2520.81 280C2417.11 280 2338.49 322.653 2328.45 387.051L2408.74 410.469C2415.43 377.852 2454.74 355.27 2515.79 355.27C2574.34 355.27 2620.34 374.506 2620.34 406.287C2620.34 436.395 2578.52 450.613 2474.81 458.14C2376.12 465.667 2315.91 513.338 2315.91 590.281C2315.91 666.388 2375.29 720.75 2484.85 720.75ZM2484.85 646.316C2435.5 646.316 2405.4 625.408 2405.4 591.118C2405.4 558.5 2433.83 535.919 2479.83 532.574C2557.61 527.556 2605.28 518.356 2621.17 499.957C2621.17 588.609 2564.3 646.316 2484.85 646.316Z",
								fill: "#302F33",
							}),
							v("g", {
								"clip-path": "url(#clip1_411_495)",
								children: [
									v("path", {
										d: "M886.945 188.609C879.451 178.506 871.573 168.705 863.331 159.229L863.775 171.286L872.09 189.163L886.945 188.609Z",
										fill: "#FB81B8",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M504.709 255.392C541.187 222.997 591.634 206.618 640.387 208.869C668.233 210.154 693.209 217.294 713.774 229.126C731.536 238.656 749.367 256.14 764.05 276.595C789.931 299.189 828.831 301.972 858.017 281.145C892.139 256.795 900.062 209.393 875.713 175.27C820.526 97.9295 732.911 61.1705 647.387 57.2225C561.965 53.2792 471.506 81.3841 402.995 142.698C402.765 142.904 402.536 143.112 402.309 143.32C266.657 265.25 255.101 474.187 376.885 610.276C404.84 641.514 452.824 644.175 484.061 616.22C515.298 588.264 517.958 540.278 490.004 509.04C424 435.284 430.342 321.901 504.138 255.908C504.329 255.737 504.519 255.565 504.709 255.392Z",
										fill: "url(#paint0_linear_411_495)",
									}),
									v("mask", {
										id: "mask0_411_495",
										style: "mask-type:alpha",
										maskUnits: "userSpaceOnUse",
										x: "292",
										y: "56",
										width: "598",
										height: "580",
										children: v("path", {
											"fill-rule": "evenodd",
											"clip-rule": "evenodd",
											d: "M504.731 255.373C541.207 222.99 591.644 206.618 640.389 208.868C668.234 210.153 693.21 217.293 713.775 229.125C731.537 238.655 749.368 256.139 764.051 276.594C789.932 299.188 828.832 301.972 858.018 281.144C892.14 256.794 900.063 209.392 875.714 175.269C820.527 97.9285 732.912 61.1696 647.388 57.2215C561.966 53.2782 471.507 81.3831 402.996 142.697C402.756 142.912 402.518 143.128 402.281 143.345C266.656 265.279 255.11 474.197 376.886 610.276C404.84 641.514 452.824 644.175 484.061 616.22C515.298 588.264 517.959 540.278 490.004 509.04C424.001 435.284 430.342 321.901 504.138 255.908C504.337 255.73 504.534 255.552 504.731 255.373Z",
											fill: "url(#paint1_linear_411_495)",
										}),
									}),
									v("g", {
										mask: "url(#mask0_411_495)",
										children: v("g", {
											style: "mix-blend-mode:multiply",
											children: v("path", {
												d: "M407.426 80.4387L149.573 332.589L620.768 405.837L810.398 256.952V157.084L407.426 80.4387Z",
												fill: "url(#paint2_linear_411_495)",
											}),
										}),
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M273.468 135.438C301.411 166.687 298.731 214.672 267.483 242.615C124.643 370.349 112.404 589.651 240.141 732.506C268.083 763.755 265.403 811.74 234.155 839.683C202.907 867.626 154.924 864.946 126.982 833.697C-56.6307 628.353 -39.0496 313.08 166.295 129.452C197.543 101.509 245.526 104.189 273.468 135.438Z",
										fill: "url(#paint3_linear_411_495)",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M132.968 726.521C164.216 698.578 212.199 701.258 240.141 732.507C367.87 875.353 587.165 887.591 730.014 759.85C761.262 731.907 809.245 734.587 837.187 765.836C865.129 797.085 862.449 845.07 831.201 873.013C625.865 1056.63 310.603 1039.05 126.982 833.698C99.0403 802.449 101.72 754.464 132.968 726.521Z",
										fill: "url(#paint4_linear_411_495)",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M817.382 216.307C853.599 195.199 900.07 207.449 921.177 243.667C1036.3 441.208 1013.4 710.095 831.275 872.995C800.031 900.943 752.048 898.269 724.102 867.023C696.156 835.777 698.829 787.792 730.074 759.845C852.579 650.268 872.967 462.432 790.023 320.106C768.916 283.888 781.165 237.415 817.382 216.307Z",
										fill: "url(#paint5_linear_411_495)",
									}),
									v("mask", {
										id: "mask1_411_495",
										style: "mask-type:alpha",
										maskUnits: "userSpaceOnUse",
										x: "704",
										y: "205",
										width: "288",
										height: "688",
										children: v("path", {
											"fill-rule": "evenodd",
											"clip-rule": "evenodd",
											d: "M817.382 216.307C853.599 195.199 900.07 207.448 921.177 243.667C1036.3 441.207 1013.4 710.094 831.275 872.995C800.031 900.942 752.048 898.268 724.102 867.022C696.156 835.777 698.829 787.792 730.074 759.845C852.579 650.267 872.967 462.431 790.023 320.105C768.916 283.887 781.165 237.415 817.382 216.307Z",
											fill: "url(#paint6_linear_411_495)",
										}),
									}),
									v("g", {
										mask: "url(#mask1_411_495)",
										children: v("g", {
											style: "mix-blend-mode:multiply",
											children: v("path", {
												d: "M787.171 527.842L533.284 792.631L905.437 898.538L1065 514.67L854.752 57.4146L835.979 439.402L787.171 527.842Z",
												fill: "url(#paint7_linear_411_495)",
											}),
										}),
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M832.644 128.021L854.834 152.579L877.089 177.137C876.539 176.313 875.953 175.46 875.334 174.583L877.382 176.781C876.461 175.564 874.762 173.442 872.505 170.714C862.348 157.239 846.17 139.694 832.644 128.021Z",
										fill: "#F97CBF",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M382.919 503.08C414.166 475.137 462.149 477.816 490.092 509.065C556.082 582.864 669.461 589.206 743.214 523.199C774.451 495.244 822.435 497.905 850.39 529.143C878.344 560.381 875.683 608.367 844.447 636.323C708.149 758.303 498.777 746.518 376.934 610.258C348.992 579.009 351.671 531.024 382.919 503.08Z",
										fill: "url(#paint8_linear_411_495)",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M870.494 168.74C842.54 137.502 794.556 134.841 763.319 162.796C736.269 187.004 730.648 226.233 747.78 256.6C757.201 266.774 765.958 278.485 773.449 290.8C821.69 363.767 810.393 463.057 743.242 523.108C711.994 551.051 709.315 599.036 737.257 630.285C765.2 661.534 813.183 664.214 844.43 636.27C980.686 514.423 992.47 305.043 870.494 168.74Z",
										fill: "url(#paint9_linear_411_495)",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M741.442 250.089C634.37 124.866 409.641 115.57 267.487 242.69C236.239 270.633 188.256 267.953 160.313 236.704C132.371 205.455 135.051 157.47 166.299 129.527C367.108 -50.0447 710.265 -50.0492 875.122 174.519C899.929 208.311 892.646 255.815 858.855 280.623C829.712 302.019 790.37 299.544 764.185 276.781C757.204 267.034 749.507 257.958 741.442 250.089Z",
										fill: "url(#paint10_linear_411_495)",
									}),
								],
							}),
						],
					}),
					v("defs", {
						children: [
							v("linearGradient", {
								id: "paint0_linear_411_495",
								x1: "412.101",
								y1: "502.363",
								x2: "463.265",
								y2: "173.461",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#F6D25B" }),
									v("stop", { offset: "1", "stop-color": "#F8B580" }),
								],
							}),
							v("linearGradient", {
								id: "paint1_linear_411_495",
								x1: "412.102",
								y1: "502.363",
								x2: "463.266",
								y2: "173.46",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#F6D25B" }),
									v("stop", { offset: "1", "stop-color": "#F8B580" }),
								],
							}),
							v("linearGradient", {
								id: "paint2_linear_411_495",
								x1: "641.4",
								y1: "18.4142",
								x2: "346.724",
								y2: "358.578",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#895200" }),
									v("stop", {
										offset: "0.833333",
										"stop-color": "#E28800",
										"stop-opacity": "0",
									}),
								],
							}),
							v("linearGradient", {
								id: "paint3_linear_411_495",
								x1: "146.395",
								y1: "186.033",
								x2: "182.872",
								y2: "719.825",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#ED51F2" }),
									v("stop", { offset: "1", "stop-color": "#B771F2" }),
								],
							}),
							v("linearGradient", {
								id: "paint4_linear_411_495",
								x1: "145.334",
								y1: "750.869",
								x2: "711.325",
								y2: "784.954",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#B971F3" }),
									v("stop", { offset: "1", "stop-color": "#8F6FDE" }),
								],
							}),
							v("linearGradient", {
								id: "paint5_linear_411_495",
								x1: "850.621",
								y1: "326.396",
								x2: "762.953",
								y2: "845.166",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#6A4BB2" }),
									v("stop", { offset: "1", "stop-color": "#9170E0" }),
								],
							}),
							v("linearGradient", {
								id: "paint6_linear_411_495",
								x1: "850.621",
								y1: "279.436",
								x2: "748.292",
								y2: "838.57",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#6A4BB2" }),
									v("stop", { offset: "1", "stop-color": "#9170E0" }),
								],
							}),
							v("linearGradient", {
								id: "paint7_linear_411_495",
								x1: "725.222",
								y1: "493.971",
								x2: "857.14",
								y2: "772.221",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#542DA7" }),
									v("stop", {
										offset: "0.833333",
										"stop-color": "#5F2EAF",
										"stop-opacity": "0",
									}),
								],
							}),
							v("linearGradient", {
								id: "paint8_linear_411_495",
								x1: "452.299",
								y1: "506.015",
								x2: "711.758",
								y2: "579.099",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#F6D25B" }),
									v("stop", { offset: "1", "stop-color": "#F9A38F" }),
								],
							}),
							v("linearGradient", {
								id: "paint9_linear_411_495",
								x1: "825.466",
								y1: "303.379",
								x2: "836.377",
								y2: "579.688",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#FA80B7" }),
									v("stop", { offset: "1", "stop-color": "#F8A48D" }),
								],
							}),
							v("linearGradient", {
								id: "paint10_linear_411_495",
								x1: "236.692",
								y1: "166.152",
								x2: "795.806",
								y2: "195.386",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#E755F3" }),
									v("stop", { offset: "1", "stop-color": "#F97FB6" }),
								],
							}),
							v("clipPath", {
								id: "clip0_411_495",
								children: v("rect", {
									width: "4053",
									height: "1000",
									fill: "white",
								}),
							}),
							v("clipPath", {
								id: "clip1_411_495",
								children: v("rect", {
									width: "991.962",
									height: "1000",
									fill: "white",
								}),
							}),
						],
					}),
				],
			}),
		_l = () =>
			v("svg", {
				width: "70",
				height: "17",
				viewBox: "0 0 4053 1000",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: [
					v("g", {
						"clip-path": "url(#clip0_201_3133)",
						children: [
							v("path", {
								d: "M3780.21 720.75C3853.81 720.75 3922.39 690.642 3933.26 643.807C3936.61 673.915 3953.33 696.496 3977.59 708.205C3999.33 719.077 4026.1 720.75 4052.02 710.714V635.444C4041.15 637.953 4029.44 638.789 4020.24 631.262C4011.04 623.735 4004.35 607.008 4004.35 576.064V428.032C4004.35 336.871 3935.77 280 3816.18 280C3712.47 280 3633.85 322.653 3623.82 387.051L3704.11 410.469C3710.8 377.852 3750.1 355.27 3811.16 355.27C3869.7 355.27 3915.7 374.506 3915.7 406.287C3915.7 436.395 3873.88 450.613 3770.18 458.14C3671.49 465.667 3611.27 513.338 3611.27 590.281C3611.27 666.388 3670.65 720.75 3780.21 720.75ZM3780.21 646.316C3730.87 646.316 3700.76 625.408 3700.76 591.118C3700.76 558.5 3729.2 535.919 3775.19 532.574C3852.97 527.556 3900.65 518.356 3916.54 499.957C3916.54 588.609 3859.66 646.316 3780.21 646.316Z",
								fill: "#EFEDF0",
							}),
							v("path", {
								d: "M3358.14 282.79C3293.28 282.79 3234.66 313.374 3205.75 360.427C3183.08 311.022 3131.5 283.574 3076.01 282.79C3020.53 282.79 2973.64 311.022 2948.63 355.722V294.553H2864.22V709.881H2950.19V482.764C2950.19 410.617 2993.96 363.564 3056.48 363.564C3115.87 363.564 3153.38 407.48 3153.38 480.412V709.881H3239.35V481.196C3239.35 409.832 3282.34 363.564 3344.86 363.564C3403.47 363.564 3440.98 404.343 3440.98 478.843V709.881H3526.95V464.727C3526.95 409.048 3511.32 364.348 3480.06 332.195C3449.58 299.258 3408.94 282.79 3358.14 282.79Z",
								fill: "#EFEDF0",
							}),
							v("path", {
								d: "M1420.97 720.75C1554.79 720.75 1645.11 630.426 1645.11 497.448C1645.11 365.306 1556.46 280.836 1420.97 280.836C1285.49 280.836 1196 366.143 1196 497.448C1196 630.426 1288 720.75 1420.97 720.75ZM1420.97 640.462C1340.69 640.462 1285.49 581.082 1285.49 497.448C1285.49 414.65 1339.01 361.125 1420.97 361.125C1503.77 361.125 1555.63 414.65 1555.63 497.448C1555.63 581.918 1501.26 640.462 1420.97 640.462Z",
								fill: "#EFEDF0",
							}),
							v("path", {
								d: "M2040.54 280C1971.13 280 1911.75 308.435 1874.95 356.107V285.854H1747.83V358.616H1873.28C1848.19 392.069 1833.97 434.722 1833.97 484.066V637.116H1750.34V709.878H2033.02V637.116H1924.29V481.557C1924.29 414.65 1975.31 364.47 2040.54 364.47C2093.23 364.47 2127.52 398.76 2137.56 441.413L2219.52 412.141C2201.96 332.689 2135.05 280 2040.54 280Z",
								fill: "#EFEDF0",
							}),
							v("path", {
								d: "M2484.85 720.75C2558.45 720.75 2627.03 690.642 2637.9 643.807C2641.24 673.915 2657.97 696.496 2682.22 708.205C2703.97 719.077 2730.73 720.75 2756.66 710.714V635.444C2745.79 637.953 2734.08 638.789 2724.88 631.262C2715.68 623.735 2708.99 607.008 2708.99 576.064V428.032C2708.99 336.871 2640.41 280 2520.81 280C2417.11 280 2338.49 322.653 2328.45 387.051L2408.74 410.469C2415.43 377.852 2454.74 355.27 2515.79 355.27C2574.34 355.27 2620.34 374.506 2620.34 406.287C2620.34 436.395 2578.52 450.613 2474.81 458.14C2376.12 465.667 2315.91 513.338 2315.91 590.281C2315.91 666.388 2375.29 720.75 2484.85 720.75ZM2484.85 646.316C2435.5 646.316 2405.4 625.408 2405.4 591.118C2405.4 558.5 2433.83 535.919 2479.83 532.574C2557.61 527.556 2605.28 518.356 2621.17 499.957C2621.17 588.609 2564.3 646.316 2484.85 646.316Z",
								fill: "#EFEDF0",
							}),
							v("g", {
								"clip-path": "url(#clip1_201_3133)",
								children: [
									v("path", {
										d: "M886.945 188.609C879.451 178.506 871.573 168.705 863.331 159.229L863.775 171.286L872.09 189.163L886.945 188.609Z",
										fill: "#FB81B8",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M504.709 255.392C541.187 222.997 591.634 206.618 640.387 208.869C668.233 210.154 693.209 217.294 713.774 229.126C731.536 238.656 749.367 256.14 764.05 276.595C789.931 299.189 828.831 301.972 858.017 281.145C892.139 256.795 900.062 209.393 875.713 175.27C820.526 97.9295 732.911 61.1705 647.387 57.2225C561.965 53.2791 471.506 81.384 402.995 142.698C402.765 142.904 402.536 143.112 402.309 143.32C266.657 265.25 255.101 474.187 376.885 610.276C404.84 641.514 452.824 644.175 484.061 616.22C515.298 588.264 517.958 540.278 490.004 509.04C424 435.284 430.342 321.901 504.138 255.908C504.329 255.737 504.519 255.565 504.709 255.392Z",
										fill: "url(#paint0_linear_201_3133)",
									}),
									v("mask", {
										id: "mask0_201_3133",
										style: "mask-type:alpha",
										maskUnits: "userSpaceOnUse",
										x: "292",
										y: "56",
										width: "598",
										height: "580",
										children: v("path", {
											"fill-rule": "evenodd",
											"clip-rule": "evenodd",
											d: "M504.731 255.373C541.207 222.99 591.644 206.618 640.389 208.868C668.234 210.153 693.21 217.293 713.775 229.126C731.537 238.655 749.368 256.139 764.051 276.594C789.932 299.188 828.832 301.972 858.018 281.144C892.14 256.794 900.063 209.392 875.714 175.269C820.527 97.9286 732.912 61.1696 647.388 57.2216C561.966 53.2782 471.507 81.3831 402.996 142.697C402.756 142.912 402.518 143.128 402.281 143.345C266.656 265.279 255.11 474.197 376.886 610.276C404.84 641.514 452.824 644.175 484.061 616.22C515.298 588.264 517.959 540.278 490.004 509.04C424.001 435.284 430.342 321.901 504.138 255.908C504.337 255.73 504.534 255.552 504.731 255.373Z",
											fill: "url(#paint1_linear_201_3133)",
										}),
									}),
									v("g", {
										mask: "url(#mask0_201_3133)",
										children: v("g", {
											style: "mix-blend-mode:multiply",
											children: v("path", {
												d: "M407.426 80.4387L149.573 332.589L620.768 405.837L810.398 256.952V157.084L407.426 80.4387Z",
												fill: "url(#paint2_linear_201_3133)",
											}),
										}),
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M273.468 135.438C301.411 166.687 298.731 214.672 267.483 242.615C124.643 370.348 112.404 589.651 240.141 732.506C268.083 763.755 265.403 811.74 234.155 839.683C202.907 867.626 154.924 864.946 126.982 833.697C-56.6307 628.353 -39.0496 313.08 166.295 129.452C197.543 101.509 245.526 104.189 273.468 135.438Z",
										fill: "url(#paint3_linear_201_3133)",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M132.968 726.521C164.216 698.578 212.199 701.258 240.141 732.507C367.87 875.353 587.165 887.591 730.014 759.85C761.262 731.907 809.245 734.587 837.187 765.836C865.129 797.085 862.449 845.07 831.201 873.013C625.865 1056.63 310.603 1039.05 126.982 833.698C99.0403 802.449 101.72 754.464 132.968 726.521Z",
										fill: "url(#paint4_linear_201_3133)",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M817.382 216.307C853.599 195.199 900.07 207.449 921.177 243.667C1036.3 441.208 1013.4 710.095 831.275 872.995C800.031 900.943 752.048 898.269 724.102 867.023C696.156 835.777 698.829 787.792 730.074 759.845C852.579 650.268 872.967 462.432 790.023 320.106C768.916 283.888 781.165 237.415 817.382 216.307Z",
										fill: "url(#paint5_linear_201_3133)",
									}),
									v("mask", {
										id: "mask1_201_3133",
										style: "mask-type:alpha",
										maskUnits: "userSpaceOnUse",
										x: "704",
										y: "205",
										width: "288",
										height: "688",
										children: v("path", {
											"fill-rule": "evenodd",
											"clip-rule": "evenodd",
											d: "M817.382 216.307C853.599 195.199 900.07 207.448 921.177 243.667C1036.3 441.207 1013.4 710.094 831.275 872.995C800.031 900.942 752.048 898.268 724.102 867.022C696.156 835.777 698.829 787.792 730.074 759.845C852.579 650.267 872.967 462.431 790.023 320.105C768.916 283.887 781.165 237.415 817.382 216.307Z",
											fill: "url(#paint6_linear_201_3133)",
										}),
									}),
									v("g", {
										mask: "url(#mask1_201_3133)",
										children: v("g", {
											style: "mix-blend-mode:multiply",
											children: v("path", {
												d: "M787.171 527.842L533.284 792.631L905.437 898.538L1065 514.67L854.752 57.4146L835.979 439.402L787.171 527.842Z",
												fill: "url(#paint7_linear_201_3133)",
											}),
										}),
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M832.644 128.021L854.834 152.579L877.089 177.137C876.539 176.313 875.953 175.46 875.334 174.583L877.382 176.781C876.461 175.564 874.762 173.442 872.505 170.714C862.348 157.239 846.17 139.694 832.644 128.021Z",
										fill: "#F97CBF",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M382.919 503.08C414.166 475.137 462.149 477.816 490.092 509.065C556.082 582.864 669.461 589.205 743.214 523.199C774.451 495.244 822.435 497.905 850.39 529.143C878.344 560.381 875.683 608.367 844.447 636.322C708.149 758.303 498.777 746.518 376.934 610.257C348.992 579.009 351.671 531.024 382.919 503.08Z",
										fill: "url(#paint8_linear_201_3133)",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M870.494 168.74C842.54 137.502 794.556 134.841 763.319 162.796C736.269 187.004 730.648 226.233 747.78 256.599C757.201 266.774 765.958 278.484 773.449 290.8C821.69 363.767 810.393 463.057 743.242 523.108C711.994 551.051 709.315 599.036 737.257 630.285C765.2 661.534 813.183 664.214 844.43 636.27C980.686 514.423 992.47 305.042 870.494 168.74Z",
										fill: "url(#paint9_linear_201_3133)",
									}),
									v("path", {
										"fill-rule": "evenodd",
										"clip-rule": "evenodd",
										d: "M741.442 250.089C634.37 124.866 409.641 115.57 267.487 242.69C236.239 270.633 188.256 267.953 160.313 236.704C132.371 205.455 135.051 157.47 166.299 129.527C367.108 -50.0447 710.265 -50.0492 875.122 174.519C899.929 208.311 892.646 255.815 858.855 280.623C829.712 302.019 790.37 299.544 764.185 276.781C757.204 267.034 749.507 257.958 741.442 250.089Z",
										fill: "url(#paint10_linear_201_3133)",
									}),
								],
							}),
						],
					}),
					v("defs", {
						children: [
							v("linearGradient", {
								id: "paint0_linear_201_3133",
								x1: "412.101",
								y1: "502.363",
								x2: "463.265",
								y2: "173.461",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#F6D25B" }),
									v("stop", { offset: "1", "stop-color": "#F8B580" }),
								],
							}),
							v("linearGradient", {
								id: "paint1_linear_201_3133",
								x1: "412.102",
								y1: "502.363",
								x2: "463.266",
								y2: "173.46",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#F6D25B" }),
									v("stop", { offset: "1", "stop-color": "#F8B580" }),
								],
							}),
							v("linearGradient", {
								id: "paint2_linear_201_3133",
								x1: "641.4",
								y1: "18.4142",
								x2: "346.724",
								y2: "358.578",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#895200" }),
									v("stop", {
										offset: "0.833333",
										"stop-color": "#E28800",
										"stop-opacity": "0",
									}),
								],
							}),
							v("linearGradient", {
								id: "paint3_linear_201_3133",
								x1: "146.395",
								y1: "186.033",
								x2: "182.872",
								y2: "719.825",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#ED51F2" }),
									v("stop", { offset: "1", "stop-color": "#B771F2" }),
								],
							}),
							v("linearGradient", {
								id: "paint4_linear_201_3133",
								x1: "145.334",
								y1: "750.869",
								x2: "711.325",
								y2: "784.954",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#B971F3" }),
									v("stop", { offset: "1", "stop-color": "#8F6FDE" }),
								],
							}),
							v("linearGradient", {
								id: "paint5_linear_201_3133",
								x1: "850.621",
								y1: "326.396",
								x2: "762.953",
								y2: "845.166",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#6A4BB2" }),
									v("stop", { offset: "1", "stop-color": "#9170E0" }),
								],
							}),
							v("linearGradient", {
								id: "paint6_linear_201_3133",
								x1: "850.621",
								y1: "279.436",
								x2: "748.292",
								y2: "838.57",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#6A4BB2" }),
									v("stop", { offset: "1", "stop-color": "#9170E0" }),
								],
							}),
							v("linearGradient", {
								id: "paint7_linear_201_3133",
								x1: "725.222",
								y1: "493.971",
								x2: "857.14",
								y2: "772.221",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#542DA7" }),
									v("stop", {
										offset: "0.833333",
										"stop-color": "#5F2EAF",
										"stop-opacity": "0",
									}),
								],
							}),
							v("linearGradient", {
								id: "paint8_linear_201_3133",
								x1: "452.299",
								y1: "506.015",
								x2: "711.758",
								y2: "579.099",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#F6D25B" }),
									v("stop", { offset: "1", "stop-color": "#F9A38F" }),
								],
							}),
							v("linearGradient", {
								id: "paint9_linear_201_3133",
								x1: "825.466",
								y1: "303.379",
								x2: "836.377",
								y2: "579.688",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#FA80B7" }),
									v("stop", { offset: "1", "stop-color": "#F8A48D" }),
								],
							}),
							v("linearGradient", {
								id: "paint10_linear_201_3133",
								x1: "236.692",
								y1: "166.152",
								x2: "795.806",
								y2: "195.386",
								gradientUnits: "userSpaceOnUse",
								children: [
									v("stop", { "stop-color": "#E755F3" }),
									v("stop", { offset: "1", "stop-color": "#F97FB6" }),
								],
							}),
							v("clipPath", {
								id: "clip0_201_3133",
								children: v("rect", {
									width: "4053",
									height: "1000",
									fill: "white",
								}),
							}),
							v("clipPath", {
								id: "clip1_201_3133",
								children: v("rect", {
									width: "991.962",
									height: "1000",
									fill: "white",
								}),
							}),
						],
					}),
				],
			}),
		Be = {
			footer: "zyLzu1E9cZyo3xMlzI5v",
			footer__keyboardList: "hpZGwNlaE0VDNKpH3UXQ",
			footer__poweredBy: "S3Y0QqeSvbGqf2zlCdoo",
			footer__commandKey: "ll7DnKtzbhcbw99SdBmZ",
			footer__keyboardCommand: "EBx49sgrwYoQnLicYz3w",
			footer__logoContainer: "fXBwT5qZOjPV8wiyx39H",
		};
	function pl() {
		const e = new URL("https://oramasearch.com"),
			t = window.location.hostname,
			{ value: n } = nt(zt).value;
		return (
			["localhost", "127.0.0.1"].includes(t) ||
				e.searchParams.set("utm_source", t),
			v(qe, {
				children: v("footer", {
					class: Be.footer,
					children: [
						v("div", {
							children: v("ul", {
								class: Be.footer__keyboardList,
								children: [
									v("li", {
										class: Be.footer__keyboardCommand,
										children: [
											v("kbd", {
												class: Be.footer__commandKey,
												children: v(fl, {}),
											}),
											v("span", { children: "to select" }),
										],
									}),
									v("li", {
										class: Be.footer__keyboardCommand,
										children: [
											v("kbd", {
												class: Be.footer__commandKey,
												children: v(ul, {}),
											}),
											v("kbd", {
												class: Be.footer__commandKey,
												children: v(dl, {}),
											}),
											v("span", { children: "to navigate" }),
										],
									}),
									v("li", {
										class: Be.footer__keyboardCommand,
										children: [
											v("kbd", {
												class: Be.footer__commandKey,
												children: v(cl, {}),
											}),
											v("span", { children: "to close" }),
										],
									}),
								],
							}),
						}),
						v("div", {
							class: Be.footer__logoContainer,
							children: [
								v("span", {
									class: Be.footer__poweredBy,
									children: "Powered by ",
								}),
								v("a", {
									href: e.toString(),
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Orama",
									children: n === "light" ? v(hl, {}) : v(_l, {}),
								}),
							],
						}),
					],
				}),
			})
		);
	}
	const vl = (e, t) => {
			qt(() => {
				const n = e == null ? void 0 : e.current;
				function o(s) {
					n != null && !n.contains(s.target) && t();
				}
				return (
					document.addEventListener("mousedown", o),
					() => {
						document.removeEventListener("mousedown", o);
					}
				);
			}, [e, t]);
		},
		Vs = "#D4D4D8",
		ml = "#a1a1aa",
		gl = "#71717A",
		Bs = "#27272A",
		bl = {
			ui: {
				theme: {
					light: {
						"--text-color-primary": "#54525B",
						"--text-color-secondary": "#302F33",
						"--text-color-tertiary": "#6D6B74",
						"--text-color-fourth": "#a1a1aa",
						"--text-color-inactive": "#6D6B74",
						"--text-color-accent-secondary": "#5B34AB",
						"--background-color-primary": "#FFFFFF",
						"--background-color-secondary": "#FAFAFF",
						"--background-color-tertiary": "#F6F2FF",
						"--border-color-primary": "#CCD5E0",
						"--border-color-accent": "#5B34AB",
						"--icon-color-primary": "#54525B",
						"--icon-color-tertiary": "#6D6B74",
					},
					dark: {
						"--text-color-primary": `${Vs}`,
						"--text-color-secondary": `${gl}`,
						"--text-color-tertiary": `${ml}`,
						"--background-color-primary": "#09090B",
						"--background-color-secondary": "#18181B",
						"--background-color-tertiary": `${Bs}`,
						"--border-color-primary": `${Bs}`,
						"--icon-color-primary": `${Vs}`,
					},
				},
				layout: {
					area: {
						header: {},
						footer: { keyboardInstructions: !0, poweredBy: "orama" },
					},
				},
				placeholder: "Search for something...",
			},
		},
		xn = {
			searchbox_container: "c6BWO32WVfAv2Wl61VdJ",
			searchbox: "PahUk8hAFxpt53orsQ4g",
			backdrop: "q1zAUHCAEMZcxB3WJzMd",
		};
	function yl() {
		const e = nt(ht).value,
			t = nt(zt).value,
			n = nt(bn).value,
			o = nt(tt).value,
			s = In(null);
		vl(s, () => {
			(tt.value = !1), (Me.value = "");
		});
		const r = Ya(bl.ui.theme[t.value]),
			a = v("style", {
				children: `
      :root {
        ${r}
        --font-primary: 'Inter', sans-serif;
        font-size: 100%;
      }
    `,
			});
		if (e.value == null)
			return v(qe, {
				children: [a, v("div", { children: "Loading Searchbox..." })],
			});
		const c = (u) => {
			var m;
			let h = 0;
			if (
				(u.key === "ArrowDown" &&
					(u.preventDefault(),
					(h = (n.value + 1) % 11 === 0 ? 1 : (n.value + 1) % 11)),
				u.key === "ArrowUp" &&
					(u.preventDefault(),
					(h = (n.value + 10) % 11 === 0 ? 10 : (n.value + 10) % 11)),
				u.key === "Enter")
			) {
				u.preventDefault();
				const f =
					(m = document.querySelector("orama-searchbox")) == null
						? void 0
						: m.querySelector('[data-current-item="true"]');
				f != null && f.click();
			}
			bn.value = h;
		};
		return (
			qt(
				() => (
					document.addEventListener("keydown", (u) => {
						u.key === "Escape" && ((tt.value = !1), (Me.value = "")),
							u.key === "k" && (u.ctrlKey || u.metaKey) && (tt.value = !0);
					}),
					() => {
						document.removeEventListener("keydown", () => {});
					}
				),
				[],
			),
			o.value
				? v(qe, {
						children: [
							a,
							v("div", {
								class: xn.searchbox_container,
								children: [
									v("div", { class: xn.backdrop }),
									v("div", {
										class: xn.searchbox,
										onKeyDown: (u) => c(u),
										tabIndex: 1,
										ref: s,
										children: [v(tl, {}), v(ll, {}), v(pl, {})],
									}),
								],
							}),
						],
					})
				: null
		);
	}
	function kl(e) {
		const {
			preset: t,
			oramaInstance: n,
			cloudConfig: o,
			showFullscreenOnMobile: s,
			colorScheme: r,
			searchInputPlaceholder: a,
			searchResultsPlaceholder: c,
			noResultsTemplate: u,
		} = e;
		if (!t) throw new Error(Ja);
		const h =
			n !== null &&
			(o == null ? void 0 : o.apiKey) !== null &&
			(o == null ? void 0 : o.endpointURL) !== null
				? ia
				: ra;
		oa(() => {
			(tt.value = !!e.show),
				(va.value = h),
				(pa.value = !!e.backdrop),
				n && ga(n, t),
				r && (zt.value = r),
				a && (vn.value = a),
				c && (mn.value = c),
				u && (gn.value = u),
				s && (Wo.value = s);
		}),
			Oa(yl, "orama-searchbox", void 0, { shadow: !1 }),
			(Go.value = !0);
	}
	const wl = {
			showFullscreenOnMobile: Wo,
			colorScheme: zt,
			noResultsTemplate: gn,
			preset: ma,
			searchTerm: Me,
			searchInputPlaceholder: vn,
			searchResultsPlaceholder: mn,
			ready: Go,
			show: tt,
			setShow: ba,
		},
		Cl = {
			docs: { name: "docs", schema: zo },
			shopify: { name: "shopify", schema: jo },
		},
		Sl = { seeAll: ha, seeItem: Fo };
})();
var fd = Dt.Zu;
Dt.U3;
var hd = Dt.um,
	Rs = Dt.pp;
const _d = { class: "VPNavBarSearch search" },
	pd = { id: "docsearch" },
	vd = T(
		"span",
		{ class: "DocSearch-Button-Container" },
		[
			T(
				"svg",
				{
					class: "DocSearch-Search-Icon",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					"aria-label": "search icon",
				},
				[
					T("path", {
						d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
						stroke: "currentColor",
						fill: "none",
						"fill-rule": "evenodd",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
					}),
				],
			),
			T("span", { class: "DocSearch-Button-Placeholder" }, "Search"),
		],
		-1,
	),
	md = T(
		"span",
		{ class: "DocSearch-Button-Keys" },
		[
			T("kbd", { class: "DocSearch-Button-Key" }),
			T("kbd", { class: "DocSearch-Button-Key" }, "K"),
		],
		-1,
	),
	gd = [vd, md],
	bd = G({
		__name: "Search",
		setup(d) {
			const i = zs();
			return (
				(Rs.colorScheme.value = i.isDark.value ? "dark" : "light"),
				lt(async () => {
					const l = await Vl(
						() => import("./virtual_search-data.BCATV_li.js"),
						__vite__mapDeps([]),
					);
					fd({ oramaInstance: l.default, preset: hd.docs.name, show: !1 });
				}),
				(l, _) => {
					const p = Xe("orama-searchbox"),
						b = Xe("ClientOnly");
					return (
						g(),
						K(b, null, {
							default: E(() => [
								U(p),
								T("div", _d, [
									T("div", pd, [
										T(
											"button",
											{
												type: "button",
												class: "DocSearch DocSearch-Button",
												"aria-label": "Search",
												onClick:
													_[0] || (_[0] = (S) => (w(Rs).show.value = !0)),
											},
											gd,
										),
									]),
								]),
							]),
							_: 1,
						})
					);
				}
			);
		},
	}),
	yd = G({
		__name: "VPNavBarSocialLinks",
		setup(d) {
			const { theme: i } = se();
			return (l, _) =>
				w(i).socialLinks
					? (g(),
						K(
							Xn,
							{ key: 0, class: "VPNavBarSocialLinks", links: w(i).socialLinks },
							null,
							8,
							["links"],
						))
					: F("", !0);
		},
	}),
	kd = z(yd, [["__scopeId", "data-v-0394ad82"]]),
	wd = ["href", "rel", "target"],
	Cd = { key: 1 },
	Sd = { key: 2 },
	Ld = G({
		__name: "VPNavBarTitle",
		setup(d) {
			const { site: i, theme: l } = se(),
				{ hasSidebar: _ } = Je(),
				{ currentLang: p } = Ot(),
				b = Y(() => {
					var I;
					return typeof l.value.logoLink == "string"
						? l.value.logoLink
						: (I = l.value.logoLink) == null
							? void 0
							: I.link;
				}),
				S = Y(() => {
					var I;
					return typeof l.value.logoLink == "string" ||
						(I = l.value.logoLink) == null
						? void 0
						: I.rel;
				}),
				P = Y(() => {
					var I;
					return typeof l.value.logoLink == "string" ||
						(I = l.value.logoLink) == null
						? void 0
						: I.target;
				});
			return (I, D) => (
				g(),
				$(
					"div",
					{ class: me(["VPNavBarTitle", { "has-sidebar": w(_) }]) },
					[
						T(
							"a",
							{
								class: "title",
								href: b.value ?? w(Wn)(w(p).link),
								rel: S.value,
								target: P.value,
							},
							[
								L(I.$slots, "nav-bar-title-before", {}, void 0, !0),
								w(l).logo
									? (g(),
										K(
											sn,
											{ key: 0, class: "logo", image: w(l).logo },
											null,
											8,
											["image"],
										))
									: F("", !0),
								w(l).siteTitle
									? (g(), $("span", Cd, de(w(l).siteTitle), 1))
									: w(l).siteTitle === void 0
										? (g(), $("span", Sd, de(w(i).title), 1))
										: F("", !0),
								L(I.$slots, "nav-bar-title-after", {}, void 0, !0),
							],
							8,
							wd,
						),
					],
					2,
				)
			);
		},
	}),
	$d = z(Ld, [["__scopeId", "data-v-ab179fa1"]]),
	Id = {},
	Td = {
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		focusable: "false",
		viewBox: "0 0 24 24",
	},
	Pd = T("path", { d: "M0 0h24v24H0z", fill: "none" }, null, -1),
	Ad = T(
		"path",
		{
			d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
			class: "css-c4d79v",
		},
		null,
		-1,
	),
	Ed = [Pd, Ad];
function Md(d, i) {
	return g(), $("svg", Td, Ed);
}
const rr = z(Id, [["render", Md]]),
	Od = { class: "items" },
	Dd = { class: "title" },
	Nd = G({
		__name: "VPNavBarTranslations",
		setup(d) {
			const { theme: i } = se(),
				{ localeLinks: l, currentLang: _ } = Ot({ correspondingLink: !0 });
			return (p, b) =>
				w(l).length && w(_).label
					? (g(),
						K(
							Yn,
							{
								key: 0,
								class: "VPNavBarTranslations",
								icon: rr,
								label: w(i).langMenuLabel || "Change language",
							},
							{
								default: E(() => [
									T("div", Od, [
										T("p", Dd, de(w(_).label), 1),
										(g(!0),
										$(
											ge,
											null,
											Ae(
												w(l),
												(S) => (
													g(),
													K(un, { key: S.link, item: S }, null, 8, ["item"])
												),
											),
											128,
										)),
									]),
								]),
								_: 1,
							},
							8,
							["label"],
						))
					: F("", !0);
		},
	}),
	xd = z(Nd, [["__scopeId", "data-v-74abcbb9"]]),
	Vd = (d) => (Ge("data-v-19c990f1"), (d = d()), Ze(), d),
	Bd = { class: "wrapper" },
	Hd = { class: "container" },
	Ud = { class: "title" },
	Rd = { class: "content" },
	Fd = { class: "content-body" },
	zd = Vd(() =>
		T("div", { class: "divider" }, [T("div", { class: "divider-line" })], -1),
	),
	jd = G({
		__name: "VPNavBar",
		props: { isScreenOpen: { type: Boolean } },
		emits: ["toggle-screen"],
		setup(d) {
			const { y: i } = Zs(),
				{ hasSidebar: l } = Je(),
				{ hasLocalNav: _ } = Qs(),
				{ frontmatter: p } = se(),
				b = ve({});
			return (
				js(() => {
					b.value = {
						"has-sidebar": l.value,
						"has-local-nav": _.value,
						top: p.value.layout === "home" && i.value === 0,
					};
				}),
				(S, P) => (
					g(),
					$(
						"div",
						{ class: me(["VPNavBar", b.value]) },
						[
							T("div", Bd, [
								T("div", Hd, [
									T("div", Ud, [
										U($d, null, {
											"nav-bar-title-before": E(() => [
												L(S.$slots, "nav-bar-title-before", {}, void 0, !0),
											]),
											"nav-bar-title-after": E(() => [
												L(S.$slots, "nav-bar-title-after", {}, void 0, !0),
											]),
											_: 3,
										}),
									]),
									T("div", Rd, [
										T("div", Fd, [
											L(S.$slots, "nav-bar-content-before", {}, void 0, !0),
											U(bd, { class: "search" }),
											U(ud, { class: "menu" }),
											U(xd, { class: "translations" }),
											U(n0, { class: "appearance" }),
											U(kd, { class: "social-links" }),
											U(q0, { class: "extra" }),
											L(S.$slots, "nav-bar-content-after", {}, void 0, !0),
											U(
												td,
												{
													class: "hamburger",
													active: S.isScreenOpen,
													onClick:
														P[0] || (P[0] = (I) => S.$emit("toggle-screen")),
												},
												null,
												8,
												["active"],
											),
										]),
									]),
								]),
							]),
							zd,
						],
						2,
					)
				)
			);
		},
	}),
	Wd = z(jd, [["__scopeId", "data-v-19c990f1"]]),
	Gd = { key: 0, class: "VPNavScreenAppearance" },
	Zd = { class: "text" },
	Kd = G({
		__name: "VPNavScreenAppearance",
		setup(d) {
			const { site: i, theme: l } = se();
			return (_, p) =>
				w(i).appearance && w(i).appearance !== "force-dark"
					? (g(),
						$("div", Gd, [
							T("p", Zd, de(w(l).darkModeSwitchLabel || "Appearance"), 1),
							U(Kn),
						]))
					: F("", !0);
		},
	}),
	qd = z(Kd, [["__scopeId", "data-v-2d7af913"]]),
	Yd = G({
		__name: "VPNavScreenMenuLink",
		props: { item: {} },
		setup(d) {
			const i = cn("close-screen");
			return (l, _) => (
				g(),
				K(
					We,
					{
						class: "VPNavScreenMenuLink",
						href: l.item.link,
						target: l.item.target,
						rel: l.item.rel,
						onClick: w(i),
					},
					{ default: E(() => [He(de(l.item.text), 1)]), _: 1 },
					8,
					["href", "target", "rel", "onClick"],
				)
			);
		},
	}),
	Xd = z(Yd, [["__scopeId", "data-v-05f27b2a"]]),
	Jd = {},
	Qd = {
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		focusable: "false",
		viewBox: "0 0 24 24",
	},
	e2 = T(
		"path",
		{
			d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z",
		},
		null,
		-1,
	),
	t2 = [e2];
function n2(d, i) {
	return g(), $("svg", Qd, t2);
}
const o2 = z(Jd, [["render", n2]]),
	s2 = G({
		__name: "VPNavScreenMenuGroupLink",
		props: { item: {} },
		setup(d) {
			const i = cn("close-screen");
			return (l, _) => (
				g(),
				K(
					We,
					{
						class: "VPNavScreenMenuGroupLink",
						href: l.item.link,
						target: l.item.target,
						rel: l.item.rel,
						onClick: w(i),
					},
					{ default: E(() => [He(de(l.item.text), 1)]), _: 1 },
					8,
					["href", "target", "rel", "onClick"],
				)
			);
		},
	}),
	ir = z(s2, [["__scopeId", "data-v-19976ae1"]]),
	r2 = { class: "VPNavScreenMenuGroupSection" },
	i2 = { key: 0, class: "title" },
	a2 = G({
		__name: "VPNavScreenMenuGroupSection",
		props: { text: {}, items: {} },
		setup(d) {
			return (i, l) => (
				g(),
				$("div", r2, [
					i.text ? (g(), $("p", i2, de(i.text), 1)) : F("", !0),
					(g(!0),
					$(
						ge,
						null,
						Ae(
							i.items,
							(_) => (g(), K(ir, { key: _.text, item: _ }, null, 8, ["item"])),
						),
						128,
					)),
				])
			);
		},
	}),
	l2 = z(a2, [["__scopeId", "data-v-8133b170"]]),
	c2 = ["aria-controls", "aria-expanded"],
	u2 = ["innerHTML"],
	d2 = ["id"],
	f2 = { key: 1, class: "group" },
	h2 = G({
		__name: "VPNavScreenMenuGroup",
		props: { text: {}, items: {} },
		setup(d) {
			const i = d,
				l = ve(!1),
				_ = Y(() => `NavScreenGroup-${i.text.replace(" ", "-").toLowerCase()}`);
			function p() {
				l.value = !l.value;
			}
			return (b, S) => (
				g(),
				$(
					"div",
					{ class: me(["VPNavScreenMenuGroup", { open: l.value }]) },
					[
						T(
							"button",
							{
								class: "button",
								"aria-controls": _.value,
								"aria-expanded": l.value,
								onClick: p,
							},
							[
								T(
									"span",
									{ class: "button-text", innerHTML: b.text },
									null,
									8,
									u2,
								),
								U(o2, { class: "button-icon" }),
							],
							8,
							c2,
						),
						T(
							"div",
							{ id: _.value, class: "items" },
							[
								(g(!0),
								$(
									ge,
									null,
									Ae(
										b.items,
										(P) => (
											g(),
											$(
												ge,
												{ key: P.text },
												[
													"link" in P
														? (g(),
															$("div", { key: P.text, class: "item" }, [
																U(ir, { item: P }, null, 8, ["item"]),
															]))
														: (g(),
															$("div", f2, [
																U(
																	l2,
																	{ text: P.text, items: P.items },
																	null,
																	8,
																	["text", "items"],
																),
															])),
												],
												64,
											)
										),
									),
									128,
								)),
							],
							8,
							d2,
						),
					],
					2,
				)
			);
		},
	}),
	_2 = z(h2, [["__scopeId", "data-v-65ef89ca"]]),
	p2 = { key: 0, class: "VPNavScreenMenu" },
	v2 = G({
		__name: "VPNavScreenMenu",
		setup(d) {
			const { theme: i } = se();
			return (l, _) =>
				w(i).nav
					? (g(),
						$("nav", p2, [
							(g(!0),
							$(
								ge,
								null,
								Ae(
									w(i).nav,
									(p) => (
										g(),
										$(
											ge,
											{ key: p.text },
											[
												"link" in p
													? (g(), K(Xd, { key: 0, item: p }, null, 8, ["item"]))
													: (g(),
														K(
															_2,
															{ key: 1, text: p.text || "", items: p.items },
															null,
															8,
															["text", "items"],
														)),
											],
											64,
										)
									),
								),
								128,
							)),
						]))
					: F("", !0);
		},
	}),
	m2 = G({
		__name: "VPNavScreenSocialLinks",
		setup(d) {
			const { theme: i } = se();
			return (l, _) =>
				w(i).socialLinks
					? (g(),
						K(
							Xn,
							{
								key: 0,
								class: "VPNavScreenSocialLinks",
								links: w(i).socialLinks,
							},
							null,
							8,
							["links"],
						))
					: F("", !0);
		},
	}),
	g2 = { class: "list" },
	b2 = G({
		__name: "VPNavScreenTranslations",
		setup(d) {
			const { localeLinks: i, currentLang: l } = Ot({ correspondingLink: !0 }),
				_ = ve(!1);
			function p() {
				_.value = !_.value;
			}
			return (b, S) =>
				w(i).length && w(l).label
					? (g(),
						$(
							"div",
							{
								key: 0,
								class: me(["VPNavScreenTranslations", { open: _.value }]),
							},
							[
								T("button", { class: "title", onClick: p }, [
									U(rr, { class: "icon lang" }),
									He(" " + de(w(l).label) + " ", 1),
									U(or, { class: "icon chevron" }),
								]),
								T("ul", g2, [
									(g(!0),
									$(
										ge,
										null,
										Ae(
											w(i),
											(P) => (
												g(),
												$("li", { key: P.link, class: "item" }, [
													U(
														We,
														{ class: "link", href: P.link },
														{ default: E(() => [He(de(P.text), 1)]), _: 2 },
														1032,
														["href"],
													),
												])
											),
										),
										128,
									)),
								]),
							],
							2,
						))
					: F("", !0);
		},
	}),
	y2 = z(b2, [["__scopeId", "data-v-d72aa483"]]),
	k2 = { class: "container" },
	w2 = G({
		__name: "VPNavScreen",
		props: { open: { type: Boolean } },
		setup(d) {
			const i = ve(null),
				l = Ks(yt ? document.body : null);
			return (_, p) => (
				g(),
				K(
					Fn,
					{
						name: "fade",
						onEnter: p[0] || (p[0] = (b) => (l.value = !0)),
						onAfterLeave: p[1] || (p[1] = (b) => (l.value = !1)),
					},
					{
						default: E(() => [
							_.open
								? (g(),
									$(
										"div",
										{
											key: 0,
											class: "VPNavScreen",
											ref_key: "screen",
											ref: i,
											id: "VPNavScreen",
										},
										[
											T("div", k2, [
												L(
													_.$slots,
													"nav-screen-content-before",
													{},
													void 0,
													!0,
												),
												U(v2, { class: "menu" }),
												U(y2, { class: "translations" }),
												U(qd, { class: "appearance" }),
												U(m2, { class: "social-links" }),
												L(_.$slots, "nav-screen-content-after", {}, void 0, !0),
											]),
										],
										512,
									))
								: F("", !0),
						]),
						_: 3,
					},
				)
			);
		},
	}),
	C2 = z(w2, [["__scopeId", "data-v-cc5739dd"]]),
	S2 = { key: 0, class: "VPNav" },
	L2 = G({
		__name: "VPNav",
		setup(d) {
			const { isScreenOpen: i, closeScreen: l, toggleScreen: _ } = D1(),
				{ frontmatter: p } = se(),
				b = Y(() => p.value.navbar !== !1);
			return (
				qs("close-screen", l),
				rn(() => {
					yt && document.documentElement.classList.toggle("hide-nav", !b.value);
				}),
				(S, P) =>
					b.value
						? (g(),
							$("header", S2, [
								U(
									Wd,
									{ "is-screen-open": w(i), onToggleScreen: w(_) },
									{
										"nav-bar-title-before": E(() => [
											L(S.$slots, "nav-bar-title-before", {}, void 0, !0),
										]),
										"nav-bar-title-after": E(() => [
											L(S.$slots, "nav-bar-title-after", {}, void 0, !0),
										]),
										"nav-bar-content-before": E(() => [
											L(S.$slots, "nav-bar-content-before", {}, void 0, !0),
										]),
										"nav-bar-content-after": E(() => [
											L(S.$slots, "nav-bar-content-after", {}, void 0, !0),
										]),
										_: 3,
									},
									8,
									["is-screen-open", "onToggleScreen"],
								),
								U(
									C2,
									{ open: w(i) },
									{
										"nav-screen-content-before": E(() => [
											L(S.$slots, "nav-screen-content-before", {}, void 0, !0),
										]),
										"nav-screen-content-after": E(() => [
											L(S.$slots, "nav-screen-content-after", {}, void 0, !0),
										]),
										_: 3,
									},
									8,
									["open"],
								),
							]))
						: F("", !0)
			);
		},
	}),
	$2 = z(L2, [["__scopeId", "data-v-ae24b3ad"]]),
	I2 = (d) => (Ge("data-v-e31bd47b"), (d = d()), Ze(), d),
	T2 = ["role", "tabindex"],
	P2 = I2(() => T("div", { class: "indicator" }, null, -1)),
	A2 = { key: 1, class: "items" },
	E2 = G({
		__name: "VPSidebarItem",
		props: { item: {}, depth: {} },
		setup(d) {
			const i = d,
				{
					collapsed: l,
					collapsible: _,
					isLink: p,
					isActiveLink: b,
					hasActiveLink: S,
					hasChildren: P,
					toggle: I,
				} = lc(Y(() => i.item)),
				D = Y(() => (P.value ? "section" : "div")),
				Z = Y(() => (p.value ? "a" : "div")),
				ee = Y(() =>
					P.value ? (i.depth + 2 === 7 ? "p" : `h${i.depth + 2}`) : "p",
				),
				fe = Y(() => (p.value ? void 0 : "button")),
				le = Y(() => [
					[`level-${i.depth}`],
					{ collapsible: _.value },
					{ collapsed: l.value },
					{ "is-link": p.value },
					{ "is-active": b.value },
					{ "has-active": S.value },
				]);
			function ae(te) {
				("key" in te && te.key !== "Enter") || (!i.item.link && I());
			}
			function ce() {
				i.item.link && I();
			}
			return (te, re) => {
				const _e = Xe("VPSidebarItem", !0);
				return (
					g(),
					K(
						it(D.value),
						{ class: me(["VPSidebarItem", le.value]) },
						{
							default: E(() => [
								te.item.text
									? (g(),
										$(
											"div",
											nn(
												{ key: 0, class: "item", role: fe.value },
												Hl(te.item.items ? { click: ae, keydown: ae } : {}, !0),
												{ tabindex: te.item.items && 0 },
											),
											[
												P2,
												te.item.link
													? (g(),
														K(
															We,
															{
																key: 0,
																tag: Z.value,
																class: "link",
																href: te.item.link,
																rel: te.item.rel,
																target: te.item.target,
															},
															{
																default: E(() => [
																	(g(),
																	K(
																		it(ee.value),
																		{ class: "text", innerHTML: te.item.text },
																		null,
																		8,
																		["innerHTML"],
																	)),
																]),
																_: 1,
															},
															8,
															["tag", "href", "rel", "target"],
														))
													: (g(),
														K(
															it(ee.value),
															{
																key: 1,
																class: "text",
																innerHTML: te.item.text,
															},
															null,
															8,
															["innerHTML"],
														)),
												te.item.collapsed != null
													? (g(),
														$(
															"div",
															{
																key: 2,
																class: "caret",
																role: "button",
																"aria-label": "toggle section",
																onClick: ce,
																onKeydown: Bl(ce, ["enter"]),
																tabindex: "0",
															},
															[U(er, { class: "caret-icon" })],
															32,
														))
													: F("", !0),
											],
											16,
											T2,
										))
									: F("", !0),
								te.item.items && te.item.items.length
									? (g(),
										$("div", A2, [
											te.depth < 5
												? (g(!0),
													$(
														ge,
														{ key: 0 },
														Ae(
															te.item.items,
															(ue) => (
																g(),
																K(
																	_e,
																	{
																		key: ue.text,
																		item: ue,
																		depth: te.depth + 1,
																	},
																	null,
																	8,
																	["item", "depth"],
																)
															),
														),
														128,
													))
												: F("", !0),
										]))
									: F("", !0),
							]),
							_: 1,
						},
						8,
						["class"],
					)
				);
			};
		},
	}),
	M2 = z(E2, [["__scopeId", "data-v-e31bd47b"]]),
	ar = (d) => (Ge("data-v-575e6a36"), (d = d()), Ze(), d),
	O2 = ar(() => T("div", { class: "curtain" }, null, -1)),
	D2 = {
		class: "nav",
		id: "VPSidebarNav",
		"aria-labelledby": "sidebar-aria-label",
		tabindex: "-1",
	},
	N2 = ar(() =>
		T(
			"span",
			{ class: "visually-hidden", id: "sidebar-aria-label" },
			" Sidebar Navigation ",
			-1,
		),
	),
	x2 = G({
		__name: "VPSidebar",
		props: { open: { type: Boolean } },
		setup(d) {
			const { sidebarGroups: i, hasSidebar: l } = Je(),
				_ = d,
				p = ve(null),
				b = Ks(yt ? document.body : null);
			return (
				ct(
					[_, p],
					() => {
						var S;
						_.open
							? ((b.value = !0), (S = p.value) == null || S.focus())
							: (b.value = !1);
					},
					{ immediate: !0, flush: "post" },
				),
				(S, P) =>
					w(l)
						? (g(),
							$(
								"aside",
								{
									key: 0,
									class: me(["VPSidebar", { open: S.open }]),
									ref_key: "navEl",
									ref: p,
									onClick: P[0] || (P[0] = Ul(() => {}, ["stop"])),
								},
								[
									O2,
									T("nav", D2, [
										N2,
										L(S.$slots, "sidebar-nav-before", {}, void 0, !0),
										(g(!0),
										$(
											ge,
											null,
											Ae(
												w(i),
												(I) => (
													g(),
													$("div", { key: I.text, class: "group" }, [
														U(M2, { item: I, depth: 0 }, null, 8, ["item"]),
													])
												),
											),
											128,
										)),
										L(S.$slots, "sidebar-nav-after", {}, void 0, !0),
									]),
								],
								2,
							))
						: F("", !0)
			);
		},
	}),
	V2 = z(x2, [["__scopeId", "data-v-575e6a36"]]),
	B2 = G({
		__name: "VPSkipLink",
		setup(d) {
			const i = ln(),
				l = ve();
			ct(
				() => i.path,
				() => l.value.focus(),
			);
			function _({ target: p }) {
				const b = document.getElementById(decodeURIComponent(p.hash).slice(1));
				if (b) {
					const S = () => {
						b.removeAttribute("tabindex"), b.removeEventListener("blur", S);
					};
					b.setAttribute("tabindex", "-1"),
						b.addEventListener("blur", S),
						b.focus(),
						window.scrollTo(0, 0);
				}
			}
			return (p, b) => (
				g(),
				$(
					ge,
					null,
					[
						T(
							"span",
							{ ref_key: "backToTop", ref: l, tabindex: "-1" },
							null,
							512,
						),
						T(
							"a",
							{
								href: "#VPContent",
								class: "VPSkipLink visually-hidden",
								onClick: _,
							},
							" Skip to content ",
						),
					],
					64,
				)
			);
		},
	}),
	H2 = z(B2, [["__scopeId", "data-v-0f60ec36"]]),
	U2 = G({
		__name: "Layout",
		setup(d) {
			const { isOpen: i, open: l, close: _ } = Je(),
				p = ln();
			ct(() => p.path, _), ac(i, _);
			const { frontmatter: b } = se(),
				S = Rl(),
				P = Y(() => !!S["home-hero-image"]);
			return (
				qs("hero-image-slot-exists", P),
				(I, D) => {
					const Z = Xe("Content");
					return w(b).layout !== !1
						? (g(),
							$(
								"div",
								{ key: 0, class: me(["Layout", w(b).pageClass]) },
								[
									L(I.$slots, "layout-top", {}, void 0, !0),
									U(H2),
									U(
										Gl,
										{ class: "backdrop", show: w(i), onClick: w(_) },
										null,
										8,
										["show", "onClick"],
									),
									U($2, null, {
										"nav-bar-title-before": E(() => [
											L(I.$slots, "nav-bar-title-before", {}, void 0, !0),
										]),
										"nav-bar-title-after": E(() => [
											L(I.$slots, "nav-bar-title-after", {}, void 0, !0),
										]),
										"nav-bar-content-before": E(() => [
											L(I.$slots, "nav-bar-content-before", {}, void 0, !0),
										]),
										"nav-bar-content-after": E(() => [
											L(I.$slots, "nav-bar-content-after", {}, void 0, !0),
										]),
										"nav-screen-content-before": E(() => [
											L(I.$slots, "nav-screen-content-before", {}, void 0, !0),
										]),
										"nav-screen-content-after": E(() => [
											L(I.$slots, "nav-screen-content-after", {}, void 0, !0),
										]),
										_: 3,
									}),
									U(O1, { open: w(i), onOpenMenu: w(l) }, null, 8, [
										"open",
										"onOpenMenu",
									]),
									U(
										V2,
										{ open: w(i) },
										{
											"sidebar-nav-before": E(() => [
												L(I.$slots, "sidebar-nav-before", {}, void 0, !0),
											]),
											"sidebar-nav-after": E(() => [
												L(I.$slots, "sidebar-nav-after", {}, void 0, !0),
											]),
											_: 3,
										},
										8,
										["open"],
									),
									U(r1, null, {
										"page-top": E(() => [
											L(I.$slots, "page-top", {}, void 0, !0),
										]),
										"page-bottom": E(() => [
											L(I.$slots, "page-bottom", {}, void 0, !0),
										]),
										"not-found": E(() => [
											L(I.$slots, "not-found", {}, void 0, !0),
										]),
										"home-hero-before": E(() => [
											L(I.$slots, "home-hero-before", {}, void 0, !0),
										]),
										"home-hero-info-before": E(() => [
											L(I.$slots, "home-hero-info-before", {}, void 0, !0),
										]),
										"home-hero-info": E(() => [
											L(I.$slots, "home-hero-info", {}, void 0, !0),
										]),
										"home-hero-info-after": E(() => [
											L(I.$slots, "home-hero-info-after", {}, void 0, !0),
										]),
										"home-hero-actions-after": E(() => [
											L(I.$slots, "home-hero-actions-after", {}, void 0, !0),
										]),
										"home-hero-image": E(() => [
											L(I.$slots, "home-hero-image", {}, void 0, !0),
										]),
										"home-hero-after": E(() => [
											L(I.$slots, "home-hero-after", {}, void 0, !0),
										]),
										"home-features-before": E(() => [
											L(I.$slots, "home-features-before", {}, void 0, !0),
										]),
										"home-features-after": E(() => [
											L(I.$slots, "home-features-after", {}, void 0, !0),
										]),
										"doc-footer-before": E(() => [
											L(I.$slots, "doc-footer-before", {}, void 0, !0),
										]),
										"doc-before": E(() => [
											L(I.$slots, "doc-before", {}, void 0, !0),
										]),
										"doc-after": E(() => [
											L(I.$slots, "doc-after", {}, void 0, !0),
										]),
										"doc-top": E(() => [
											L(I.$slots, "doc-top", {}, void 0, !0),
										]),
										"doc-bottom": E(() => [
											L(I.$slots, "doc-bottom", {}, void 0, !0),
										]),
										"aside-top": E(() => [
											L(I.$slots, "aside-top", {}, void 0, !0),
										]),
										"aside-bottom": E(() => [
											L(I.$slots, "aside-bottom", {}, void 0, !0),
										]),
										"aside-outline-before": E(() => [
											L(I.$slots, "aside-outline-before", {}, void 0, !0),
										]),
										"aside-outline-after": E(() => [
											L(I.$slots, "aside-outline-after", {}, void 0, !0),
										]),
										"aside-ads-before": E(() => [
											L(I.$slots, "aside-ads-before", {}, void 0, !0),
										]),
										"aside-ads-after": E(() => [
											L(I.$slots, "aside-ads-after", {}, void 0, !0),
										]),
										_: 3,
									}),
									U(u1),
									L(I.$slots, "layout-bottom", {}, void 0, !0),
								],
								2,
							))
						: (g(), K(Z, { key: 1 }));
				}
			);
		},
	}),
	R2 = z(U2, [["__scopeId", "data-v-5d98c3a5"]]),
	Fs = {
		Layout: R2,
		enhanceApp: ({ app: d }) => {
			d.component("Badge", zl);
		},
	},
	q2 = {
		extends: Fs,
		Layout: () => Fl(Fs.Layout, null, {}),
		enhanceApp({ app: d, router: i, siteData: l }) {},
	};
export { q2 as R };
function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = [];
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
