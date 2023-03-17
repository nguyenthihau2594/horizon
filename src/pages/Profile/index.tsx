
import MainTop from "components/MainTop/MainTop";
import s from "./index.module.scss";
import cx from "classnames"
import Bg from "assets/img/bg_profile.png";
import Avatar from "assets/img/avatar.png"
import Button from "components/Button/Button";
import { ReactComponent as IconCloud } from 'assets/img/icons/icon_cloud.svg';
import { ReactComponent as IconUpload } from 'assets/img/icons/icon_upload.svg';
import { useState } from "react";
import Project from "components/Project/Project";

export default function User() {
	const [avatar, setAvatar] = useState<{ preview: "", name: "" }>();
	const [droping, setDroping] = useState(false)
	const [droped, setDroped] = useState(false)
	const [dragActive, setDragActive] = useState(false)
	const [error, setError] = useState(false)


	const handleChange = (e: any) => {
		const file = e.target.files[0];
		file.preview = URL.createObjectURL(file)
		setAvatar(file);
	}

	const handleDragover = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		setDroping(true)
		setDroped(false)
		return false;
	}

	const handleDragleave = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		setDroping(false)
		setDroped(true)
		return false;

	}
	const handleDragenter = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		setDroping(false)
		setDroped(true)
	}

	const handleDrop = function (e: any) {
		e.preventDefault();
		e.stopPropagation();
		setDroping(false)
		setDroped(true)
		const file = e.dataTransfer.files[0]
		file.preview = URL.createObjectURL(file)
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			const file = e.dataTransfer.files[0];
			file.preview = URL.createObjectURL(file);
			const idxDot = file.name.lastIndexOf(".") + 1;
			console.log(idxDot);
			const extFile = file.name.substring(idxDot, file.length).toLowerCase();

			if (extFile === "jpg" || extFile === "jpeg" || extFile === "png" || extFile === "gif") {
				setAvatar(file);
				setError(false)
			}
			else {
				setError(true)
			}
		}
		return false;
	}
	// function handleFile(files : any) {
	// 	alert("Number of files: " + files.length);
	//   }


	// const handleDrag = function(e : any) {

	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	if (e.type === "dragenter" || e.type === "dragover") {
	// 	  setDragActive(true);
	// 	} else if (e.type === "dragleave") {
	// 	  setDragActive(false);
	// 	}
	//   };

	// // triggers when file is dropped
	// const handleDrop = function(e : any) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	setDragActive(false);
	// 	if (e.dataTransfer.files && e.dataTransfer.files[0]) {
	// 		const file = e.dataTransfer.files[0];
	// 		file.preview = URL.createObjectURL(file);
	// 		const idxDot = file.name.lastIndexOf(".") + 1;
	// 		console.log(idxDot);
	// 		const extFile = file.name.substring(idxDot, file.length).toLowerCase();

	// 		if (extFile==="jpg" || extFile === "jpeg" || extFile==="png" || extFile==="gif"){
	// 			setAvatar(file);
	// 			setError(false)
	// 		}
	// 		else{
	// 			setError(true)
	// 		}
	// 	}
	// };


	return (
		<div className={s.wrap}>
			<MainTop />
			<div className={s.content}>
				<div className={cx(s.user_info, s.content_box)}>
					<div className={s.img_bg}><img src={Bg} alt="" /></div>
					<div className={s.avatar}>
						<img src={Avatar} alt="" />
					</div>
					<strong className={s.name}>Adela Parkson</strong>
					<span className={s.job}>Product Designer</span>
					<ul className={s.activity_list}>
						<li className={s.activity_item}><strong className={s.num}>17</strong>Posts</li>
						<li className={s.activity_item}><strong className={s.num}>9.7k</strong>Followers</li>
						<li className={s.activity_item}><strong className={s.num}>274</strong>Followers</li>
					</ul>
				</div>
				<div className={cx(s.storage, s.content_box)}>
					<div className={s.icon_logo}><IconCloud /></div>
					<strong className={s.title}>Your storage</strong>
					<p className={s.desc}>
						Supervise your drive space in the easiest way
					</p>
					<div className={s.progress}>
						<span className={s.progress_caption}>
							<span className={s.storage_capacity}>25.6 Gb</span>
							<span className={s.capacity}>50 Gb</span>
						</span>
						<span className={s.progress_bar}>
							<span className={s.progress_info} style={{ width: "70%" }}></span>
						</span>
					</div>
				</div>
				<div className={cx(s.complete, s.content_box)}>
					<div className={s.upload}>
						<div className={s.content}>
							<input type="file" id="upload" className={s.inp_upload} onChange={e => handleChange(e)} />
							<label htmlFor="upload" className={cx(s.label, { [s.droping]: droping }, { [s.droped]: droped })}
								onDragOver={handleDragover}
								onDragLeave={handleDragleave}
								onDragEnter={handleDragenter}
								onDrop={handleDrop}
							>
								{/* <label htmlFor="upload" className={cx(s.label)} 
							 onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
							 > */}
								{avatar ? (<><img src={avatar.preview} alt="" /><span className={s.txt}>{avatar.name}</span></>) : (<><IconUpload /><span className={s.txt}>Upload Files</span></>)}

							</label>
							<span className={cx(s.note, { [s.error]: error })}>PNG, JPG and GIF files are allowed</span>
						</div>
					</div>
					<div className={s.text}>
						<strong className={s.title}>Complete your profile</strong>
						<p className={s.desc}>
							Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss
						</p>
						<Button className={s.btn_push}>Publish now</Button>
					</div>
				</div>
				<Project className={s.content_box} />
			</div>
		</div>
	);
}
