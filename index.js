/**
 *  is-discord-invitation - Checks if a string is an official Discord invitation link
 *  @version: v1.0.4
 *  @link: https://github.com/tutyamxx/is-discord-invitation
 *  @license: MIT
 **/

/**
 * Test if a string is a discord invitation or not.
 * @param {String} invite
 * @returns {Boolean}
 */
module.exports.isInvite = (invite) => {
	if(!invite || invite.length <= 0 || typeof invite !== 'string') return false;

	return /^(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discord.com\/invite)\/+[a-zA-Z0-9]{6,16}$/gi.test(invite);
};

/**
 * Match one or more discord invitations in a string.
 * @param {String} invite
 * @returns {[String] | null}
 */
module.exports.matchInvite = (invite) => {
	if(!invite || invite.length <= 0 || typeof invite !== 'string') throw new Error('The match function takes a string as parameter.');

	return invite.match(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discord.com\/invite)\/+[a-zA-Z0-9]{6,16}/gi);
};