using MarketplaceService.Models;

namespace MarketplaceService.Logic.Interface
{
    public interface IMarketplaceLogic
    {
        public Task<Recording> GetRecording(Guid recordingId);
        public Task<ICollection<Recording>> GetUserRecordings(Guid userId);
        public Task ChangeVisibility(Guid recordingId, bool isPublic);
        public Task DeleteRecording(Guid recordingId);
    }
}
