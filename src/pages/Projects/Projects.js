import { useState } from "react";
import { projectsData } from "../../utils/constants";

const Projects = () => {
	const projectDataLength = projectsData.length;
	const listSize = 4;
	const [pageNumber, setPageNumber] = useState(1);
	const [startPos, setStartPos] = useState(0);
	const [endPos, setEndPos] = useState(
		projectDataLength >= listSize ? listSize - 1 : projectDataLength - 1,
	);
	const totalPage = parseInt(
		projectDataLength
			? projectDataLength % listSize === 0
				? projectDataLength / listSize
				: projectDataLength / listSize + 1
			: 0,
	);
	const totalIntermediatePage = [];
	totalIntermediatePage.length = totalPage - 2;

	const scrollPaginationToView = () => {
		console.log("abc");
		const tOut = setTimeout(() => {
			document.getElementById("footerPagination").scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "center",
			});
			clearTimeout(tOut);
		}, 10);
	};

	const changePage = (num) => {
		scrollPaginationToView();
		let tempPos = num * listSize;
		let tempStartPos = tempPos - listSize;
		let tempEndPos = tempPos > projectDataLength ? projectDataLength : tempPos;
		setPageNumber(num);
		setStartPos(tempStartPos);
		setEndPos(tempEndPos - 1);
	};

	const previousClicked = () => {
		let tempPage = pageNumber - 1;
		if (tempPage > 1) {
			setPageNumber(tempPage);
			const tempEndPos = tempPage * listSize;
			setStartPos(tempEndPos - listSize);
			setEndPos(tempEndPos - 1);
		} else {
			setPageNumber(1);
			setStartPos(0);
			setEndPos(listSize - 1);
		}
		scrollPaginationToView();
	};

	const nextClicked = () => {
		let tempPage = pageNumber + 1;
		if (tempPage < totalPage) {
			setPageNumber(tempPage);
			const tempEndPos = tempPage * listSize;
			setStartPos(tempEndPos - listSize);
			setEndPos(tempEndPos - 1);
		} else {
			setPageNumber(totalPage);
			let tempEndPos = totalPage * listSize;
			setStartPos(tempEndPos - listSize);
			tempEndPos =
				tempEndPos > projectDataLength ? projectDataLength : tempEndPos;
			setEndPos(tempEndPos - 1);
		}
		scrollPaginationToView();
	};

	const loadDots = () => {
		let retunStr = [];
		for (let i = 1; i <= totalPage; i++) {
			retunStr.push(
				<span
					className={pageNumber === i ? "active" : ""}
					onClick={() => {
						changePage(i);
					}}
					key={i + "_pagination"}
				>
					&bull;
				</span>,
			);
		}
		return retunStr;
	};

	return (
		<section id='projectSection' className='container projects-container'>
			<div className='container__header'>Projects</div>
			<div className='projects-wrapper'>
				<div className='projects-wrapper__content'>
					{projectsData.map((elm, i) => {
						if (i < startPos || i > endPos) {
							return null;
						}
						return (
							<div
								className={
									"projects-wrapper__block" + (i % 2 ? " right-aligned" : "")
								}
								key={i + "product" + elm.id}
							>
								<div className='projects-wrapper__block-showcase'>
									<img src={elm.projectImage} alt='projectImg' width={100} />
								</div>
								<div className='projects-wrapper__block-details'>
									<h1 className='block-details__title'>{elm.title}</h1>
									<p className='block-details__desc'>{elm.subTitle}</p>
									<div className='block-details__other'>
										<h3 className='block-details__other-subHeader'>
											Key points
										</h3>
										<ul className='block-details__other-list'>
											{elm.keyFeatures.map((subElm, j) => {
												return <li key={j + "keypoint"}>{subElm}</li>;
											})}
										</ul>
									</div>
									<div className='block-details__footer'>
										<button>Github code</button>
										{/* <button>Open in Modal</button> */}
										<button>Live demo</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className='projects-wrapper__footer' id='footerPagination'>
					<span
						className={"projects-wrapper__footer-prev"}
						onClick={() => {
							previousClicked();
						}}
					>
						&lt;
					</span>
					<>{loadDots()}</>
					<span
						className={"projects-wrapper__footer-next"}
						onClick={() => {
							nextClicked();
						}}
					>
						&gt;
					</span>
				</div>
			</div>
		</section>
	);
};

export default Projects;
