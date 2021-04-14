import React from "react";
import { enquireScreen } from "enquire-js";
//TODO Arreglar Rutas
// import Header3 from "./pages_antd/Nav3.jsx";
import Banner2 from "./pages_antd/Banner2.jsx";
import Content5 from "./pages_antd/Content5.jsx";
import Feature1 from "./pages_antd/Feature1.jsx";
import Feature2 from "./pages_antd/Feature2.jsx";
import Footer1 from "./pages_antd/Footer1.jsx";

import {
	Nav30DataSource,
	Banner20DataSource,
	Content50DataSource,
	Feature10DataSource,
	Feature20DataSource,
	Footer11DataSource
} from "./pages_antd/data.source";
import "./pages_antd/less/antMotionStyle.less";

let isMobile;
enquireScreen(b => {
	isMobile = b;
});

const { location = {} } = typeof window !== "undefined" ? window : {};

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile,
			show: !location.port // 如果不是 dva 2.0 请删除
		};
	}

	componentDidMount() {
		// 适配手机屏幕;
		enquireScreen(b => {
			this.setState({ isMobile: !!b });
		});
		// dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
		/* 如果不是 dva 2.0 请删除 start */
		if (location.port) {
			// 样式 build 时间在 200-300ms 之间;
			setTimeout(() => {
				this.setState({
					show: true
				});
			}, 500);
		}
		/* 如果不是 dva 2.0 请删除 end */
	}

	render() {
		const children = [
			//<Header3 id="Nav3_0" key="Nav3_0" dataSource={Nav30DataSource} isMobile={this.state.isMobile} />,
			<Banner2 id="Banner2_0" key="Banner2_0" dataSource={Banner20DataSource} isMobile={this.state.isMobile} />,
			<Content5
				id="Content5_0"
				key="Content5_0"
				dataSource={Content50DataSource}
				isMobile={this.state.isMobile}
			/>,
			<Feature1
				id="Feature1_0"
				key="Feature1_0"
				dataSource={Feature10DataSource}
				isMobile={this.state.isMobile}
			/>,
			<Feature2
				id="Feature2_0"
				key="Feature2_0"
				dataSource={Feature20DataSource}
				isMobile={this.state.isMobile}
			/>,
			<Footer1 id="Footer1_1" key="Footer1_1" dataSource={Footer11DataSource} isMobile={this.state.isMobile} />
		];
		return (
			<div
				className="templates-wrapper"
				ref={d => {
					this.dom = d;
				}}>
				{/* 如果不是 dva 2.0 替换成 {children} start */}
				{this.state.show && children}
				{/* 如果不是 dva 2.0 替换成 {children} end */}
			</div>
		);
	}
}
