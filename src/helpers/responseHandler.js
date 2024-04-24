export const createSuccessResponse = (data, message) => {
    return {
        success: true,
        message: message || 'Request successful',
        data: data
    };
};

export const createErrorResponse = (error, message) => {
    return {
        success: false,
        message: message || 'Request failed',
        error: error ? error : 'Error'
    };
};