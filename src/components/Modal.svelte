<script lang="ts">
	export let display: IIconText;
	import Icon from '@iconify/svelte';
</script>

	<div
		class="fixed z-10 inset-0 overflow-y-auto"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
	>
		<div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
			<div
				class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
			>
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<div class="mx-auto flex-shrink-0 flex items-center justify-center">
							<Icon icon={display.icon} height={24} />
						</div>
						<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
								{display.text}
							</h3>
							<div class="flex items-center pt-2 sm:justify-start justify-center">
								<slot name="head" />
							</div>
							<div class="mt-2">
								<p class="text-sm text-gray-500">
									<slot name="body" />
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end">
					<slot name="footer" />
				</div>
			</div>
		</div>
	</div>

