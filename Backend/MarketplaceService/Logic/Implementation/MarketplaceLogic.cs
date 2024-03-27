using MarketplaceService.Logic.Interface;
using MarketplaceService.Models;

namespace MarketplaceService.Logic.Implementation
{
    public class MarketplaceLogic : IMarketplaceLogic
    {
        public async Task ChangeVisibility(Guid recordingId, bool isPublic)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteRecording(Guid recordingId)
        {
            throw new NotImplementedException();
        }

        public async Task<Recording> GetRecording(Guid recordingId)
        {
            throw new NotImplementedException();
        }

        public async Task<ICollection<Recording>> GetUserRecordings(Guid userId)
        {
            throw new NotImplementedException();
        }
    }
}
