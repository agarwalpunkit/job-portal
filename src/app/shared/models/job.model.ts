export interface Job {
    title: string;
    logoPath?: string;
    logoPathV3?: string;
    jobId: string;
    jobType: string;
    currency: string;
    footerPlaceholderLabel: string;
    footerPlaceholderColor: string;
    companyName: string;
    isSaved: boolean;
    tagsAndSkills: string;
    placeholders: [
        {
            type: string;
            label: string;
        },
        {
            type: string;
            label: string;
        },
        {
            type: string;
            label: string;
        }
    ];
    companyId: number;
    staticUrl: string;
    ambitionBoxData?: {
        Url: string,
        ReviewsCount: number,
        AggregateRating: string,
        Title: string
    }
    jobDescription: string;
    showMultipleApply: boolean;
    groupId: number;
    isTopGroup: number;
    createdDate: number;
}