import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import classes from "../styles/dropzone.module.css";
import { Flex } from "@mantine/core";
import Image from "next/image";

function Dropzone() {
	const [files, setFiles] = useState<any[]>([]);

	const onDrop = useCallback((acceptedFiles: any[]) => {
		if (acceptedFiles?.length) {
			setFiles((previousFiles) => [...previousFiles, ...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }))]);
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	useEffect(() => {
		console.log(files);
	}, [files]);

	return (
		<Flex w="100%" direction="column" align="center" gap={12}>
			<div className={classes.main}>{files.length > 0 ? <Image width={400} height={400} src={files[0]?.preview} alt={files[0]?.name} /> : <p>erwtreyruti</p>}</div>
			{/* Preview */}
			<form>
				<div {...getRootProps()} className={classes.button}>
					<input {...getInputProps()} />
					hello
				</div>
			</form>
		</Flex>
	);
}

export default Dropzone;
