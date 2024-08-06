export interface ReportFile {
	name: string;
	status: Array<{ timestamp: number; result: boolean }>;
}

export interface Status {
	status: StatusCode;
	date: Date;
}

export enum StatusCode {
	/** No error reported */
	OK = 0,
	/** Server currently unreachable/throwing > 400 errors */
	ERROR = 1,
	/** Server was throwing error but now it is fixed */
	UNSTABLE = -1
}
