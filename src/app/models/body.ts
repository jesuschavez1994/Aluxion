export class body {
    constructor(
        public cultureInfo: string,
        public Text_StopRequired_YN: string,
        public Text_EstimationsRequired_YN?: string,
        public Text_IncidencesRequired_YN?: string,
        public DateTime_Referenced_Incidencies_YYYYMMDD?: string
    ) { }
}