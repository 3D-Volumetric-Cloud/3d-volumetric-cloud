using Microsoft.AspNetCore.Mvc;

namespace MarketplaceService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //url/marketplace/
    public class MarketplaceController : Controller
    {
        [HttpGet("recordings/{recordingId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetRecording(Guid recordingId, [FromHeader] Guid userId)
        {
            throw new NotImplementedException();
        }

        [HttpGet("recordings")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetRecordingsFromUser([FromHeader] Guid userId)
        {
            throw new NotImplementedException();
        }

        [HttpPatch("recordings/{recordingId}/public/{isPublic}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult ChangeVisibility(Guid recordingId, bool isPublic, [FromHeader] Guid userId)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("recordings/{recordingId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult DeleteRecording(Guid recordingId, [FromHeader] Guid userId)
        {
            throw new NotImplementedException();
        }
    }
}
