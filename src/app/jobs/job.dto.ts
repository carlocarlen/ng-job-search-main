export interface JobDto {
    id: number,
    title: string,
    companyName: string,
    companyLogo: string,
    reference: string,
}

export interface JobDetailDto {
    id: number,
    companyName: string,
    title: string,
    companyLogo: string,
    reference: string,
    location: string,
    industries: string[],
    types: string[],
    description: string,
    publishDate: string,
}